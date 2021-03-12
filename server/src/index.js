const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// app.get('/card/:id:/', (req, res) => {
//     console.log('Me estan llamando');
// //   res.json(response);
// });

app.post('/card', (req, res) => {
    console.log(req);
    console.log(res);
    // Cojo los datos que recibo desde el navegador que están en req.body.email y req.body.password
    // Con estos datos busco en el array de usuarios si el usuario existe
    // const userFound = usersData.find(user => {
    //   return user.email === req.body.email && user.password === req.body.password;
    // });
  
    // if (userFound !== undefined) {
    //   // Si el usuario existe devuelvo el id del usuario
    //   res.json({
    //     error: false,
    //     userId: userFound.id
    //   });
    // } else {
    //   // Si el usuario no existe devuelvo un error
    //   res.status(404).json({
    //     error: 'user-not-found',
    //     message: 'User not found'
    //   });
    // }
  });
  