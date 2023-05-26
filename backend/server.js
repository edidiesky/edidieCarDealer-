import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
import { errorHandler, NotFound } from "./middleware/error-handler.js";

import mongoose from "mongoose";

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";

import uploadRoute from "./routes/uploadRoute.js";
import orderRoute from "./routes/orderRoutes.js";

app.use("/api/v1/product", productRoute);
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/upload", uploadRoute);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

const __dirname = path.resolve();

app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "/public/uploads"))
);

console.log(path.join(__dirname, "/public/uploads"));

mongoose.connect(
  process.env.MONGO_URl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongo has been connected");
  }
);
const buildIndex = path.join(__dirname, "../frontend/build/index.html");
// production mode process
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    //  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))

    res.sendFile(buildIndex)
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

// Middlewares
app.use(NotFound);
app.use(errorHandler);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
