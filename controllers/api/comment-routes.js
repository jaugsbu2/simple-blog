const router = require('express').Router();
const { Comment, User } = require('../../models');

// CREATE new comment
router.post('/', async (req, res) => {
  console.log("hello")
  try {
    const newComment = {
      post_id: req.body.postId,
      content: req.body.content,
      creator_id: req.session.userID

    }
    console.log(newComment)
    const dbCommentData = await Comment.create(newComment);
    res.status(200).json(dbCommentData)
    console.log(req.body)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
