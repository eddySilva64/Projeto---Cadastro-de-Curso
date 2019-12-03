const mongoose = require('../database/index');

const CourseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    price:{
        type: Number
    },
   author:{
       type: String,
       required: true
   },
   createdAt:{
       type: Date,
       default: Date.now
   }
});


const Course = mongoose.model('Couse', CourseSchema)

module.exports = Course;