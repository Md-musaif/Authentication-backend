const { verifyOtp } = require("../../services/OTP")

module.exports = async (req, res) => {
    let { body } = req
    let { phone, otp } = body
    try {
        let verifications = await verifyOtp(phone, otp)
        console.log(verifications);
        if(verifications.valid){
            res.json({ message: "OTP verified successfully!" })
        }else{
            res.status(401).json({  message: 'Incorrect OTP' })
        }
    } catch (e) {
        res.status(500).json({ error: e.message, message: 'OTP validation failed!' })
    }
}