// Create web server
const express = require('express');
const router = express.Router();

// Require the controllers
const comment_controller = require('../controllers/comment.controller');

// POST request for creating comment
router.post('/create', comment_controller.comment_create);

// GET request for list of all comment items
router.get('/', comment_controller.comment_list);

// GET request for one comment
router.get('/:id', comment_controller.comment_detail);

// PUT request to update comment
router.put('/:id/update', comment_controller.comment_update);

// DELETE request to delete comment
router.delete('/:id/delete', comment_controller.comment_delete);

module.exports = router;