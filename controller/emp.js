const Emp = require("../models/emp");
const mongoose = require("mongoose");
function create(req, res, next) {
  let empName = req.body.empName;
  let empEmail = req.body.empEmail;
  let empMobile = req.body.empMobile;
  let emp = new Emp({
    empName,
    empEmail,
    empMobile,
  });
  emp.save().then((data) => {
    res.send(data);
  });
}
function view(req, res, next) {
  Emp.find({}).then((data) => {
    res.send(data);
  });
}
module.exports.create = create;
module.exports.view = view;
