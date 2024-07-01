exports.create = async (req, res) => {
    try {
      const city = await cityService.createCity(req.body);
      return sendResponse(res, 201, city, true, "City created", {});
    } catch (error) {
      // console.log(error);
      return sendResponse(
        res,
        500,
        {},
        false,
        "Not able to create the city",
        error
      );
    }
  };