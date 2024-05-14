import express from "express";

import {
  signInUser,
  signUpUser,
  signInUserWithGoogle,
} from "../controllers/authUserController.js";

const userRouter = new express.Router();

userRouter.route("/auth/signup").post(signUpUser);
userRouter.route("/auth/signin").post(signInUser);
userRouter.route("/googleauth/signin").post(signInUserWithGoogle);

export default userRouter;
