const OTP = require("../../model/OTP");
const Users = require("../../model/Users");
const otpGenerator = require("otp-generator");
const { sendmail } = require("../../services/sendMail");
const verifyEmail = require("../../utils/emailTemplates/verifyEmail");
const moment = require("moment");

module.exports = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (user) {
      const otp = otpGenerator.generate(6, {
        alphabets: false,
        upperCase: false,
        specialChars: false,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
      });
      const expirationTime = moment().add("10", "M");
      await OTP.create({ otp, expirationTime, email });
      const { html, subject } = verifyEmail(user.name, otp);
      await sendmail({
        from: `<${process.env.EMAIL_ADDRESS}>`,
        to: `${email}`,
        subject,
        html,
      });
      res.json({ message: "Email token sent successfully" });
    }
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ error: e.message, message: "Failed to send email token" });
  }
};
