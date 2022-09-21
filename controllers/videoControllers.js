const VideoModel = require("../models/VideoModel");

// all videos
const getAllVideos = async (req, res) => {
  try {
    const video = await VideoModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userPostedAllVideo = async (req, res) => {
  try {
    const user_id = req.user._id;

    const video = await VideoModel.find({ user_id }).sort({ createdAt: -1 });

    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// single
const getSingleVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await VideoModel.findById(id).sort({ createdAt: -1 });
    if (!video) {
      return res.status(400).json({ error: "No such video." });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// create
const createVideo = async (req, res) => {
  // req.body
  const { title, descroption, url, duration } = req.body;
  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!descroption) {
    emptyFields.push('descroption')
  }
  if(!url) {
    emptyFields.push('url')
  }
  if(!duration) {
    emptyFields.push('duration')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }
  try {
    const user_id = req.user._id
    const video = await VideoModel.create({
      title,
      descroption,
      url,
      duration,
      user_id,
    });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mess: "hello post world!"})
};

module.exports = {
  createVideo,
  getAllVideos,
  getSingleVideo,
  userPostedAllVideo,
};
