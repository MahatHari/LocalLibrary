const Genre = require("../models/genre");
const Book = require("../models/book");
const async = require("async");
const mongoose = require("mongoose");
const validator = require("express-validator");

//Display list of all Genere
exports.genre_list = function (req, res, next) {
  Genre.find()
    .populate("genre")
    .sort([["name", "ascending"]])
    .exec(function (err, list_genres) {
      if (err) {
        return next(err);
      }
      // success
      res.render("genre_list", {
        title: "Genre List",
        genre_list: list_genres,
      });
    });
  //res.send("Not Implimented");
};

//Display detail page of specific Genere on
exports.genre_detail = function (req, res, next) {
  const id = req.params.id.slice(1);
  async.parallel(
    {
      genre: function (callback) {
        Genre.findById(id).exec(callback);
      },
      genre_books: function (callback) {
        Book.find({ genre: id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.genre == null) {
        const err = new Error("Genre not Found");
        err.status = 404;
        return next(err);
      }
      //Success
      res.render("genre_detail", {
        title: "Genre Detail",
        genre: results.genre,
        genre_books: results.genre_books,
      });
    }
  );
  //res.send("NOT IMPLEMENTED: Genere detail" + req.params.id);
};

//Display Genere Create from on GET
exports.genre_create_get = function (req, res) {
  res.render("genre_form", { title: "Create Genre" });
  //res.send("NOT IMPLEMENTED: Genre create GET");
};

//Handle Genere Create POST
exports.genre_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre create POST");
};

//Display Genere delete form on GET
exports.genre_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

//Handle Genere delete on POST
exports.genre_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

//Display Genere update form on GET

exports.genre_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

//Handle  Genere update on POST
exports.genre_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
