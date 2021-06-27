const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');
router.get('/profile', usersController.profile);
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

router.post('/create', usersController.create);


const postsController = require('../controllers/posts_controller');
router.post('/posts', postsController.posts);

console.log('Users Router');
module.exports = router;
