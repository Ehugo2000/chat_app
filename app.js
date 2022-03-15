const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.listen(8000);


// get style.css as default-----
app.use(express.static('public'))

//global variabel--
let messages = []


//landing page-----
app.get('/', (req, res) => {
  res.render('index')
})


// save username and redirect-----
app.post('/setname', (req, res) => {
  const userName = req.body.userName
  res.set('Set-Cookie', "userName="+userName)
  res.redirect('/pages/chat')
})

app.get('/pages/chat', (req, res) => {
  const userName = req.headers.cookie.split('=')[1]
  res.render('pages/chat', {cookie: userName})
})

// create messages and redirect to chat with message Array
app.post('/messages', (req, res) =>{
  const message = req.body.newmessage
  console.log(message);
  res.redirect('pages/chat')
})