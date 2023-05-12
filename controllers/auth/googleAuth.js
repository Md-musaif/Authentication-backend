const express = require("express");
const User = require("../../model/Users");
const verifyGoogleToken = require("../../services/verifyGoogleToken");

/**
 *
 * @param {express.request} req
 * @param {express.response } res
 */
module.exports = async function (req, res) {
    let { credential } = req.body;

    if (credential) {
        const { error, payload: profile } = await verifyGoogleToken(credential);
        console.log(profile);
        if (error) {
            return res.status(400).json({
                error: error.message,
            });
        }
        if (profile) {
            let user = await User.updateOne(
                { email: profile.email },
                { $set: { ...profile } },
                { upsert: true }
            );
            if (user) {
                res.send({ user });
            } else {
                res.status(400).send({ message: "Google authentication failed" });
            }
        }
    } else {
        res.status(401).send({ message: "Google credential required" });
    }
};