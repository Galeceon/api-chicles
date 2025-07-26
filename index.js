const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Cargar variables de entorno
dotenv.config();

const { sequelize } = require('./models');

const authRoutes = require('./routes/auth.routes');
const gumRoutes = require('./routes/gum.routes');
const flavorRoutes = require('./routes/flavor.routes');

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/gums', gumRoutes);
app.use('/api/flavors', flavorRoutes);

// Serve static files from the Angular build
app.use(express.static(path.join(__dirname, 'frontend-chicles/dist/frontend-chicles')));

// Catch all handler: send back Angular's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend-chicles/dist/frontend-chicles/index.html'));
});

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
}); 