const router = require("express").Router();
const { Order } = require("../models/orders.model");
const { Products } = require("../models/productsModel");
const { Messages } = require("../models/contactUs.model");
let User = require("../models/user.model");

async function getTotalOrders() {
  try {
    let totalOrder = 0;
    const orders = await Order.find().then((result) => {
      result.map((singleOrder) => {
        totalOrder += 1;
      });
    });
    return totalOrder;
  } catch (err) {
    console.log(err);
  }
}

async function getTotalUsers() {
  try {
    let totalUsers = 0;
    const users = await User.find({ type: "customer" }).then((result) => {
      result.map((user) => {
        totalUsers += 1;
      });
    });

    return totalUsers;
  } catch (err) {
    console.log(err);
  }
}

async function getTotalProducts() {
  try {
    const numberOfProducts = await Products.find().then((result) => {
      return result.length;
    });
    return numberOfProducts;
  } catch (err) {
    console.log(err);
  }
}

async function getTotalEarning() {
  try {
    let totalEarning = 0;
    const orders = await Order.find()
      .select({
        productsDetail: 1,
      })
      .then((result) => {
        result.map((singleOrder) => {
          singleOrder.productsDetail.map((singleProd) => {
            if (singleProd.status === "delivered") {
              totalEarning += singleProd.total;
            }
          });
        });
      });

    return totalEarning;
  } catch (err) {
    console.log(err);
  }
}

router.get("/adminHome", async (req, res) => {
  try {
    const totalOrders = await getTotalOrders();
    const numberOfProducts = await getTotalProducts();

    const numberOfUsers = await getTotalUsers();
    const totalEarning = await getTotalEarning();
    const dataToSend = {
      totalOrders,
      numberOfProducts,
      numberOfUsers,
      totalEarning,
    };
    res.status(200).json(dataToSend);
  } catch (err) {
    console.log(err);
  }
});

router.route("/messages").get((req, res) => {
  Messages.find()
    .then((Messages) => res.json(Messages))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/messages/update/:id").post(async (req, res) => {
  Messages.findByIdAndUpdate(req.params.id, { $set: { status: "closed" } })
    .then(() => {
      res.json("Message updated!");
      console.log("res");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

async function calculatePendingEarning() {
  try {
    let pendingEarning = 0;

    await Order.find().then((result) => {
      result.map((singleOrder) => {
        singleOrder.productsDetail.map((singleProd) => {
          if (singleProd.status === "active") {
            pendingEarning = pendingEarning + singleProd.total;
          }
        });
      });
    });

    return pendingEarning;
  } catch (err) {
    console.log(err);
  }
}

async function calculateCanceledEarning() {
  let cancelEarning = 0;
  await Order.find().then((result) => {
    result.map((singleOrder) => {
      singleOrder.productsDetail.map((singleProd) => {
        if (singleProd.status === "canceled") {
          cancelEarning = cancelEarning + singleProd.total;
        }
      });
    });
  });
  return cancelEarning;
}

router.get("/earnings", async (req, res) => {
  try {
    const pending = await calculatePendingEarning();
    const cancel = await calculateCanceledEarning();
    const totalEarning = await getTotalEarning();
    const totalOrders = await getTotalOrders();

    const dataToSend = {
      pending,
      cancel,
      totalEarning,
      totalOrders,
    };
    res.status(200).json(dataToSend);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getTransactions", async (req, res) => {
  try {
    const orders = Order.aggregate([
      {
        $lookup: {
          from: "users", // collection to join - Should have same name as collection mongoDB
          localField: "userId", //field from the input documents
          foreignField: "_id", //field from the documents of the "from" collection
          as: "userInfo", // output array field
        },
      },
      {
        $project: {
          "userInfo.password": 0,
        },
      },
    ]).then((result) => {
      //18
      res.status(200).json(result);
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
