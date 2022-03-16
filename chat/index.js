let messages = []

function createMessage(username, message){
  const newMessage = {
    message: message,
    username: username,
    date: Date.now()
  }
  messages.unshift(newMessage)

}

function getMessages(){
  return messages.slice(0,10)
}

module.exports = {createMessage, getMessages, messages}
