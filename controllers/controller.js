const express = require("express");
var router = express.Router();
const path = require("path");

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../views/index.html'))
})

router.get('/about', (req,res)=>{
    res.sendFile(path.join(__dirname, '../views/about.html'))
})

router.get('/portfolio', (req,res)=>{
    res.sendFile(path.join(__dirname, '../views/portfolio.html'))
})

module.exports = router;