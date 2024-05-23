const express = require("express");

const upload = require("../middlewares/multer-middleware");
const validate = require("../middlewares/validate-zod-middleware");

const { registrationSchema } = require("../validators/registraton-validator");

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
  .post(
    upload.single("profileImage"),
    validate(registrationSchema),
    userRegister
  );

module.exports = router;
