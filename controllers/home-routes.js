const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );
    console.log(posts)
    console.log(posts[0].user.username)
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all posts for dashboard
router.get('/dashboard', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  try {
    const {username, userID, loggedIn} = req.session
    const userPostData = await Post.findAll({
      where: {
        creator_id: userID
      }
    })
    const posts = userPostData.map((post) =>
    post.get({ plain: true })
  );

console.log(posts)
  res.render('dashboard', 
  {posts, username, userID, loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET new post page
router.get('/newpost', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  const loggedIn = req.session

  res.render('newpost',{
  loggedIn,});
});

// GET login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
