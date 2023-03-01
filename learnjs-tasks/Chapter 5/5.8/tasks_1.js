'use strict'
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ]

  let newMessages = new WeakSet()

  newMessages.add(messages[0])
  newMessages.add(messages[2])

  console.log('Прочитано сообщение?', newMessages.has(messages[0]))
  console.log('Прочитано сообщение?', newMessages.has(messages[1]))
  console.log('Прочитано сообщение?', newMessages.has(messages[2]))

  messages.shift()