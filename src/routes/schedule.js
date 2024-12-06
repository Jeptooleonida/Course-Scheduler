const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

// Route to get a student's schedule
router.get('/:studentId', scheduleController.getSchedule);

// Route to add a course to a student's schedule
router.post('/:studentId', scheduleController.addCourseToSchedule);

module.exports = router;
