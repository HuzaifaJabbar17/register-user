const express = require("express");
const upload = require("../middlewares/multer-middleware");

const router = express.Router();

const {
  firstController,
  userRegister,
  userRegisterUI,
} = require("../controllers/user.controllers");

router.route("/").get(firstController);
router
  .route("/register")
  .get(userRegisterUI)
  .post(upload.single("profileImage"), userRegister);

module.exports = router;
