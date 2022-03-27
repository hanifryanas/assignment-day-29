const router = require('express').Router();
const controllerUsers = require('../controllers/userPetStore');
const fs = require('fs');
const port = 3010;

router.get('/:username', controllerUsers.getuserbyUsername);
router.post('/', controllerUsers.createNewUser);
router.put('/:username', controllerUsers.updateUser);
router.delete('/:username', controllerUsers.deleteUser);

module.exports = router;