const router =require('express').Router();

const {getAllPosts, createPost, updatePost, deletePost, getPostWithAuthor} = require ('../../controllers/posts.controller');

router.get('/', getAllPosts);
router.get('/:post_id', getPostWithAuthor); // nueva ruta

router.post('/', createPost);
router.put('/:post_id', updatePost);
router.delete('/:post_id', deletePost);

module.exports =router;