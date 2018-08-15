let express = require('express'),
    server = express()
    // data = require('./data.json');

server.get('/', (req,res) => {
    res.redirect('home')
})

server.get('/home', (req,res) => {
    res.render('index')
})

server.get('/blog', (req,res) => {
    res.render('blog-post')
})

module.exports = server