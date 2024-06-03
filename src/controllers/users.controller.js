
const usuarios = require('../models/users.model');

//recuperar todos los autores
const getAllUsers =  async (req, res, next) => {
   try{
    const [result] = await usuarios.selectAll();
    res.json(result);
   } catch (error){
       next(error);

    };
}

//recuperar autores por id
const getUsersById = async(req, res, next) => {
    try{
        const [result] = await usuarios.selectById(req.params.id);
        if (result.leght === 0){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        res.json(result);
    } catch(error){
        next(error);
    }
}
    
//crear un nuevo autor

const createUser = async(req, res, next) => {
    try{
        const [result] = await usuarios.insert(req.body);
        //devolvemos el nuevo autor creado
        const [[usuario]] = await usuarios.selectById(result.insertId);
        res.json(usuario);
    }catch(error){
        next(error);
    }

}

//update de un autor
const updateUser = async (req, res, next) =>{
    try{
        const {id} = req.params;
        const [result] = await usuarios.updateById(id, req.body);
        if(result.changedRows === 1){
            const [[usuario]] = await usuarios.selectById(id);
            res.json(usuario);
        } else{
            res.status(404).json({error: 'Usuario no actualizado'});
        }
    } catch(error){
        next(error);
    }
}





const deleteUsuer = async (req,res, next) => {
    try{
        const {id} = req.params;

        const [result] = await usuarios.deleteById(id);
        if(result.affectedRows === 1){
            res.json({message: 'Usuario eliminado'});
        } else{
            res.status(404).json({error: 'Usuario no eliminado'});
        }
    } catch(error){
        next(error);
    }
}

const getAllPostsByUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const userPosts = await posts.selectByUser(userId);
        res.json(userPosts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los posts del usuario');
    }
}




module.exports ={
    getAllUsers, createUser, updateUser, deleteUsuer, getUsersById, getAllPostsByUser
}