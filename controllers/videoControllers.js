const VideoModel = require("../models/VideoModel");


// all videos
const getAllVideos = async (req, res) => {
    try {
        const video = await VideoModel.find({}).sort({createdAt: -1})
        res.status(200).json(video);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// single
const getSingleVideo = async (req, res) => {
    const {id} = req.params
    try {
        const video = await VideoModel.findById(id).sort({createdAt: -1})
        if(!video){
            return res.status(400).json({ error: 'No such video.' });
        }
        res.status(200).json(video);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


// create
const createVideo = async (req, res) => {
  // req.body
  const { title, descroption, url, duration } = req.body;
  try {
    const video = await VideoModel.create({ title, descroption, url, duration });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mess: "hello post world!"})
};


module.exports = {
    createVideo,
    getAllVideos,
    getSingleVideo
}