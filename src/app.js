const express = require("express");
const app = express();
const path = require("path");

const methodOverride =  require('method-override');

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

const mainRoutes= require("./routes/main.routes")
const gameRoutes= require("./routes/games.routes")

app.use(mainRoutes);
app.use("/games", gameRoutes);



// app.get("/ingresar", (req, res) => {
//     res.sendFile(path.join(__dirname, "./view/ingresar.html"))
// });

app.listen(3001, () => {
    console.log("servidor corriendo")
});

module.exports = app;
