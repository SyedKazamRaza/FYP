const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const sessions = require("express-session");

//const bodyParser = require('body-parser');
//const sessionRouter = require('./routes/session');
let User = require("./models/user.model");
let Store = require("./models/storeModel");

const { productRouter } = require("./routes/products");
const { chatRouter } = require("./routes/chat");
const blogRoute = require("./routes/blog");
const userRoute = require("./routes/user");
const { orderRouter } = require("./routes/orders");
const services = require("./routes/service");
const { contactRouter } = require("./routes/contactUs");
const sellerRoute = require("./routes/seller");
const storeRouter = require("./routes/store");

const app = express();

app.use(cors());

const oneDay = 1000 * 60 * 60 * 24;
var sessionMiddleware = sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: true,
});
app.use(sessionMiddleware);
var session;

mongoose
  .connect("mongodb://localhost/plantationPortal", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to mongodb.."))
  .catch((err) => console.log(`Error in connecting to mongodb ${err}`));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("I am root");
// });

app.use(cookieParser());

app.post("/login", (req, res) => {
  console.log("login called");
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, (err, user) => {
    if (user) {
      console.log("I am inside");
      console.log(user);
      console.log(password);
      if (user.password == password) {
        session = req.session;
        session.userid = req.body.email;
        console.log(req.session);
        console.log("Success");

        res.status(200).json({ message: "login sucess", user: user });
      } else {
        console.log("failure");

        res.status(201).json({ message: "wrong credentials", user: user });
      }
    } else {
      console.log("here");

      res.status(201).json("not register");
    }
  });
});

app.post("/loginStore", (req, res) => {
  const username = req.body.email;
  const password = req.body.password;

  Store.findOne({ username: username }, (err, user) => {
    if (user) {
      if (password === user.password) {
        session = req.session;

        session.storeName = user.storeName;
        session.storeid = user._id;

        console.log(req.session);
        res.status(200).json({ message: "login sucess", user: user });
      } else {
        res.status(201).json({ message: "wrong credentials" });
      }
    } else {
      res.status(201).json("not register");
    }
  });
});

app.post("/add", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const phno = req.body.phno;
  const type = req.body.type;

  const newUser = new User({
    email,
    password,
    fname,
    lname,
    phno,
    type,
  });

  const user = await newUser.save();
  session = req.session;
  session.userid = req.body.email;
  console.log(req.session);
  return res.status(200).json(user);
});

app.post("/addStore", async (req, res) => {
  const username = req.body.email;
  const password = req.body.password;
  const storeName = req.body.store;
  const phno = req.body.phno;
  const totalEarning = 0;
  const ordersCompleted = 0;
  const status = "pending";

  const newStore = new Store({
    username,
    password,
    storeName,
    phno,
    totalEarning,
    ordersCompleted,
    status,
  });

  const store = await newStore.save();
  session = req.session;
  session.storeName = req.body.store;
  session.storeid = store._id;

  console.log(req.session);
  return res.status(200).json(store);
});

app.use("/user", userRoute);
app.use("/store", storeRouter);
app.use("/seller", sellerRoute);
app.use("/products", productRouter);
app.use("/blogs", blogRoute);
app.use("/chat", chatRouter);
app.use("/order", orderRouter);
app.use("/services", services);
app.use("/contact", contactRouter);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log("Server is running at port " + port);
});

