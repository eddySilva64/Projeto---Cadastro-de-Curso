const express = require('express')
const courseController = require('../controller/courseController')

const router = express.Router()

router.post('/create', courseController.create);
router.get('/course-list', courseController.showAll);
router.get('/course/:id', courseController.showOne);
router.put('/course-update/:id', courseController.updateCourse);
router.delete('/course-destroy/:id', courseController.destroyCourse);

module.exports = router;