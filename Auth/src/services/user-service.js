const userRepository = require("../repository/user-repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig");

exports.createUser = async (data) => {
  try {
    return await userRepository.create(data);
  } catch (error) {
    console.log("Service layer error", error);
    throw error;
  }
};

exports.getUser = async (id) => {
  try {
    return await userRepository.getById(data);
  } catch (error) {
    console.log("Service layer error", error);
    throw error;
  }
};

exports.signIn = async (userData) => {
  try {
    const user = await userRepository.getByEmail(userData.email);

    if (!user) {
      throw { error: "User desnot exists" };
    }

    const isMatch = matchPassword(userData.password, user.password);

    if (!isMatch) {
      throw { error: "Incorrect Password" };
    }
    const token = jwt.sign({ email: user.email, id: user.id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return token;
  } catch (error) {
    console.log("Service layer error", error);
    throw error;
  }
};

function matchPassword(plainPassword, encryprtedPassword) {
  try {
    return bcrypt.compareSync(plainPassword, encryprtedPassword);
  } catch (error) {
    console.log("password match function error", error);
    throw error;
  }
}

function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.log("token not verified", error);
    throw error;
  }
}

exports.isAuthenticated = async (token) => {
  try {
    const isVerified = verifyToken(token);
    const getuser = await userRepository.getById(isVerified.id);
    if (!getuser) {
      throw { error: "User doesnot exists anymore" };
    }
    return getuser.id;
  } catch (error) {
    console.log("Not authenticated", error);
    throw error;
  }
};
