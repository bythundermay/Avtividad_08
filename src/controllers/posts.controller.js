const posts = require('../models/posts.model');


const getAllPosts = async(req, res, next) => {
    try{
        const [result] = await posts.selectAll();
        res.json(result);
    } catch (error){
        next(error);
    }
}

const getPostWithAuthor = async (req, res, next) => {
    try {
        const {id} = req.params;
        const [[post]] = await posts.selectPostWithAuthor(id);
        res.json(post);
    } catch (error) {
        next(error);
    }
}

const createPost = async (req, res, next) => {
    try{
        const [result] = await posts.insert(req.body);
        const [[post]] = await posts.selectById(result.insertId);
        res.json(post);
    } catch (error){
        next(error);
    }
}

const updatePost = async (req, res, next) =>{
    try{
        const {id} = req.params;
        const [result] = await posts.updateById(id, req.body);
        if(result.changedRows === 1){
            const [[post]] = await posts.selectById(id);
            res.json(post);
        } else{
            res.status(404).json({error: 'Post no actualizado'});
        }
    } catch(error){
        next(error);
    }
}

const deletePost = async (req,res, next) => {
    try{
        const {id} = req.params;
        const [result] = await posts.deleteById(id);
        if(result.affectedRows === 1){
            res.json({message: 'Post eliminado'});
        } else{
            res.status(404).json({error: 'Post no eliminado'});
        }
    } catch(error){
        next(error);
    }
}

module.exports ={ getAllPosts, createPost, updatePost, deletePost, getPostWithAuthor }