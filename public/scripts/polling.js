


    setInterval( () => {
        fetch('/pages/chat')
          .then(res => res.text())
          .then( html => {
            const messageContainer = document.querySelector(".message-container")
            messageContainer.innerHTML = html + messageContainer.innerHTML
            
          })
      }, 1000)