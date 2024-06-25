const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user-controller");

router.post("/user", userController.createUser);
router.post("/signin", userController.signIn);
router.get("/isAuthenticated", userController.isAuthenticated);
// router.get("/city",cityController.getAll);
// router.patch("/city",cityController.update);
// router.delete("/city/:id",cityController.destroy);

module.exports = router;
