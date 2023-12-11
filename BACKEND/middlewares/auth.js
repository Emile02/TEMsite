require("dotenv").config();
const jwt = require("jsonwebtoken");

// checks if token exists in the Authorization Bearer Header
exports.verifyToken = (req, res, next) => {
  
  console.log("test1");
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Access denied 1" });
  } else {
    req.token = token;
    next();
  }
};

// checks if token is not invalid/expired
exports.verifyValidity = (req, res, next) => {
  console.log("test2");
  try {
    const decoded = jwt.verify(req.token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Access denied 2" });
  }
};