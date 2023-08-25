const fs = require("fs");
const path = require("path");
const gamePath = path.join(__dirname, "../data/games.json");
let games = JSON.parse(fs.readFileSync(gamePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index: function (req, res) {
        games = JSON.parse(fs.readFileSync(gamePath, 'utf-8'));

        res.render("index", {games});
    },

    about: function (req, res) {
        res.render("about");
    },
}


module.exports = mainController;