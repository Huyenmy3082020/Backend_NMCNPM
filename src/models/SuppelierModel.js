const mongoose = require("mongoose");

const supperlierSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Suppelier", supperlierSchema);
