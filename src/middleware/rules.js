const Auth = function (data) {
  this.data = data;
  this.errors = [];
};

Auth.prototype.validateKey = function () {
  if (this.data !== "#4311") {
    this.errors.push("Unidentified Authentication Key");
  }
};

module.exports = Auth;
