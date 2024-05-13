import express from "express";

import { signInUser, signUpUser } from "../controllers/authUserController.js";

const userRouter = new express.Router();

userRouter.route("/auth/signup").post(signUpUser);
userRouter.route("/auth/signin").post(signInUser);

export default userRouter;
