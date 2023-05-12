const express = require("express");
const { validationResult } = require("express-validator");
const { generateAccessToken, generateRefreshToken } = require("../../services/JWT");
const Users = require('../../model/Users');
// const uploadFiles = require("../../services/upload/uploadFiles");
const deletefile = require("../../services/handle-files/deleteFile");

/**
 *
 * @param {express.request} req
 * @param {express.response } res
 * @param {express.NextFunction} next
 */
module.exports = async function (req, res) {
    let { body, file } = req
    let { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let user = await Users.findOne({ email });
    if (user) {
        return res.status(403).json({ message: "User already exist" });
    }
    let newUser = new Users(body);
    newUser.setPassword(password);
    // if (file) {
    //     await uploadFiles(file).then((response) => {
    //         newUser.avatar = response[0].path;
    //         deletefile(response[0].path)
    //       });
    // }
    newUser.save().then((User) => {
        const id = User.toJSON()._id
        const accessToken = generateAccessToken({ id });
        const refreshToken = generateRefreshToken({ id });
        return res
            .status(201)
            .json({ accessToken, refreshToken });
    }).catch((e) => {
        console.log(e);
        return res
            .status(400)
            .json({ error: e, message: "User registration failed" })
    });
};