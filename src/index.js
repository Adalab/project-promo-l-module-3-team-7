const express = require('express');
const cors = require('cors');
const path = require('path');
const Database = require('sqlite3');
const app = express();
app.use(express.json({ limit: '50mb' })); //No mover esta linea!! Error 413!! Alert! Alert!
app.use(cors());
app.use(express.json());

const serverPort = process.env.PORT || 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = './public'; 
app.use(express.static(staticServerPath));

// app.get('/card/:id:/', (req, res) => {
//     console.log('Me estan llamando');
// //   res.json(response);
// });



// app.use(express.json({ limit: '50mb' }));

app.post('/card', (req, res) => {
  
  console.log(req.body);
  const response = {};
  if (!req.body.name) {
    response.success = false;
    response.error = 'Campo obligatorio: nombre';
  } else if (!req.body.job) {
    response.success = false;
    response.error = 'Campo obligatorio: profesión';
  } else if (!req.body.email) {
    response.success = false;
    response.error = 'Campo obligatorio: email';
  }else if (!req.body.phone) {
    response.success = false;
    response.error = 'Campo obligatorio: teléfono';
  } else if (!req.body.linkedin) {
    response.success = false;
    response.error = 'Campo obligatorio: linkedin';
  } else if (!req.body.github) {
    response.success = false;
    response.error = 'Campo obligatorio: github';
  } else if (!req.body.palette || req.body.palette !== '1' || req.body.palette !== '2' || req.body.palette !== '3') {
    response.success = false;
    response.error = 'Campo obligatorio: palette';
  } else if (!req.body.photo) {
    response.success = false;
    response.error = 'Campo obligatorio: photo';
  } else {
    response.success = true;
    response.cardURL = 'https://'
  }
  res.json(response);
  });
  
  // error
  app.get('*', (req, res) => {
    const pathRelativeRoute = '../public/404-page-not-found.html';
    const pathAbsoluteRoute = path.join(__dirname, pathRelativeRoute);
    res.status(404).sendFile(pathAbsoluteRoute);
  });
