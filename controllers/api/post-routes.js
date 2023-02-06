const router = require('express').Router();
const { Post, User } = require('../../models');

// CREATE new post
router.post('/', async (req, res) => {
  console.log("hello")
  try {
    const dbPostData = await Post.create(req.body);
    res.status(200).json(dbPostData)
    console.log(req.body)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
