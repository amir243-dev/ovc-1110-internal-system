const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  donorName: { type: String, required: true },
  // 'type' is a reserved word in some contexts, but fine as a key.
  // Using enum to restrict it to Cash or Kind (goods).
  type: { type: String, required: true, enum: ["Cash", "Items"] },
  description: { type: String },
  amount: { type: Number, required: true },
  contact: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Donation", donationSchema);
