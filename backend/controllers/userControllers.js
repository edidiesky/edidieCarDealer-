import bcrypt from "bcryptjs";
import moment from "moment";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";

//register user
// Not Private
const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password, phone, country } = req.body;
  //
  if (!firstname || !lastname || !email || !password) {
    res.status(404);
    throw new Error("Please fill in the valid credentails");
  }
  // check if the user exist
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(404);
    throw new Error("The user does exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);
  const Tempuser = {
    email,
    firstname,
    lastname,
    password: hashedpassword,
    phone,
    country,
    isAdmin,
  };
  let user = await User.create(Tempuser);
  //
  const token = jwt.sign(
    {
      userId: user._id,
      isAdmin: user.isAdmin,
      firstname: user.firstname,
      lastname: user.lastname,
    },
    process.env.JWT_CODE,
    { expiresIn: "30d" }
  );

  // destructure the user onject sent to the clien
  user = {
    _id: user?._id,
    firstname: user?.firstname,
    lastname: user?.lastname,
    phone: user?.phone,
    email: user?.email,
    isAdmin: user?.isAdmin,
    country: user?.country,
    state: user?.state,
    postalCode: user?.postalCode,
  };

  res
    .cookie(process.env.token, token, {
      httpOnly: "true",
      maxAge:30 * 24 * 3600 * 1000,
      secure: process.env.NODE_ENV !== 'development',
    })
    .status(200)
    .json({ user });
});

//Login the  user
// Not Private
const LoginUser = asyncHandler(async (req, res) => {
  // check if the email has been provided
  const { email, password } = req.body;
  if (!email) {
    res.status(404);
    throw new Error("Please fill in the valid credentails");
  }
  // Find the user in the database

  let user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  const verifyPassword = await bcrypt.compare(password, user.password);
  if (!verifyPassword) {
    res.status(404);
    throw new Error("Please provide a valid password");
  }

  const token = jwt.sign(
    {
      userId: user._id,
      isAdmin: user.isAdmin,
      firstname: user.firstname,
      lastname: user.lastname,
    },
    process.env.JWT_CODE,
    { expiresIn: "30d" }
  );

  // destructure the user onject sent to the clien
  user = {
    _id: user?._id,
    firstname: user?.firstname,
    lastname: user?.lastname,
    phone: user?.phone,
    email: user?.email,
    isAdmin: user?.isAdmin,
    country: user?.country,
    state: user?.state,
    postalCode: user?.postalCode,
  };

  res
    .cookie(process.env.token, token, {
      httpOnly: "true",
      maxAge:30 * 24 * 3600 * 1000,
      secure: process.env.NODE_ENV !== 'development',
    })
    .status(200)
    .json({ user });
});
//PRIVATE/ADMIN
const GetUser = asyncHandler(async (req, res) => {
  const { userId, username } = req.user;
  const user = await User.findOne({ _id: req.params.id });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  const {} = user;
  res.status(200).json({ user });
});

//PRIVATE/USER
const UpdateUser = asyncHandler(async (req, res) => {
  // const { passoword } = req.body;
  const { userId, username } = req.user;
  const Loginuser = await User.findById({ _id: req.params.id });
  if (!Loginuser) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);

  const updatedUser = await User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      _id: Loginuser?._id,
      firstname: Loginuser?.firstname,
      lastname: Loginuser?.lastname,
      phone: Loginuser?.phone,
      email: Loginuser?.email,
      isAdmin: Loginuser?.isAdmin,
      country: Loginuser?.country,
      state: Loginuser?.state,
      postalCode: Loginuser?.postalCode,
      password: hashedpassword,
    },
    { new: true }
  );
  res.status(200).json({ updatedUser });
});
//PRIVATE/ADMIN
const AdminUpdateUser = asyncHandler(async (req, res) => {
  const { userId, username } = req.user;
  const Loginuser = await User.findById({ _id: req.params.id });
  if (!Loginuser) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);

  const updatedUser = await User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      _id: Loginuser?._id,
      firstname: Loginuser?.firstname,
      lastname: Loginuser?.lastname,
      phone: Loginuser?.phone,
      email: Loginuser?.email,
      isAdmin: Loginuser?.isAdmin,
      country: Loginuser?.country,
      state: Loginuser?.state,
      postalCode: Loginuser?.postalCode,
      password: hashedpassword,
    },
    { new: true }
  );
  res.status(200).json({ updatedUser });
});
//PRIVATE/ADMIN
const DeleteUser = asyncHandler(async (req, res) => {
  const { userId, username } = req.user;
  const Loginuser = await User.findById({ _id: req.params.id });
  if (!Loginuser) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  await User.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json({ msg: "The user has been successfully deleted" });
});

// PRIVATE/ADMIN
const GetAllUser = asyncHandler(async (req, res) => {
  const limit = req.query.limit || 5;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;

  const totalUser = await User.countDocuments({});

  const user = await User.find({}).skip(skip).limit(limit);

  const noOfPages = Math.ceil(totalUser / limit);
  res.status(200).json({ user, noOfPages, totalUser });
});

// PRIVATE
const LogoutUser = asyncHandler(async (req, res) => {
  res
    .clearCookie(process.env.token, { sameSite: "none", secure: true })
    .status(200)
    .send("You have been logged out successfull");
});
// PRIVATE/ADMIN
const AggregateUserStats = asyncHandler(async (req, res) => {
  let usersStats = await User.aggregate([
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
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 8 },
  ]);

  // modify the stats
  usersStats = usersStats.map((stats) => {
    const {
      _id: { year, month },
      count,
    } = stats;
    const date = moment()
      .month(month - 1)
      .year(year)
      .format("MMM Y");

    return { date, count };
  });

  res.status(200).json({ usersStats });
});

export {
  registerUser,
  LoginUser,
  GetUser,
  GetAllUser,
  UpdateUser,
  DeleteUser,
  AdminUpdateUser,
  AggregateUserStats,
  LogoutUser,
};
