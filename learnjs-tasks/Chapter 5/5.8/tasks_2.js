'use strict'
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ]

  let date = new Date()

  let newMessages = new WeakMap()

  console.log('Прочитанно', newMessages.set(messages[0], new Date(2022, 2, 22)))

  messages.shift()