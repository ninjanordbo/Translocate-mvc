const Post = require("../models/Post");
const User = require("../models/User");



module.exports = {
  getUserProfile: async (req, res, next) => {
    try {
      console.log(req.params.id);
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get('user');
      const user = await User.findById(req.user);
      console.log(req.user._id)
      res.render("userprofile.ejs", { user: req.params._id});
    } catch (err) {
      console.log(err);
    }
  },
   
};

