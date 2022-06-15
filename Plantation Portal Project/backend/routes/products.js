const router = require("express").Router();
const _ = require("lodash");
const { Products } = require("../models/productsModel");
const { Category } = require("../models/categoryModel");
const Store = require("../models/storeModel");
const { Order } = require("../models/orders.model");

router.get("/allProducts", async (req, res) => {
  Products.aggregate(
    [
      {
        $lookup: {
          from: "stores", // collection to join - Should have same name as collection mongoDB
          localField: "storeId", //field from the input documents
          foreignField: "_id", //field from the documents of the "from" collection
          as: "storeInfo", // output array field
        },
      },
      {
        $project: {
          //field we don't want to include in result
          "storeInfo.totalEarning": 0,
          "storeInfo.ordersCompleted": 0,
          "storeInfo.status": 0,
          "storeInfo.username": 0,
          "storeInfo.password": 0,
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

var storeArray = [];
const promise = async (singleProd, reqCategory) => {
  const productStore = await Store.findOne({
    _id: singleProd.storeId,
  });
  storeArray.push(productStore.storeName);

  const selectedProd = await Category.findOne({
    _id: singleProd.categoryId,
  });
  //   console.log(selectedProd);
  if (selectedProd.categoryName === reqCategory) {
    return true;
  } else {
    return false;
  }
};

router.get("/allproduct/:category", async (req, res) => {
  const reqCategory = req.params.category;
  try {
    var productsToSend = [];
    const prod = await Products.find();

    for (let i = 0; i < prod.length; i++) {
      var singleProd = prod[i];
      await promise(singleProd, reqCategory)
        .then((value) => {
          if (value === true) {
            var obj = {
              id: singleProd._id,
              productName: singleProd.productName,
              price: singleProd.price,
              category: reqCategory,
              details: singleProd.details,
              imageurl: singleProd.imageurl,
              itemsAvailable: singleProd.itemsAvailable,
              postedDate: singleProd.postedDate,
              storename: storeArray[i],
            };
            productsToSend.push(obj);
          }
          if (i === prod.length - 1) {
            res.status(200).json(productsToSend);
          }
        })
        .catch((err) => {
          console.log("Promise NOT fulfilled " + err);
        });
    }
    // res.json(productsToSend)
  } catch (err) {
    res.status(201).send("Error in getting the products..");
  }
});

//convert post ot get after getting sellerid from session
router.post("/allStoreProducts", async (req, res) => {
  try {
    const sellerId = req.body.id;
    // console.log(sellerId);
    // console.log(req.body);
    const storeProducts = await Products.find({ storeId: sellerId });
    res.status(200).json(storeProducts);
  } catch (err) {
    console.log(err);
    res.json([]);
  }
});

function getDate(params) {
  const d = new Date();
  let date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
  return date;
}

router.post("/addNewProduct/:id", async (req, res) => {
  const currentDate = getDate();
  const storeId = req.params.id;

  const product = {
    productName: req.body.productName,
    price: req.body.price,
    details: req.body.details,
    imageurl: req.body.imageurl,
    itemsAvailable: 100,
    storeId: storeId,
    postedDate: currentDate,
    category: req.body.category,
    rating: 0,
  };

  if (req.body.category === "plants") {
    product.type = req.body.type;
    product.place = req.body.place; //nature of product
    product.season = req.body.season;
  }

  const newProduct = new Products(product);
  const prod = await newProduct.save();

  res.json(prod);
});

router.delete("/deleteProduct/:id", async (req, res) => {
  try {
    const prodId = req.params.id;
    const result = await Products.deleteOne({ _id: prodId });
    res.status(200).send("Product deleted");
  } catch (err) {
    console.log(err);
  }
});

router.post("/editProduct", async (req, res) => {
  try {
    const prodId = req.body.id;
    const imageurl = req.body.imageurl;
    const name = req.body.productName;
    const price = req.body.price;
    const details = req.body.details;
    const category = req.body.category;

    let data = {
      productName: name,
      category: category,
      price: price,
      details: details,
    };

    if (category === "plants") {
      data.type = req.body.type;
      data.place = req.body.place; //nature of product
      data.season = req.body.season;
    } else {
      data.type = "";
      data.place = ""; //nature of product
      data.season = "";
    }

    if (imageurl.length != 0) {
      console.log("Image taken");
      data.imageurl = imageurl;
    } else {
      console.log(imageurl.length);
      console.log("Image not taken");
    }

    const result = await Products.updateOne(
      { _id: prodId },
      {
        $set: data,
      }
    );

    // console.log("Editing...........................");
    // console.log("Image is:", imageurl);
    // console.log(data);
    // console.log(result);

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/giveProductRating", async (req, res) => {
  try {
    const prodId = req.body.productId;
    const rating = req.body.rating;
    const orderId = req.body.orderId;
    console.log(prodId);
    console.log(rating);
    console.log(orderId);

    const prevRating = await Products.findOne({
      _id: prodId,
    }).select({ rating: 1 });

    let newRating = (parseInt(prevRating.rating) + parseInt(rating)) / 2;
    console.log(newRating);
    console.log(typeof newRating);

    newRating = Math.round(newRating);

    newRating = newRating.toString();
    console.log(newRating);
    console.log(typeof newRating);

    // const result = await Products.updateOne(
    //   {
    //     _id: prodId,
    //   },
    //   { $set: { rating: newRating } }
    // );

    // const orders = await Order.updateOne(
    //   {
    //     // _id: orderId,
    //     "productsDetail": { $elemMatch: { productId: `${prodId}` } },
    //   },
    //   { $set: { "productsDetail.$.rating": newRating } }
    // );

   

   

    // console.log(orders);

    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
  }
});

module.exports.productRouter = router;
