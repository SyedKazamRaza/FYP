const router = require("express").Router();
const { Order } = require("../models/orders.model");
const { Products } = require("../models/productsModel");
const { Category } = require("../models/categoryModel");
const Store = require("../models/storeModel");

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

router.get("/sellerHome/:id", async (req, res) => {
  try {
    const storeid = req.params.id;
    console.log("called");
    console.log(storeid);

    const totalOrders = await getTotalOrders(storeid);
    const numberOfProducts = await getTotalProducts(storeid);

    const numberOfClients = await getTotalClients(storeid).then((result) => {
      const unique = [...new Set(result.map((item) => item.userId.toString()))];
      return unique.length;
    });

    const totalEarning = await getTotalEarning(storeid);
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

router.get("/sellerOrders/:id", async (req, res) => {
  try {
    const storeid = req.params.id;

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
            $elemMatch: { sellerId: storeid },
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

router.get("/sellerOrdersStats/:id", async (req, res) => {
  try {
    const storeid = req.params.id;

    const orders = await Order.find({
      productsDetail: { $elemMatch: { sellerId: storeid } },
    }).then((result) => {
      const numberOfActiveOrders = calculateActiveOrders(result, storeid);
      const numberOfDeliverOrders = calculateDeliveredOrders(result, storeid);
      const numberOfCancelledrOrders = calculateCancelledOrders(
        result,
        storeid
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

    console.log("Orders: ", orders);

    res.status(200).send("ok");
  } catch (err) {
    console.log(err);
  }
});

router.get("/topProducts/:id", async (req, res) => {
  try {
    const storeid = req.params.id;

    const prod = await Products.find({
      storeId: storeid,
    }).sort({
      price: -1,
    });

    res.status(200).json(prod);
  } catch (err) {
    console.log(err);
  }
});

router.route("/recentSales/:id").get((req, res) => {
  try {
    const storeid = req.params.id;

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
              $elemMatch: { sellerId: storeid },
            },
          },
        },
      ],
      function (error, data) {
        if (error) {
          console.log("Error received");
          res.json([]);
        }
        res.json(data);
      }
    );
  } catch (err) {
    console.log(err);
  }
});

function calculatePendingEarning(orderProducts, sellerID) {
  let pendingEarning = 0;
  orderProducts.map((singleOrder) => {
    singleOrder.productsDetail.map((singleProd) => {
      if (singleProd.sellerId === sellerID && singleProd.status === "active") {
        pendingEarning = pendingEarning + singleProd.total;
      }
    });
  });
  return pendingEarning;
}

function calculateWithdrawnEarning(orderProducts, sellerID) {
  let withdrawnEarning = 0;
  orderProducts.map((singleOrder) => {
    singleOrder.productsDetail.map((singleProd) => {
      if (
        singleProd.sellerId === sellerID &&
        singleProd.status === "delivered"
      ) {
        withdrawnEarning = withdrawnEarning + singleProd.total;
      }
    });
  });
  return withdrawnEarning;
}

function calculateCanceledEarning(orderProducts, sellerID) {
  let cancelEarning = 0;
  orderProducts.map((singleOrder) => {
    singleOrder.productsDetail.map((singleProd) => {
      if (
        singleProd.sellerId === sellerID &&
        singleProd.status === "canceled"
      ) {
        cancelEarning = cancelEarning + singleProd.total;
      }
    });
  });
  return cancelEarning;
}

router.get("/storeEarningStats/:id", async (req, res) => {
  try {
    const storeid = req.params.id;

    const orders = await Order.find({
      productsDetail: { $elemMatch: { sellerId: storeid } },
    }).then((result) => {
      const pending = calculatePendingEarning(result, storeid);
      const withdrawn = calculateWithdrawnEarning(result, storeid);
      const cancel = calculateCanceledEarning(result, storeid);

      const dataToSend = {
        pending,
        withdrawn,
        cancel,
      };
      res.status(200).json(dataToSend);
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/getStoreTransactions/:id", async (req, res) => {
  try {
    const storeid = req.params.id;
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
            $elemMatch: {
              sellerId: storeid,
            },
          },
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

router.get("/getStore/:id", async (req, res) => {
  try {
    const storeId = req.params.id;
    const store = await Store.find({ _id: storeId });
    if (store.length === 0) {
      res.status(201).send("Store not Exist");
    }
    res.status(200).json(store[0]);
  } catch (err) {
    console.log(err);
  }
});

router.post("/updateStore", async (req, res) => {
  const storeId = req.body.id;
  const us_name = req.body.email;
  const stName = req.body.name;
  const pwd = req.body.password;
  const phone = req.body.phoneNo;

  const exist = await Store.find({ username: us_name });

  if (exist.length > 0) {
    if (exist[0]._id.toString() == storeId) {
      console.log("Email exist & same store");
      const storeData = {
        storeName: stName,
        password: pwd,
        phno: phone,
      };

      // console.log("Store data is: ", storeData);
      const update = await Store.updateOne(
        { _id: storeId },
        {
          $set: storeData,
        }
      );
      res.status(200).send("updated");
    } else {
      // console.log("Email exist & different store");
      res.status(200).send("Email already exists");
    }
  } else {
    console.log("Email not exist");

    const storeData = {
      storeName: stName,
      username: us_name,
      password: pwd,
      phno: phone,
    };

    const update = await Store.updateOne(
      { _id: storeId },
      {
        $set: storeData,
      }
    );
    res.status(200).send("updated");
  }
});

router.post("/changeProductRating", async (req, res) => {
  try {
    const orderId = req.body.orderId;
    const productId = req.body.productId;
    const rating = req.body.rating;

    const prevRating = await Products.findOne({
      _id: productId,
    }).select({ rating: 1 });

    let newRating = (parseInt(prevRating.rating) + parseInt(rating)) / 2;
    console.log(newRating);
    console.log(typeof newRating);

    newRating = Math.round(newRating);

    newRating = newRating.toString();

    const result = await Products.updateOne(
      {
        _id: productId,
      },
      { $set: { rating: newRating } }
    );

    const orders = await Order.updateOne(
      {
        _id: orderId,
        productsDetail: { $elemMatch: { productId: productId } },
      },
      { $set: { "productsDetail.$.rating": newRating } }
    );

    // res.status(200).send(orders);

    console.log("Orders: ", orders);

    res.status(200).send("ok");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
