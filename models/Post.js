const mongoose = require("mongoose");


const PostSchema = new mongoose.Schema({
  fromWhere:{
    type: String,
    required: true,
  },
  toWhere:{
    type: String,
    required: true,
  },
  departureDate:{
    type: String,
    required: true,
  },
  departureTime:{
    type: String,
    required: false,
  },
  caption: {
    type: String,
    required: true,
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
  comments:[
    { type: mongoose.Schema.Types.ObjectId, 
      ref: 'Comment' 
  }]
});

module.exports = mongoose.model("Post", PostSchema);
