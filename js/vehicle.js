var Car = function (make, model, year) {

  this.make = make;
  this.model = model;
  this.year = year;

  this.ymm = function () {
    return this.year + ' ' + this.make + ' ' + this.model;
  };

  this.mmy = function () {
    return this.make + ' ' + this.model + ' ' + this.year;
  };

};


module.exports = Car;
