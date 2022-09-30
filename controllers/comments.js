const Comment = require("../models/Comment");
const User = require("../models/User");

module.exports = {
  createComment: async (req, res) => {
    try {
      const commentUser = await User.findById(req.user.id)
      await Comment.create({
        comment: req.body.comment,
        likes: req.body.likes,
        post:req.params.id,
        createdBy: commentUser.userName,
        createdById: req.user.id
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
 
};

