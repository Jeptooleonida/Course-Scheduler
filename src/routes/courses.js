const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Route to get all courses
router.get('/', courseController.getCourses);

// Route to get a specific course
router.get('/:id', courseController.getCourseDetails);

module.exports = router;
