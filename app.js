const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.listen(8000);
const Chat = require('./chat')


// get style.css as default-----
app.use(express.static('public'))

//global variabel--


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
  if(!req.headers.cookie){
    res.redirect('/')
  }else{
    const userName = req.headers.cookie.split('=')[1]
    res.render('pages/chat', {userName, messages: Chat.getMessages()})
  }
})

// create messages and redirect to chat with message Array
app.post('/messages', (req, res) =>{
  const userName = req.headers.cookie.split('=')[1]
  const message = req.body.newmessage
  Chat.createMessage(userName, message)
  res.redirect('pages/chat')
})