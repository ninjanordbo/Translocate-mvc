const cloudinary = require("../middleware/cloudinary");
const UserProfile = require("../models/UserProfile")

module.exports = {

  
  createUserProfile: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await User.create({
        userName: req.userProfile.userName,
        bio: req.userProfile.bio,
        image: result.secure_url,
        cloudinaryId: result.public_id,
      });
      console.log("User profile made!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  
  deleteUserProfile: async (req, res) => {
    try {
      // Find post by id
      let createUser = await User.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await User.remove({ _id: req.params.id });
      console.log("Profil slettet");
      res.redirect("/");
    } catch (err) {
      res.redirect("/");
    }
  },
};
