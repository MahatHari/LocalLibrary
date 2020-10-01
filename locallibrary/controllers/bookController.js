const Book = require("../models/book");
const Author = require("../models/author");
const Genere = require("../models/author");
const BookInstance = require("../models/bookinstance");

const async = require("async");

exports.index = function (req, res) {
  async.parallel(
    {
      book_count: function (callback) {
        Book.countDocuments({}, callback); //pass an empty object as a match to find all documents of this collection
      },
      book_instance_count: function (callback) {
        BookInstance.countDocuments({}, callback);
      },
      book_instance_available_count: function (callback) {
        BookInstance.countDocuments({ status: "Available" }, callback);
      },
      author_count: function (callback) {
        Author.countDocuments({}, callback);
      },
      genere_count: function (callback) {
        Genere.countDocuments({}, callback);
      },
    },
    function (err, results) {
      res.render("index", {
        title: "Local Library Home",
        error: err,
        data: results,
      });
    }
  );
};

//Display list of all books
exports.book_list = function (req, res) {
  Book.find({}, "title author")
    .populate("author")
    .exec(function (err, list_books) {
      if (err) {
        return next(err);
      }
      //successful, so render
      res.render("book_list", { title: "Book List", book_list: list_books });
    });
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
