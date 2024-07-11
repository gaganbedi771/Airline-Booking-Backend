const express=require("express");
const router= express.Router();
const bookingController=require("../../controllers/booking-controller");


// router.post("/city",cityController.create);
router.post("/booking",bookingController.create);
// router.patch("/booking",bookingController.update);


module.exports=router;