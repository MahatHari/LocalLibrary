const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenereSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100 },
});

//Virtual for genere

GenereSchema.virtual("url").get(function () {
  return "/catalog/genere/" + this._id;
});

//Export model

module.exports = mongoose.model("Genere", GenereSchema);
