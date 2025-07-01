const express = require('express');
const router = express.Router();
const gumController = require('../controllers/gum.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.get('/', auth, gumController.getAllGums);
router.get('/:id', auth, gumController.getGumById);
router.post('/', auth, role('admin'), gumController.createGum);
router.put('/:id', auth, role('admin'), gumController.updateGum);
router.delete('/:id', auth, role('admin'), gumController.deleteGum);

module.exports = router; 