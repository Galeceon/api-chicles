const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

const { sequelize } = require('./models');

const authRoutes = require('./routes/auth.routes');
const gumRoutes = require('./routes/gum.routes');
const flavorRoutes = require('./routes/flavor.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/gums', gumRoutes);
app.use('/api/flavors', flavorRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
}); 