exports.validateAuthKey = (req, res, next) => {
  if (req.headers.key === "#4311") {
    next();
  } else {
    res.status(400).send("Unidentified Authentication Key");
  }
};
