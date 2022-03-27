const fs = require('fs')
const db = require('../config/db')
class userModel{
    static findbyUsername(username) {
        const allData = JSON.parse(fs.readFileSync('./users.json'))
        return allData.find(val => val.username == username)
    }
    static createNewUserDB(data){
        const query = `INSERT into users (id, username, firstName, lastName, email, password, phone, userStatus) VALUES(?,?,?,?,?,?,?,?)`
        db.run(query, [data.id, data.username, data.firstName, data.lastName, data.email, data.password, data.phone, data.userStatus ], function(err) {
            if (err) {
                console.log(err)
            }
        })
    }
    static updateUserDB(data){
        const query = `UPDATE users SET username = ?, firstName = ?, lastName = ?, email = ?, password = ?, phone = ?, userStatus = ? WHERE id = ?`
        db.run(query,[data.id, data.username, data.firstName, data.lastName, data.email, data.password, data.phone, data.userStatus ], function(err) {
            if (err) {
                console.log(err)
            }
        })
    }
    static deleteUserDB(data){
        const query = `DELETE from users WHERE username = ?`
        db.run(query,[data.username], function(err) {
            if (err) {
                console.log(err)
            }
        })
    }
}

module.exports=userModel;