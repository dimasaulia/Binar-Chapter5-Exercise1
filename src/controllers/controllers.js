const Middleware = require("../middleware/rules");

exports.checkHealth = (req, res) => {
  const data = {
    nama: "Dimas Aulia",
  };
  res.render("health", data);
};

exports.view_1 = (req, res) => {
  res.render("view_1", {
    nama: "Dimas Aulia",
  });
};

exports.view_2 = (req, res) => {
  res.render("view_2", {
    data: "Website Keren Ini 🔥",
  });
};

exports.view_3 = (req, res) => {
  const data = {
    user: [
      { id: 1, name: "bob" },
      { id: 2, name: "john" },
      { id: 3, name: "jake" },
    ],
  };

  res.render("view_3", data);
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
