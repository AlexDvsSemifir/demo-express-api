// Import d'express
const express = require('express')

// Import des routes
const userRoute = require('./routes/users.route')

// Création de l'app
const app = express()

app.use(express.json()); // Middleware pour parser le JSON

// Utilisation des routes
app.use(userRoute);

// Ecoute le port donné :
app.listen(3000)

// CRUD
// Ceate : app.post()                           HTTP POST
// Read : app.get()                             HTTP GET
// Ipdate : app.put() ou app.patch()            HTTP PUT ou PATCH
// delete : app.delete()                        HTTP DELETE

// req : objet requête
// res : objet réponse
// Les deux auront leurs paramètres d'objet

//=========================================================//
// Exemples avec les utilisateurs en tant que ressource :  //
//=========================================================//

// Récupère les utilisateurs 'users'
// app.get('/users', (req, res) => {
//     console.log(`${req.method} sur ${req.path}`);
//     // Envoi de la réponse au format JSON
//     if (users.length == 0) {
//         res.status(404)
//         res.json([])
//     }
//     res.json(users)
// });
// =====> Envoyé dans users.route.js pour meilleurs lecture et rangement

// // Récupère un user avec son ID donné en param de route
// app.get('/users/:id', (req, res) => {

// });

// // Créé un utilisateur
// app.post('/users', (req, res) => {

// });

// // Met à jour un utilisateur à partir de son id
// app.put('/users/:id', (req, res) => {
//     res.end('PUT OK');

// });

// // Supprime un utilisateur
// app.delete('/users', (req, res) => {

// });

// app.patch('/users', (req, res) => {

// });

// // Ecoute sur le port donné en paramètres (ici 3000)
