const { sendOtp } = require("../../services/OTP");

module.exports = async (req, res) => {
    const phone = req.body.phone;
    try {

        await sendOtp(phone)
        res.json({ message: 'OTP code sent successfully' });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message, message: 'Failed to send OTP' });
    }
}