const express = require('express')
const app = express()
const port = 3000

// middleware
app.use(express.static('assets'))


app.use((req, res, next) => {
    
    console.log('custom middleware ' + req.url);


    //res.send('closed');
    
    // calls next middleware
    next();
});

// routing
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/style1.css', (req, res) => {
    res.send('this is style css!')
  })

app.get('/about', (req, res) => {

    res.sendFile(__dirname + '/about.html');

});


// posts/1
// posts/2
// posts/3

// app.get('/:username', (req, res) => {
//     res.send('Hello World! ' + req.params.username)
//   })

// route parameters
app.get('/posts/:id', (req, res) => {
    res.send([1,23])
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})