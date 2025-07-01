const Gum = require('../models/gum.model');
const Flavor = require('../models/flavor.model');

exports.createGum = async (req, res) => {
  try {
    const gum = await Gum.create(req.body);
    res.status(201).json(gum);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear chicle', error: err.message });
  }
};

exports.getAllGums = async (req, res) => {
  const gums = await Gum.findAll({ include: 'flavors' });
  res.json(gums);
};

exports.getGumById = async (req, res) => {
  const gum = await Gum.findByPk(req.params.id, { include: 'flavors' });
  if (!gum) return res.status(404).json({ message: 'Chicle no encontrado' });
  res.json(gum);
};

exports.updateGum = async (req, res) => {
  const gum = await Gum.findByPk(req.params.id);
  if (!gum) return res.status(404).json({ message: 'Chicle no encontrado' });
  await gum.update(req.body);
  res.json(gum);
};

exports.deleteGum = async (req, res) => {
  const gum = await Gum.findByPk(req.params.id);
  if (!gum) return res.status(404).json({ message: 'Chicle no encontrado' });
  await gum.destroy();
  res.json({ message: 'Chicle eliminado' });
}; 