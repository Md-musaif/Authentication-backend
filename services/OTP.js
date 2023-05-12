const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// +916238266413
const sendOtp = async (mobile) => {
  return new Promise(async (resolve, reject) => {
    await client.verify.
      v2.services(process.env.TWILIO_SERVICE_ID)
      .verifications.create({
        to: `+91${mobile}`,
        channel: "sms",
      })
      .then((response) => {
        response.valid = true;
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const verifyOtp = async (mobile, otp) => {
  return new Promise(async (resolve, reject) => {
    await client.verify.
      v2.services(process.env.TWILIO_SERVICE_ID)
      .verificationChecks.create({
        to: `+91${mobile}`,
        code: otp,
      })
      .then((response) => {
        console.log(response);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
module.exports = { sendOtp, verifyOtp } 
