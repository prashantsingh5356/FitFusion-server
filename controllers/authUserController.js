const signUpUser = (req, res) => {
  const requestBody = req.body;

  res.status(200).json({ message: "SUCCESS", data: requestBody });
};

const signInUser = (req, res) => {
  const requestBody = req.body;

  res.status(200).json({ message: "SUCCESS", data: requestBody });
};

export { signInUser, signUpUser };
