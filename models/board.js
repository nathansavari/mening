const mongoose = require("mongoose");

const boardSchema = mongoose.Schema({
  boardName: String,
  boardDesc: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const boardModel = mongoose.model("boards", boardSchema);

module.exports = boardModel;
