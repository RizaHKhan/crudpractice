const db = require('mongodb')

const connectionString = 'mongodb+srv://mastaraz:uRvQkGTitleo5Uv1@to-do-list-s6ku5.mongodb.net/crudPractice?retryWrites=true&w=majority'

db.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) {
        console.log(err) 
    } else {
        module.exports = client.db()
        const app = require('./app')
        app.listen(3000)
    }
})
