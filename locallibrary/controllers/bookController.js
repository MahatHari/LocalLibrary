const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");
const mongoose = require("mongoose");

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
      genre_count: function (callback) {
        Genre.countDocuments({}, callback);
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
exports.book_list = function (req, res, next) {
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
exports.book_details = function (req, res, next) {
  const id = req.params.id;
  async.parallel(
    {
      book: function (callback) {
        Book.findById(id).populate("author").populate("genre").exec(callback);
      },
      book_instance: function (callback) {
        BookInstance.find({ book: id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.book == null) {
        const err = new Error("Book not Found");
        err.status = 404;
        return next(err);
      }
      //sucess so render
      res.render("book_details", {
        title: results.book.title,
        book: results.book,
        book_instance: results.book_instance,
      });
    }
  );

  //res.send("NOT IMPLEMENTED, Book Detail" + req.params.id);
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
