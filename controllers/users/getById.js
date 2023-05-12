const express = require("express");
const Users = require("../../model/Users");

/**
 *
 * @param {express.request} req
 * @param {express.response } res
 */
module.exports = function (req, res) {
  const id = req.user.id;
  Users.findById(id, { hash: 0, salt: 0 })
    // .populate("activityCategories")
    .then((user) => {
        let data={...user.toJSON()};
        // data.followingCount = user.following.length;
        // data.followersCount = user.followers.length;
      return res.json(data);
    })
    .catch((e) => {
      return res.status(404).json({ message: "User not found" ,error:e.message });
    });
};
