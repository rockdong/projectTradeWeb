const Users = require('../db_model/users')
const config = require('../services/config')

//新增用户 user 是 json 字符串
const createUser = (user) => {
    return Users.create(user).then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })
}

// 修改用户
const updateUser = (user) => {
    return Users.update(user).then(
        result => {
            console.log(result)
        }
    ).catch(error => {
        console.log(error)
    })
}

// 查询用户
const queryUser = (userId) => {
    return Users.findById(userId).then( user => {
        console.log(user)
    }).catch( error => {
        console.log(error)
    })
}

// 查询所有用户
const queryAllUser = (page) => {
    return Users.findAll({
        offset: config.db.offset * (page - 1),
        limit: config.db.limit
    }).then( users => {
        console.log(users)
    }).catch( error => {
        console.log(error)
    })
}

//删除用户
const deleteUser = (userId) => {
    return Users.destroy({where: {
        id: userId
    }}).then( result => {
        console.log(result)
    }).catch( error => {
        console.log(error)
    })
}

module.exports = createUser, queryAllUser, queryUser, updateUser, deleteUser