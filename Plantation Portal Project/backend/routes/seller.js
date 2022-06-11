const router = require("express").Router();
const { Order } = require("../models/orders.model");
const { Products } = require("../models/productsModel");
const { Category } = require("../models/categoryModel");
const { Store } = require("../models/storeModel");

// function getTotalOrdersOfSeller(sellerId) {
//     Order.find({
//         productsDetail.sellerId :value})
// }

async function getTotalOrders(sellerID) {
  try {
    let totalOrder = 0;
    const orders = await Order.find({
      productsDetail: { $elemMatch: { sellerId: sellerID } },
    }).then((result) => {
      result.map((singleOrder) => {
        singleOrder.productsDetail.map((singleProd) => {
          if (singleProd.sellerId === sellerID) {
            totalOrder += 1;
          }
        });
      });
    });
    return totalOrder;
  } catch (err) {
    console.log(err);
  }
}

async function getTotalClients(sellerID) {
  try {
    const clients = await Order.find({
      productsDetail: { $elemMatch: { sellerId: sellerID } },
    }).select({ userId: 1 });

    return clients;
  } catch (err) {
    console.log(err);
  }
}

async function getTotalProducts(sellerID) {
  try {
    const numberOfProducts = await Products.find({ storeId: sellerID }).then(
      (result) => {
        return result.length;
      }
    );
    return numberOfProducts;
  } catch (err) {
    console.log(err);
  }
}

async function getTotalEarning(sellerID) {
  try {
    let totalEarning = 0;
    const orders = await Order.find({
      productsDetail: { $elemMatch: { sellerId: sellerID } },
    })
      .select({
        productsDetail: 1,
      })
      .then((result) => {
        result.map((singleOrder) => {
          singleOrder.productsDetail.map((singleProd) => {
            // console.log(singleProd);
            if (singleProd.sellerId === sellerID) {
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

router.get("/sellerHome", async (req, res) => {
  try {
    const totalOrders = await getTotalOrders("61d9354e52dbabae9bd60541");
    const numberOfProducts = await getTotalProducts("61d9354e52dbabae9bd60541");

    const numberOfClients = await getTotalClients(
      "61d9354e52dbabae9bd60541"
    ).then((result) => {
      const unique = [...new Set(result.map((item) => item.userId.toString()))];
      return unique.length;
    });

    const totalEarning = await getTotalEarning("61d9354e52dbabae9bd60541");
    const dataToSend = {
      totalOrders,
      numberOfProducts,
      numberOfClients,
      totalEarning,
    };
    res.status(200).json(dataToSend);
  } catch (err) {
    console.log(err);
  }
});

router.get("/sellerOrders", async (req, res) => {
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
      {
        $match: {
          productsDetail: {
            $elemMatch: { sellerId: "61d9354e52dbabae9bd60541" },
          },
        },
      },
    ])
      .sort({ dateTime: -1 })
      .then((result) => {
        res.status(200).json(result);
      });
  } catch (err) {
    console.log(err);
    res.json([]);
  }
});

function calculateActiveOrders(orderProducts, sellerID) {
  let activeOrder = 0;
  orderProducts.map((singleOrder) => {
    singleOrder.productsDetail.map((singleProd) => {
      if (singleProd.sellerId === sellerID && singleProd.status === "active") {
        activeOrder += 1;
        console.log(singleProd.sellerId);
      }
    });
  });
  return activeOrder;
}

function calculateDeliveredOrders(orderProducts, sellerID) {
  let deliverOrder = 0;
  orderProducts.map((singleOrder) => {
    singleOrder.productsDetail.map((singleProd) => {
      if (
        singleProd.sellerId === sellerID &&
        singleProd.status === "delivered"
      ) {
        deliverOrder += 1;
      }
    });
  });
  return deliverOrder;
}

function calculateCancelledOrders(orderProducts, sellerID) {
  let cancelOrder = 0;
  orderProducts.map((singleOrder) => {
    singleOrder.productsDetail.map((singleProd) => {
      if (
        singleProd.sellerId === sellerID &&
        singleProd.status === "canceled"
      ) {
        cancelOrder += 1;
      }
    });
  });
  return cancelOrder;
}

router.get("/sellerOrdersStats", async (req, res) => {
  try {
    const orders = await Order.find({
      productsDetail: { $elemMatch: { sellerId: "61d9354e52dbabae9bd60541" } },
    }).then((result) => {
      const numberOfActiveOrders = calculateActiveOrders(
        result,
        "61d9354e52dbabae9bd60541"
      );
      const numberOfDeliverOrders = calculateDeliveredOrders(
        result,
        "61d9354e52dbabae9bd60541"
      );
      const numberOfCancelledrOrders = calculateCancelledOrders(
        result,
        "61d9354e52dbabae9bd60541"
      );

      const dataToSend = {
        numberOfActiveOrders,
        numberOfDeliverOrders,
        numberOfCancelledrOrders,
      };
      res.status(200).json(dataToSend);
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/changeOrderStatus", async (req, res) => {
  try {
    const orderId = req.body.orderId;
    const productId = req.body.productId;
    const newStatus = req.body.newStatus;

    const orders = await Order.updateOne(
      {
        _id: orderId,
        productsDetail: { $elemMatch: { productId: productId } },
      },
      { $set: { "productsDetail.$.status": newStatus } }
    );

    res.status(200).send("ok");
  } catch (err) {
    console.log(err);
  }
});

router.get("/topProducts", async (req, res) => {
  try {
    const prod = await Products.find({
      storeId: "61d9354e52dbabae9bd60541",
    }).sort({
      price: -1,
    });

    res.status(200).json(prod);
  } catch (err) {
    console.log(err);
  }
});

router.route("/recentSales").get((req, res) => {
  Order.aggregate(
    [
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
          //field we don't want to include in result
          "userInfo.password": 0,
        },
      },
      {
        $match: {
          productsDetail: {
            $elemMatch: { sellerId: "61d9354e52dbabae9bd60541" },
          },
        },
      },
    ],
    function (error, data) {
      if (error) {
        console.log("Error received");
        res.json([]);
      }
      console.log(data);
      res.json(data);
    }
  );
});

module.exports = router;
