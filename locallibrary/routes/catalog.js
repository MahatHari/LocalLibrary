const express = require("express");
const router = express.Router();

/*                      Require Controller Modules           */

const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

/*                      BOOK ROUTES                         */

//GET catalog home page
router.get("/", book_controller.index);

// GET Request for CREATING a Book. Must come before routes that display Book (uses Id)
router.get("/book/create", book_controller.book_create_get);

//POST request for CREATING Book
router.post("/book/create", book_controller.book_create_post);

//GET request to DELETE Book
router.get("/book/:id/delete", book_controller.book_delete_get);

//POST request to DELETE Book
router.post("/book/:id/delete", book_controller.book_delete_post);

//GET request to UPDATE book
router.get("/book/:id/update", book_controller.book_update_get);

//POST request to UPdate book
router.post("/book/:id/update", book_controller.book_update_post);

//Get request for one Book
router.get("/book/:id", book_controller.book_details);

//Get Request for all Book items
router.get("/books", book_controller.book_list);

/*                  Author Routes                */

//Get request for creating author
router.get("/author/create", author_controller.author_create_get);

//POST request for creating author
router.post("/authot/create", author_controller.author_create_post);

//Get request to deleting Author
router.get("/author/:id/delete/", author_controller.author_delete_get);

//POST request to delete Author
router.post("/author/:id/delete/", author_controller.author_delete_post);

//Get request to update Author
router.get("/Author/:id/update", author_controller.author_update_get);

//POST requet to update Author
router.post("/author/:id/update", author_controller.author_update_post);

//Get Request for one Author
router.get("/author/:id", author_controller.author_detail);

//Get request for author list
router.get("/authors", author_controller.author_list);

/*                  Genere Routes                             */
//Get request for creating a genere
router.get("/genere/create", genre_controller.genere_create_get);

//POST for creating Genere
router.post("/genere/create", genre_controller.genere_create_post);

//Get Request to delete Genere
router.get("/genere/:id/delete", genre_controller.genere_delete_get);

//POST request to delere Genere
router.post("/genere/:id/delete", genre_controller.genere_delete_post);

//Get request to update Genre
router.get("/gerenre/:id/update", genre_controller.genere_update_get);

//POST request to update Genere
router.post("/genere/:id/update", genre_controller.genere_update_post);

//GET request to list on genre
router.get("/genre/:id", genre_controller.genere_list);

//GET request to list all genere
router.get("/generes", genre_controller.genere_detail);

/*                      BOOKINStance Routes                  */

//GET request for creating a book instance
router.get(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_get
);

//POST request for creating a book instance
router.post(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_post
);

//GET request to delete bookInstance
router.get(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_get
);

//POST request to delete bookInstance
router.post(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_post
);

//GET request to update bookInstance
router.get(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_get
);

//POST request to update bookInstancce
router.post(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_post
);

//Get request for one BookInstance
router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

//Get request for list of all bookInstance
router.get("/bookinstances");

module.exports = router;
