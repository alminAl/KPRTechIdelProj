const express = require('express')
const { createVideo, getAllVideos, getSingleVideo, userPostedAllVideo } = require('../controllers/videoControllers')
const requireAuth = require('../middleware/requireAuth')
const VideoModel = require('../models/VideoModel')





// express app
const  router = express()

// require auth for all video routes
router.use(requireAuth)



// routes

// get all
// router.get('/', (req, res) => {
//     res.json({mess: "hello all world!"})
// })

// router.get('/', getAllVideos)
router.get('/', userPostedAllVideo)


// get single
// router.get('/:id', (req, res) => {
//     res.json({mess: "hello single world!"})
// })
router.get('/:id', getSingleVideo)


// create
// router.post('/', async (req, res) => {
//     // req.body
//     const {title, descroption, url, duration } = req.body
//     try {
//         const video = await VideoModel.create({title, descroption, url, duration})
//         res.status(200).json(video)
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
//     // res.json({mess: "hello post world!"})
// })

router.post('/', createVideo)

// delete
router.delete('/', (req, res) => {
    res.json({mess: "hello delete world!"})
})

// delete
router.patch('/', (req, res) => {
    res.json({mess: "hello patch world!"})
})

module.exports = router