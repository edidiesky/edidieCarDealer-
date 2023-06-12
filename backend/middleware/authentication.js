import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = (req, res, next) => {
  //check for the token
  const token = req.cookies.token;
  // console.log(token.split('=')[1]);

  if (!token) {
    res.status(403).json({
      messsage: "Please provide the token. No token has been provided",
    });
  }
  // Verify the token being gotten from the header
  try {
    const Verifiedtoken = jwt.verify(token, process.env.JWT_CODE);
    if (!Verifiedtoken) {
      res.status(403).json({ messsage: "Please provide a valid token" });
    }

    const { userId, isAdmin, firstname, lastname } = Verifiedtoken;

    req.user = { userId, isAdmin, firstname, lastname };
    next();
  } catch (err) {
    res.status(403).json({ messsage: "Not authorized to access this route" });
  }
};

const adminMiddleware = (req, res, next) => {
  if (!req.user && !req.user.isAdmin) {
    res.status(403).json({ messsage: 'You can"t acccess this route' });
  }
  next();
};
export { adminMiddleware, authMiddleware };
