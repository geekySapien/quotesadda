import express from 'express';
const router = express.Router();
import Quote from '../model/Quote'
router.post("/", async (req, res) => {
    const newQuote = new Quote(req.body);
    try {
        const quote = await newQuote.save();
        return res.status(200).json({quote:quote})
    }
    catch (err) {
        return res.status(500).json(err);
    }
})

router.get("/", async (req, res) => {
    try {
        const allPost = await Quote.find();
        return res.status(200).json({ message: "All quotes succesfully retrieved", posts: allPost });
    }
    catch (err) {
        return res.status(500).json(err);
    }
})

export default router;
