const postService = require("../../../services/postService");

//createPost
exports.createPost = async (req, res, next) => {
    console.log("create post");
    const { title, desc, username, categories } = req.body;
    console.log("req body is ", req.body);
    try {
        const newPost = await postService.createPost(
            title,
            desc,
            username,
            categories
        );
        return res.status(201).json({
            message: "post created successfully",
            newPost,
        });
    } catch (error) {

    }
}

//getAllPost
exports.getAllPost = async (req, res, next) => {
    //const username = req.params.username;
    try {
        const getAllPost = await postService.getAllPost();
        return res.status(201).json({
            message: "post viewed successfully",
            getAllPost,
        });
    } catch (error) {

    }
}

//getPost
exports.getPost = async (req, res, next) => {
    const id = req.params.id;
    try {
        const getPost = await postService.getPost(id);
        return res.status(201).json({
            message: "post viewed successfully",
            getPost,
        });
    } catch (error) {

    }
}

//getPostByTitle
exports.getPostByTitle = async (req, res, next) => {
    const title = req.params.title;
    try {
        const getPost = await postService.getPostByTitle(title);
        return res.status(201).json({
            message: "post viewed successfully",
            getPost,
        });
    } catch (error) {

    }
}

//updatePost
exports.updatePost = async (req, res, next) => {
    const { title, desc, categories } = req.body;
    const id = req.params.id;

    try {
        const post = await postService.getPost(id);
        console.log("update function", req.params.username)
        if (post.post.username === req.params.username) {
            const updatePost = await postService.updatePost(
                id,
                req.body
            );
            return res.status(201).json({
                message: "post updated successfully",
                updatePost,
            });
        }else{
            return res.status(201).json({
                message: "You can't update others post"
            });
        }

    } catch (error) {

    }
}

//deletePost
exports.deletePost = async (req, res, next) => {
    const id = req.params.id;

    try {
        const post = await postService.getPost(id);
        if((post.post.username === req.params.username)){
            await postService.deletePost(id);
            return res.status(201).json({
                message: "post deleted successfully",
                post,
            });
        }else{
            return res.status(201).json({
                message: "You can't delete others post"
            });
        }
    } catch (error) {

    }
}