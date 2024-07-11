const express=require("express");
const router= express.Router();
const cityController=require("../../controllers/city-controller");
const flightController=require("../../controllers/flight-controller");
const flightMiddleware=require("../../middlewares/flight-middlewares");

router.post("/city",cityController.create);
router.get("/city/:id",cityController.get);
router.get("/city",cityController.getAll);
router.patch("/city",cityController.update);
router.delete("/city/:id",cityController.destroy);


router.post("/flight", flightMiddleware.validateFlightData ,flightController.create);
router.get("/flight/:id",flightController.get);
router.patch("/flight/:id",flightController.update);
router.get("/flight",flightController.getAll);

module.exports=router;