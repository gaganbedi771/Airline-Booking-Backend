const userService = require("../services/user-service");
const response = require("../utils/response");

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.createUser({ email, password });
    response.sendResponse(res, 200, user, true, "user created", {});
  } catch (error) {
    console.log("Controller layer error", error);
    response.sendResponse(res, 500, {}, false, "cannot create user", error);
  }
};

exports.signIn = async (req, res) => {
  try {
    // const id = req.query.id;
    // const user = await userService.getUser(id);
    const { email, password } = req.body;
    const token = await userService.signIn({ email, password });
    response.sendResponse(res, 200, token, true, "signin success", {});
  } catch (error) {
    console.log("Controller layer error", error);
    response.sendResponse(
      res,
      500,
      {},
      false,
      "cannot authenticate user",
      error
    );
  }
};



exports.isAuthenticated = async (req, res) => {
  try {
    const token = req.headers.token;
    const isVerified = await userService.isAuthenticated(token); 
 
    response.sendResponse(res, 200, isVerified, true, "user is authenticated", {});
  } catch (error) {
    console.log("Controller layer error", error);
    response.sendResponse(res, 500, {}, false, "user not authenticated", error);
  }
};