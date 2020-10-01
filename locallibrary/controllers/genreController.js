const Genere = require("../models/genre");

//Display list of all Genere
exports.genere_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Genere list");
};

//Display detail page of specific Genere on
exports.genere_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Genere detail" + req.params.id);
};

//Display Genere Create from on GET
exports.genere_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genere create GET");
};

//Handle Genere Create POST
exports.genere_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genere create POST");
};

//Display Genere delete form on GET
exports.genere_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genere delete GET");
};

//Handle Genere delete on POST
exports.genere_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genere delete POST");
};

//Display Genere update form on GET

exports.genere_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genere update GET");
};

//Handle  Genere update on POST
exports.genere_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genere update POST");
};
