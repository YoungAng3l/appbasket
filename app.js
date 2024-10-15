const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main', // Layout por defecto
    layoutsDir: path.join(__dirname, 'views/layouts'), // Directorio de layouts
    partialsDir: path.join(__dirname, 'views/partials') // Directorio de partials
  }));
  app.set('view engine', 'handlebars');
  app.set('views', path.join(__dirname, 'views'));

  app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.render('home', { titulo: 'Página Principal', mensaje: '¡Bienvenido a mi página web con Handlebars!' });
});
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});