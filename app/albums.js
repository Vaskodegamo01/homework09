const express = require("express");
const multer = require("multer");
const path = require("path");
const nanoid = require("nanoid");

const config = require("../config");
const Albums = require("../models/Album");
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
    if(req.query.artist){
        Albums.findOne({artist : req.query.artist})
            .then( results => res.send(results))
            .catch(e => res.send(e).status(500))
    }else{
        Albums.find()
            .then( results => res.send(results))
            .catch(e => res.send(e).status(500))
    }
});

router.get("/:id", (req, res) => {
    console.log(req.params);
    Albums.findOne({_id : req.params.id}).populate('Artist')
        .then( results => res.send(results))
        .catch(e => res.send(e).status(500))
});

router.post("/", upload.single("image"), async (req, res) => {
    const albumData = req.body;
    if (req.file) albumData.image = req.file.filename;
    const artist = await  Artists.findOne({name : albumData.artist});
    albumData.artist = artist;
    try {
        const albums = new Albums(albumData);
        albums.save().then(() => res.send(albumData))
    }catch (e) {
        res.send(e).status(500)
    }
});

module.exports = router;