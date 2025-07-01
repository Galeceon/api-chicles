const Flavor = require('../models/flavor.model');
const Gum = require('../models/gum.model');

exports.createFlavor = async (req, res) => {
  try {
    const { gumId, name } = req.body;
    const gum = await Gum.findByPk(gumId);
    if (!gum) return res.status(404).json({ message: 'Chicle no encontrado' });
    const flavor = await Flavor.create({ name, GumId: gumId });
    res.status(201).json(flavor);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear sabor', error: err.message });
  }
};

exports.getAllFlavors = async (req, res) => {
  const flavors = await Flavor.findAll({ include: Gum });
  res.json(flavors);
};

exports.getFlavorById = async (req, res) => {
  const flavor = await Flavor.findByPk(req.params.id, { include: Gum });
  if (!flavor) return res.status(404).json({ message: 'Sabor no encontrado' });
  res.json(flavor);
};

exports.updateFlavor = async (req, res) => {
  const flavor = await Flavor.findByPk(req.params.id);
  if (!flavor) return res.status(404).json({ message: 'Sabor no encontrado' });
  await flavor.update(req.body);
  res.json(flavor);
};

exports.deleteFlavor = async (req, res) => {
  const flavor = await Flavor.findByPk(req.params.id);
  if (!flavor) return res.status(404).json({ message: 'Sabor no encontrado' });
  await flavor.destroy();
  res.json({ message: 'Sabor eliminado' });
}; 