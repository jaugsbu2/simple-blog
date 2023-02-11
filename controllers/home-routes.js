const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all posts for dashboard
router.get("/dashboard", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }

  try {
    const { username, userID, loggedIn } = req.session;
    const userPostData = await Post.findAll({
      where: {
        creator_id: userID,
      },
    });
    const posts = userPostData.map((post) => post.get({ plain: true }));

    res.render("dashboard", { posts, username, userID, loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post data
router.get("/post/:id", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }

  try {
    const postId = req.params.id

    const { username, userID, loggedIn, } = req.session;
    const userPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = userPostData.get({ plain: true });
    console.log(posts)

    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

        const comments = commentData.map((comment) => comment.get({ plain: true }));
        console.log(comments)

    res.render("post", { posts, comments, username, userID, loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET new post page
router.get("/newpost", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  const loggedIn = req.session;

  res.render("newpost", {
    loggedIn,
  });
});

// GET login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
