const selectAll = () => {
    return db.query('SELECT * FROM users');
}

const selectById = (usersId) => {
    return db.query('SELECT * FROM users WHERE id = ?', [usersId]);
}

const selectByUser = (usersId) => {
    return db.query('SELECT * FROM posts WHERE users_id = ?', [usersId]);
}    

const insert = ({nombre, email, imagen}) => {
    return db.query('INSERT INTO users (nombre, email, imagen) VALUES (?, ?, ?)', [nombre, email, imagen]);
}

const updateById =(id, {nombre, email, imagen}) => {
    return db.query('UPDATE users SET nombre = ?, email = ?, imagen = ? WHERE id = ?', [nombre, email, imagen, id]);
}

const deleteById = (id) => {
    return db.query('DELETE FROM users WHERE id = ?', [id]);
}

module.exports = {selectAll, selectById, insert, updateById, deleteById,selectByUser}