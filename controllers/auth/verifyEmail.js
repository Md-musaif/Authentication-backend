const OTP = require("../../model/OTP");
const Users = require("../../model/Users");
const moment = require("moment");
module.exports = async (req, res) => {
  let { body } = req;
  let { email, code } = body;
  try {
    if (code) {
      let otp = await OTP.findOne({
        otp: code,
        expirationTime: { $gt: moment() },
      });
      if (otp) {
        let user = await Users.findOneAndUpdate(
          { email: otp.email },
          { $set: { isVerified: true } },
          { new: true }
        );
        res.json({ message: "OTP verified successfully!",user });
      }
    } else {
      res.status(401).json({ message: "Incorrect OTP" });
    }
  } catch (e) {
    res
      .status(500)
      .json({ error: e.message, message: "OTP validation failed!" });
  }
};
