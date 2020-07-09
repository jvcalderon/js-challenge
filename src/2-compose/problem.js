'use strict'

const compose = x => x //TODO

const say = (name) => name
const greeting = (name) => 'Hi ' + name
const greet = compose(console.log, greeting, say)

greet('Anacleto') // Just like console.log(greeting(say('Anacleto'))) //returns 'Hi Anacleto'