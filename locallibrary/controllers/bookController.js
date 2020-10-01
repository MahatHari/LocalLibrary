const bookController = require("../models/book");

exports.index = function (req, res) {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

//Display list of all books
exports.book_list = function (req, resp) {
  res.send("NOT IMPLEMENTED, Book list");
};

//Display detail page for a specific book
exports.book_details = function (req, res) {
  res.send("NOT IMPLEMENTED, Book Detail" + req.params.id);
};

//Display book create form on GET
exports.book_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED, Book create GET");
};

//Handle book create  on POST
exports.book_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED, Book create POST");
};

//Display book delete from on GET
exports.book_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED, Book delete GET");
};

// Handle book Delete on POST
exports.book_delete_post = function (req, res) {
  res.send("NOT IMPLENTED, Book delete POST");
};

//Display book update form on GET
exports.book_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED, Book Update GET");
};

// Handle book update on POST
exports.book_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED, Book Update POST");
};
