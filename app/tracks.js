const express = require("express");
const multer = require("multer");
const Track =require("../models/Track");
const Albums = require("../models/Album");

const upload = multer();

const createRouter = () => {
    const router = express.Router();

    router.get("/", (req,res)=>{
            if(req.query.album){
                Track.findOne({album : req.query.album})
                    .then( results => res.send(results))
                    .catch(e => res.send(e).status(500));
                return;
            }
            if(req.query.artist){
                Albums.find({artist : req.query.artist})
                    .then(  (results) => {
                        let tracksById = [];
                        results.forEach(async (album)=>{

                            tracksById.push(await Track.findOne({album : album._id}));
                            if(tracksById.length === results.length){
                                res.send(tracksById);
                            }
                        });
                    })
                    .catch(e => res.send(e).status(500));
                return;
            }
            Track.find()
                .then(result => res.send(result))
                .catch(()=>res.sendStatus(500));

    });

    router.post("/", upload.none(), async (req, res) => {
        const TrackData = req.body;
        const albums = await Albums.findOne({name : TrackData.album});
        TrackData.album = albums;
        try {
            const track = new Track(TrackData);
            track.save().then(() => res.send(TrackData))
        }catch (e) {
            res.send(e).status(500)
        }
    });
    return router;
};

module.exports = createRouter;