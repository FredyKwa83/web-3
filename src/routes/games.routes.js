
const express= require("express");
const router = express.Router();
const gamesController = require("../controllers/games.controllers")
const multer = require("multer");
const path = require("path")


const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img/imagen_llegada'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + file.originalname;   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });



router.get("/detail/:id", gamesController.detail)

router.get("/create", gamesController.getCreateForm)

router.post('/create', uploadFile.single('image'), gamesController.postCreateForm); 

router.get('/edit/:id', gamesController.editar); 
// router.put('/edit/:id', gamesController.update); 


module.exports = router;


