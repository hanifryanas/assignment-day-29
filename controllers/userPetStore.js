const userModel = require('../models/modelPetStore.js');
const fs = require('fs');

class controllerUsers{
    static getuserbyUsername(req, res){
        const data = JSON.parse(fs.readFileSync('./users.json'));
        console.log(data);
        if(req.params.username == null || req.params.username == undefined || typeof(req.params.username) != 'string' || req.params.username.length < 6) {
            res.status(400).json({
                message: 'Invalid username'
            })
        }
        const existingId = userModel.findbyUsername(req.params.username);
        if(existingId) {
            res.status(200).json(existingId);
        }
        res.status(404).json({
            message: 'User not found'
        });
    }

    static createNewUser(req, res){
        const data = JSON.parse(fs.readFileSync('./users.json'));
        console.log(data);
        if(req.body.username == null || req.body.username == undefined || typeof(req.body.username) != 'string' || req.body.username.length < 6) {
            res.status(400).json({
                message: 'Invalid username'
            })
        }
        const existingId = userModel.findbyUsername(req.body.username);
        if(existingId) {
            res.status(400).json({
                message: 'Username already exists'
            })
        }
        data.push(req.body);
        fs.writeFileSync('./users.json', JSON.stringify(data, null, 2));
        userModel.createNewUserDB(req.body);
        res.status(201).json(req.body);
    }

    static updateUser(req, res){
        const data = JSON.parse(fs.readFileSync('./users.json'));
        console.log(data);
        if(req.params.username == null || req.params.username == undefined || typeof(req.params.username) != 'string' || req.params.username.length < 6) {
            res.status(400).json({
                message: 'Invalid username'
            })
        }
        const existingUser = userModel.findbyUsername(req.params.username);
        if(!existingUser) {
            res.status(404).json({
                message: 'User not found'
            });
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].username == req.params.username) {
                data[i] = req.body;
                fs.writeFileSync('./users.json', JSON.stringify(data, null, 2));
                userModel.updateUserDB(req.body);
                res.status(201).json(req.body);
                break;
            }
        }
    }
    static deleteUser(req, res){
        const data = JSON.parse(fs.readFileSync('./users.json'));
        console.log(data);
        if(req.params.username == null || req.params.username == undefined || typeof(req.params.username) != 'string' || req.params.username.length < 6) {
            res.status(400).json({
                message: 'Invalid username'
            })
        }
        const existingId = userModel.findbyUsername(req.params.username);
        if(!existingId) {
            res.status(404).json({
                message: 'User not found'
            });
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].username == req.params.username) {
                data.splice(i, 1);
                console.log(data.splice(i, 1));
                fs.writeFileSync('./users.json', JSON.stringify(data, null, 2));
                userModel.deleteUserDB(req.body);
                res.status(201).json(req.body);
                break;
            }
        }
    }
}

module.exports = controllerUsers;