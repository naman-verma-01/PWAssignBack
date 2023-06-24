const express = require("express");
const router = express.Router();
const { addPost, fetchPost } = require("../methods/posts")

router.post("/addPost", async (req, res) => {
    try {
        const response = await addPost(req.body)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})

router.get("/fetchPost", async (req, res) => {
    try {
        const response = await fetchPost(req.query.location, req.query.duration, req.query.industry)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;
