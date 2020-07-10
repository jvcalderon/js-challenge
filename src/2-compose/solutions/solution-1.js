'use strict'

const compose = (...args) => (...args2) => args.reverse().reduce((fn1, fn2, i) => fn2(1 === i ? fn1(...args2) : fn1))

const say = (name) => name
const greeting = (name) => 'Hi ' + name
const greet = compose(console.log, greeting, say)
greet('Anacleto') // Just like console.log(greeting(say('Anacleto'))) //returns 'Hi Anacleto'
