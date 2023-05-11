const express = require("express");
const router = express.Router();
const { createPost, getAllPost, getPost, getPostByTitle, deletePost, updatePost } = require("./routes/postRoutes");

router.route("/createPost").post(createPost);
router.route("/getAllPost").get(getAllPost);
router.route("/getPostById/:id").get(getPost);
router.route("/getPostByTitle/:title").get(getPostByTitle);
router.route("/updatePost/:username/:id").put(updatePost);
router.route("/deletePost/:username/:id").delete(deletePost);

module.exports = router;
