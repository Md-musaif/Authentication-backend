var express = require("express");
// const multer = require("multer");
const getById = require("../controllers/users/getById");
// const update = require("../controllers/users/update");
// const listUser = require("../controllers/users/list");
// const deleteUser = require("../controllers/users/delete");
// const verifyUser = require("../controllers/users/isverified");
// const toggleFollow = require("../controllers/users/follows/toggleFollow");
// const myEvents = require("../controllers/users/myevents");

const fs = require("fs");

var router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     let pathName = "public/uploads/images";
//     if (file.fieldname === "avatar") {
//       pathName = "public/uploads/avatar";
//     }
//     fs.mkdirSync(pathName, { recursive: true });
//     cb(null, pathName);
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
//     cb(null, `${file.fieldname}-${uniqueSuffix}${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });

/* GET users listing. */
// router.get("/", listUser);
router.get("/user", getById);
// router.get("/:id", upload.single("avatar"), update);
//delete product
// router.delete("/:id", deleteUser);
// router.put("/:id", verifyUser);
// router.post("/follow", toggleFollow);
// router.get("/myevents/:id", myEvents);

module.exports = router;
