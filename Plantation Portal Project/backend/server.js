const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { productRouter } = require("./routes/products");
const app = express();

const blogRoute = require('./routes/blog');
const userRoute = require('./routes/user');

app.use(cors());

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

app.get("/", (req, res) => {
  res.send("I am root");
});

app.use("/products",productRouter);
app.use('/blogs', blogRoute);
app.use('/user', userRoute);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log("Server is running at port " + port);
});
