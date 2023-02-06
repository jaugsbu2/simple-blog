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

    console.log(posts);

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
router.get('/dashboard', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  res.render('dashboard');
});

// GET new post page
router.get('/newpost', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  res.render('newpost');
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
