const express = require('express');
const router = express.Router();
const flavorController = require('../controllers/flavor.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.get('/', auth, flavorController.getAllFlavors);
router.get('/:id', auth, flavorController.getFlavorById);
router.post('/', auth, role('admin'), flavorController.createFlavor);
router.put('/:id', auth, role('admin'), flavorController.updateFlavor);
router.delete('/:id', auth, role('admin'), flavorController.deleteFlavor);

module.exports = router; 