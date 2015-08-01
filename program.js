
// #2 Triage
var fs = require("fs");

var peach = function (obj) {
  console.trace(obj);
  console.dir(obj);
};

var bowser = function (callback) {
  fs.readFile(process.argv[2], {encoding : "utf8"}, callback);
};

var koopa = function (error, file) {
  if (error) {
    console.error(error.message);
  } else {
    peach(JSON.parse(file));
  }

};

bowser(koopa);

// #1 Intake
// console.log("i am okay");
// console.error("i am so incredibly not okay");
