const crudCollection = require('../db').collection('crud')
const mongodb = require('mongodb')

exports.deleteItem = ((req, res) => {
    crudCollection.deleteOne({_id: new mongodb.ObjectID(req.body.id)}, function() {
        res.redirect('/')
    })
})

exports.addItem = ((req, res) => {
    crudCollection.insertOne(req.body).then(() => {
        res.redirect('/')
    }).catch((err) => {
        console.log(err)
    })
})


exports.updateItem = ((req, res) => {
    crudCollection.findOneAndUpdate({_id: new mongodb.ObjectID(req.body.id)}, {$set: {name: req.body.name, sport: req.body.sport}}, function() {
        res.send('success')
    })
})

exports.home = ((req, res) => {
    crudCollection.find().toArray((err, items) => {
        if(err) {
            console.log(err) 
        } else {
            res.render('index', {items})
        }
    })
})