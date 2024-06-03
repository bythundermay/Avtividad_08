const router =require('express').Router();

const{getAllUsers, createUser, updateUser, deleteUsuer,getAllPostsByUser} =require('../../controllers/users.controller');

router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:user_id', updateUser);
router.delete('/:user_id', deleteUsuer);
router.get('/users/:user_id', getAllPostsByUser);


module.exports =router;