const express = require("express");
const multer = require("multer");
const path = require("path");
const nanoid = require("nanoid");

const config = require("../config");
const Artists = require("../models/Artist");

const storage = multer.diskStorage({
    destination(req, file, cd){
        cd(null, config.uploadPath)
    },
    filename(req, file, cd){
        cd(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});


const router = express.Router();

router.get("/", (req, res) => {
    Product.find()
        .then( results => res.send(results))
        .catch(e => res.send(e).status(500))
});

router.post("/", upload.single("image"), (req, res) => {
    const artistData = req.body;
    if (req.file) artistData.image = req.file.filename;

    try {
        const artist = new Artists(artistData);
        product.save().then(() => res.send(artistData))
    }catch (e) {
        res.send(e).status(500)
    }
});

module.exports = router;