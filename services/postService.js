const Post = require('../models/post');

exports.createPost = async (title, desc, username, categories) => {
    const newPost = await Post.create({
        title:title,
        desc:desc,
        username:username,
        categories:categories
    });
    console.log({newPost});
    return {newPost}
}

exports.getPost = async (id) => {
    const post = await Post.findById(id);
    console.log({post});
    return {post}
}

exports.getPostByTitle = async (title) => {
    const post = await Post.find({title});
    console.log({post});
    return {post}
}

//getAllPost
exports.getAllPost = async () => {
        const post = await Post.find();
    console.log({post});
    return {post}
}

//updatePost
exports.updatePost = async (id, body) => {
    console.log("update post inner function :", body)
        const updatePost = await Post.findByIdAndUpdate(
            id,
            {
                $set: body,
              },
              { new: true }
        );
   
    console.log({updatePost});
    return {updatePost}
}

//deletePost
exports.deletePost = async (id) => {
    await Post.findByIdAndDelete(id);
    console.log("delete the post");
    return 
}