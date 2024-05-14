import adminUsers from "../models/userModel.js";

const signUpUser = async (req, res) => {
  try {
    const { userName, email, password, signUpType } = req.body;

    // Valid username and password
    if (!userName || !password || !email)
      throw new Error(
        "Invalid Email, Username and Password, please provide an valid Email, username and password"
      );

    // Sign up type
    if (!signUpType) signUpType = "normal";

    // check if user already exists
    const userCheck = await adminUsers.find({ email });
    if (userCheck.length)
      throw new Error(
        "You are already registered with us, please Sign In to continue !"
      );

    const user = await adminUsers.create({
      userName,
      email,
      password,
      signUpType,
    });

    res.status(200).json({ message: "SUCCESS", type: "new user", data: user });
  } catch (error) {
    res
      .status(400)
      .json({ message: "FAILED", type: "new user", data: error.message });
  }
};

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // valid email and password
    if (!email || !password)
      throw new Error(
        "Please provide valid email and password to proceed further"
      );

    // check if user exists
    const doesUserExists = await adminUsers.findOne({ email });
    if (!doesUserExists)
      throw new Error(
        "You are not registered with us, please sign up to continue"
      );

    // Check if user has entered the correct password if user exists
    // Password checking logic
    const checkPassword = true;
    if (!checkPassword)
      throw new Error("Please enter correct email and password");

    // if email and pasword is valid, user exixts, password is correct then generate JWT sign In token

    let token = "1080767181715944dqw89qwdqwdqwd165dwd";

    res
      .status(200)
      .json({ message: "SUCCESS", type: "sign in user", data: { token } });
  } catch (error) {
    res
      .status(400)
      .json({ message: "FAILED", type: "sign in user", data: error.message });
  }
};

const signInUserWithGoogle = async (req, res) => {
  try {
    const { email } = req.body;

    const doesUserExists = await adminUsers.findOne({ email });

    if (!doesUserExists) throw new Error("User not found");

    res
      .status(200)
      .json({ message: "SUCCESS", data: "user found", user: doesUserExists });
  } catch (error) {
    res
      .status(400)
      .json({ message: "FAILED", data: "user not found", user: {} });
  }
};

export { signInUser, signUpUser, signInUserWithGoogle };
