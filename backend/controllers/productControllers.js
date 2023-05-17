import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";
import mongoose from "mongoose";
import moment from "moment/moment.js";  
// GET All Product
//  Private
const GetAllProduct = asyncHandler(async (req, res) => {
  // instantiate the request queries
  const search = req.query.search;
  const sort = req.query.sort;
  const colors = req.query.colors;
  const minprice = req.query.minprice;
  const category = req.query.category;
  const maxprice = req.query.maxprice;
  const queryObject = {};
  let result = Product.find(queryObject);


  // minimum price
  if (minprice) {
    queryObject.price = { $gt: minprice }
  }
  // maxprice
  if (maxprice) {
    queryObject.price = { $gt: maxprice }
  }
  if (search) {
    queryObject.title = { $regex: search, $options: "i" };
  }
  if (colors) {
    queryObject.colors = { $regex: colors, $options: "i" };
  }
  // perform sorting operation
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "price") {
    result = result.sort("price");
  }
  if (sort === "rating") {
    result = result.sort("-rating");
  }

  const limit = req.query.limit || 15;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;

  const totalProduct = await Product.countDocuments({});

  const product = await result.find(queryObject).skip(skip).limit(limit);

  const noOfPages = Math.ceil(totalProduct / limit);

  res.status(200).json({ product, noOfPages, totalProduct });

});

// GET SINGLE Product
// Not Private
const GetSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Product
  const product = await Product.findById({ _id: id });
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.status(200).json({ product });
});

// GET SINGLE Product
// Not Private
const CreateSingleProduct = asyncHandler(async (req, res) => {
  // get the request body parameters
  const {
    title,
    image,
    brand,
    category,
    description,
    size,
    price,
    countInStock,
    shortdescription,
    colors,
    tags,
    qualities,
    capacity,
    discount
  } = req.body;
  const { userId } = req.user;
  // console.log(...tags);

  const product = await Product.create({
    title,
    image,
    brand,
    category,
    description,
    size,
    price,
    countInStock,
    user: userId,
    shortdescription,
    colors,
    tags,
    qualities,
    capacity,
    discount
  });

  res.status(200).json({ product });
});


//PRIVATE
// ADMIN
const UpdateProduct = asyncHandler(async (req, res) => {
  const { userId, name } = req.user;
  const {
    title,
    image,
    brand,
    category,
    description,
    size,
    price,
    countInStock,
    shortdescription,
    colors,
    tags,
    qualities,
    capacity,
    discount
  } = req.body;
  const product = await Product.findById({ _id: req.params.id });

  if (!product) {
    res.status(404);
    throw new Error("Product does not exist");
  }

  const updatedproduct = await Product.findByIdAndUpdate(
    { _id: req.params.id },
     {
      title,
      image,
      brand,
      category,
      description,
      size,
      price,
      countInStock,
      shortdescription,
      colors,
      tags,
      qualities,
      capacity,
      discount
    },
    { new: true }
  );
  res.status(200).json({ updatedproduct });
});

//PRIVATE/
// ADMIN
const DeleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById({ _id: id });
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  await Product.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json({ msg: "The Product has been successfully deleted" });
});

//Public/
// user and admin
const ReviewProduct = asyncHandler(async (req, res) => {
  // instantiate the request parameters
  const { userId, isAdmin, firstname, lastname } = req.user;
  const { userrating, comment } = req.body;
  const { id } = req.params;
  // Find the product
  const product = await Product.findById({ _id: id });
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  // Check if the user has already reviewed the product
  const alreadyReviewed = product.reviews.find(
    (x) => x.user.toString() === userId.toString()
  );
  if (alreadyReviewed) {
    res.status(404);
    throw new Error("Product has already been reviewed by you");
  } else {
    // if not, add a review
    const reviewData = {
      userrating: userrating,
      comment,
      firstname,
      lastname,
      user: userId,
    };
    // push the required data into the review array
    product.reviews.push(reviewData);
    // // get the number of reviews from the length, and get the ratings from ratio of
    product.numReviews = product.reviews.length;
    const TotalRating = product.reviews.reduce(
      (acc, item) => item.userrating + acc,
      0
    );
    // // Total rating
    product.rating = Math.ceil(TotalRating / product.reviews.length);
    // // saving the doc
    await product.save();
    res
      .status(200)
      .json({ message: "The product has been successfully reviewed" });
  }
});

const GetTopRatedProduct = asyncHandler(async (req, res) => {
  // get the product but based on the rating and then send 4 product
  const toprated = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.status(200).json({ toprated });
});

// PRIVATE/ADMIN
const AggregateUserProductStats = asyncHandler(async (req, res) => {
  // get the total Product based on the title
  let stats = await Product.aggregate([
    // match the users to nothing
    { $match: {} },
    // group based on year and month

    {
      $group: {
        _id: {
          year: {
            $year: "$createdAt",
          },
          month: {
            $month: "$createdAt",
          },
        },
        count: { $sum: 1 }
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
  ]);

  // // modify the stats
  stats = stats.map((stats) => {
    const {
      count,
      _id: { year, month },
    } = stats;
    const date = moment()
      .month(month - 1)
      .year(year)
      .format("MMM Y");

    return { date, count };
  });

  res.status(200).json({ stats });
});

export {
  GetSingleProduct,
  GetAllProduct,
  UpdateProduct,
  DeleteProduct,
  ReviewProduct,
  GetTopRatedProduct,
  CreateSingleProduct,
  AggregateUserProductStats,
};
