const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  departureLocation:{
    type: String,
    required: true,
  },
  arrivalLocation:{
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  departureDate:{
    type: Date,
    required: true,
  },
  departureTime:{
    type: Number,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdBy:{
    type: String,
    ref:"User"
  },
  createdById:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
