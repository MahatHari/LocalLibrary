const BookInstance = require("../models/bookinstance");

//Display list of all BookInstances

exports.bookinstance_list = function (req, res) {
  BookInstance.find()
    .populate("book")
    .exec(function (err, list_bookinstances) {
      if (err) {
        return next(err);
      }
      //succesful so render
      res.render("bookinstance_list", {
        title: "Book Instance List",
        bookinstance_list: list_bookinstances,
      });
    });
};

//Display detail page for a specific BookInstance
exports.bookinstance_detail = function (req, res) {
  res.send("NOT IMPLEMENTED : BookInstance detail:" + req.params.id);
};

//Display BookInstance create form on GET
exports.bookinstance_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED : BookInstance create GET:");
};

//Handle BookInstance on create POST
exports.bookinstance_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED : BookInstance POST:");
};

//Display BookInstance delete form on GET
exports.bookinstance_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED : BookInstance delete GET:");
};

//Handle BookInstance delete on POST
exports.bookinstance_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED : BookInstance delete POST:");
};

//Display BookInstance Updage form on GET
exports.bookinstance_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED : BookInstance update GET:");
};
//Display BookInstance Updage  on POST
exports.bookinstance_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED : BookInstance update POST:");
};
