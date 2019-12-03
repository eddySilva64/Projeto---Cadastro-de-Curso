const Courses = require('../models/course');

function errorHandling(field, text) {
    if(!field) throw new Error(text);
}


module.exports = {

   async create(req, res) {

        const { title, description, price, author, } = req.body;

        try{

            errorHandling(title, 'please fill in the title field');
            errorHandling(description, 'please fill in the description field');
            errorHandling(price, 'please fill in the price field');
            errorHandling(author, 'please fill in the author field');

            const course = await Courses.create(req.body);

            return res.send(course);

        } catch(error){

            res.status(400).json({
                error: 'Error',
                message: error.message
            });
        }
   },

   async showAll(req, res){

        const course = await Courses.find();

        res.send(course);
   },

   async showOne(req, res) {

        const id = req.params.id;

        const course = await Courses.findById(id);

        res.send(course);
   },

   async updateCourse(req, res) {

        const id = req.params.id;

        const body = req.body;

        const course = await Courses.findByIdAndUpdate(id, body,{ new: true });

        res.send(course);
   },

   async destroyCourse(req, res) {
    
        const id = req.params.id;

        await Courses.findByIdAndRemove(id);

        res.send()

   }
}