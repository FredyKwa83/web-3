const fs = require("fs");
const path = require("path");

const gamePath = path.join(__dirname, "../data/games.json");
const  games = JSON.parse(fs.readFileSync(gamePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {

    index: function (req, res) {
        games = JSON.parse(fs.readFileSync(gamePath, 'utf-8'));

        res.render("index", {games});
    },

    detail: function (req, res) {
        
        const id = req.params.id;

        const game = games.find(game => game.id == id)  /* encontrar un producto de la pagina lsa palabra find es la que lo hece funcionar*/
        if(game) {
        res.render("games/detail", {game});
    } else {
        res.send(`
        <div style= "text-align:center; padding-top:30px"> 
        <h1 style= "font-size: 80px" > El producto no existe </h1>
        <img style="width:30%" src="https://www.psicologo-palma-de-mallorca.es/coste-psicologico-nunca-decir-no.jpg" 
        </div>
        `)
    }
    },

    getCreateForm: function (req, res) {
        res.render("games/create")
    },
    
    postCreateForm: function (req, res) {
        
        let datosFormulario = req.body;
        let idNuevoJuego = (games[games.length-1].id)+1;
        
            let nombreImagen = req.file.filename

            let newGame = {
                id: idNuevoJuego,
                nombre:datosFormulario.name,
                image:nombreImagen,
                precio: parseInt(datosFormulario.price),
                descuento:parseInt(datosFormulario.discount),
            };

            // AGREGAR NUEVO PRODUCTO

            games.push(newGame);

             // GUARDAR EN ARRAY UN ARCHIVO DE DATOS

            const gamesJSON = JSON.stringify(games);
            fs.writeFileSync(gamePath, gamesJSON, "utf-8");
            res.redirect("/")
        },

        editar: function (req, res) {

        const id = req.params.id;

        const game = games.find(game => game.id == id)  /* encontrar un producto de la pagina la palabra find es la que lo hece funcionar*/
        if(game) {
        res.render("games/editarFormulario", {game});
    } else {
        res.send(`
        <div style= "text-align:center; padding-top:30px"> 
        <h1 style= "font-size: 80px" > El producto no existe </h1>
        <img style="width:30%" src="https://www.psicologo-palma-de-mallorca.es/coste-psicologico-nunca-decir-no.jpg" 
        </div>
        `)
    }
    }
    };


 
     



module.exports = mainController;