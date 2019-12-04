const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://curso:curso@cluster0-6bqtn.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}
).then(() => {
    console.log('Conction Data Base OK')
}).catch(error => {
    console.log('Faild conection error: ', error)
});

module.exports = mongoose;