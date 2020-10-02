const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxlength: 100 },
  family_name: { type: String, required: true, maxlength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

//Virtual for author's full name
AuthorSchema.virtual("name").get(function () {
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = this.first_name + " " + this.family_name;
  }
  if (!this.first_name || !this.family_name) {
    fullname = "";
  }
  return fullname;
});

// Virtual for author's URL

AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});

//Virtual for author's birth
AuthorSchema.virtual("date_of_birth_formatted").get(function () {
  return moment(this.date_of_birth).format("MMMM Do, YYYY");
});

AuthorSchema.virtual("date_of_death_formatted").get(function () {
  return moment(this.date_of_death).format("MMMM Do, YYYY");
});

AuthorSchema.virtual("lifespan").get(function () {
  return (
    moment(this.date_of_birth).format("MMMM Do, YYYY") +
    " - " +
    moment(this.date_of_death).format("MMMM Do, YYYY")
  );
});

//Exporting model
module.exports = mongoose.model("Author", AuthorSchema);
