import User from "../model/userModel.js";

// this function responsible for CREATING new users
const createUser = async (request, response) => {
  try {
    const userData = new User(request.body);

    console.log("userData", userData);

    if (!userData) {
      return response.status(404).json({ msg: "User data not found" });
    }
    const savaData = await userData.save();
    response.status(200).json(savaData);
  } catch (error) {
    response.status(500).json({ error: error });
  }
};

// this function responsible for GETING all users
const getAllUsers = async (request, response) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return response.status(404).json({ msg: "user data not found" });
    }
    response.status(200).json(userData);
  } catch {
    request.status(500).json({ error: "error" });
  }
};

// this function is responsible for GET users by ID
const getUserById = async (request, response) => {
  try {
    const id = request.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return response.status(404).json({ body: "id not found" });
    }
    response.status(200).json(userExist);
  } catch {
    response.status(500).json({ msg: "server error" });
  }
};

// this function is responsible for Edit data using PUT request by ID
const updateUserById = async (request, response) => {
  try {
    const id = request.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return response.status(404).json({ body: "id not found" });
    }
    const updateUsser = await User.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    response.status(200).json(updateUsser);
  } catch {
    response.status(500).json({ msg: "server error" });
  }
};

// this function is responsible for Delete data using DELETE request by ID
const deleteUserById = async (request, response) => {
  try {
    const id = request.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return response.status(404).json({ body: "id not found" });
    }
    const deleteUser = await User.findByIdAndDelete(id, request.body, {
      new: true,
    });
    response.status(200).json({ msg: "Item delete successfully" });
  } catch {
    response.status(500).json({ msg: "server error" });
  }
};
export { createUser, getAllUsers, getUserById, updateUserById, deleteUserById };
