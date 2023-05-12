var express = require("express");
const { checkSchema } = require("express-validator");
// const multer = require("multer");

// user login n register
const login = require("../controllers/auth/login");
const register = require("../controllers/auth/register");
const regenerateToken = require("../controllers/auth/regenerateToken");
// otp sent to email
const forgetPassword = require("../controllers/auth/forgetPassword");
const resetPassword = require("../controllers/auth/resetPassword");
const sendTokentoEmail = require("../controllers/auth/sendTokentoEmail");
const verifyEmail = require("../controllers/auth/verifyEmail");
// login through email id
const googleAuth = require("../controllers/auth/googleAuth");
//otp sent to mobile
const otpSend = require("../controllers/auth/otpSend");
const verifyOtp = require("../controllers/auth/verifyOtp");

var router = express.Router();
const fs = require("fs");

const userValidationRules = checkSchema({
  email: {
    isEmail: true,
    errorMessage: "Please provide a valid email address",
  },
  name: {
    isLength: {
      options: { min: 2 },
      errorMessage: "Name must be at least 2 characters long",
    },
  },
  password: {
    isLength: {
      options: { min: 6 },
      errorMessage: "Password must be at least 6 characters long",
    },
  },
});

module.exports = userValidationRules;

router.post("/login", login);
router.post(
  "/register",
  // upload.single("avatar"),
  // userValidationRules,
  register
);
router.post("/otp/send", otpSend);
router.post("/otp/verify", verifyOtp);
router.post("/google", googleAuth);
router.post("/token/regenerate", regenerateToken);
router.post("/password/forget", forgetPassword);
router.post("/password/reset", resetPassword);
router.post("/email/send", sendTokentoEmail);
router.post("/email/verify", verifyEmail);
router.post("/email/verify", verifyEmail);

module.exports = router;
