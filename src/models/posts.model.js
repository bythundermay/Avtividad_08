const { deleteById } = require("./users.model");

const selectAll = () => {
    return db.query('SELECT * FROM posts');
}
const selectByUser = (usersId) => {
    return db.query('SELECT * FROM posts WHERE users_id = ?', [usersId]);
}    

const insert =({titulo, contenido, creacion, users_id, categoria_id}) => {
    return db.query('INSERT INTO posts (titulo, contenido, creacion, users_id, categoria_id) VALUES (?, ?, ?, ?)', [titulo, contenido, creacion, users_id, categoria_id]);
}

const updateById = (id, {titulo, contenido, creacion}) => {
    return db.query('UPDATE posts SET titulo = ?, contenido = ?, creacion = ? WHERE id = ?', [titulo, contenido, creacion, id]);
}


const deleteById = (id) => {
    return db.query('DELETE FROM posts WHERE id = ?', [id]);
}

const selectPostWithAuthor = (postId) => {
    return db.query(`
        SELECT posts.*, users.nombre, users.email 
        FROM posts 
        INNER JOIN users ON posts.users_id = users.id 
        WHERE posts.id = ?
    `, [postId]);
}

module.exports = {selectAll, selectByUser, insert, updateById,deleteById, selectPostWithAuthor}