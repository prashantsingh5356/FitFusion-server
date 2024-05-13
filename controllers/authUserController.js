import adminUsers from "../models/userModel.js";

const signUpUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const user = await adminUsers.create({ userName, email });

    res.status(200).json({ message: "SUCCESS", data: user });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const signInUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const doesUserExists = await adminUsers.findOne({ userName });

    if (!doesUserExists) throw new Error("User not found");

    res
      .status(200)
      .json({ message: "SUCCESS, user found", data: doesUserExists });
  } catch (error) {
    res.status(400).json({ message: "FAIL, user not found" });
  }
};

export { signInUser, signUpUser };
