const router = require('express').Router();
const { Post, User } = require('../../models');

// CREATE new post
router.post('/', async (req, res) => {
  console.log("hello")
  try {
    const newPost = {
      title: req.body.title,
      content: req.body.content,
      creator_id: req.session.userID
    }
    console.log(newPost)
    const dbPostData = await Post.create(newPost);
    res.status(200).json(dbPostData)
    console.log(req.body)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
