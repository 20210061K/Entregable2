const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.html",{title : "Inicio"});
});

router.get("/juegos", (req,res) => {
    res.render("juegos.html",{title : "Mis juegos"});
})




module.exports = router;