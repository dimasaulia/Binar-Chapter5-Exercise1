const Middleware = require("../middleware/rules");
exports.checkHealth = (req, res) => {
  res.render("health");
};

exports.biodata = (req, res) => {
  res.render("biodata");
};

exports.query = (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body));

  const middleware = new Middleware(req.headers.key);
  middleware.validateKey();
  console.log(middleware.errors, new Date());

  if (middleware.errors.length) {
    res
      .status(400)
      .send(`Everytihing is not okay! ${middleware.errors.toString()}`);
  } else {
    res.status(200).send(`Everytihing is okay! ${req.headers.key}`);
  }
};
