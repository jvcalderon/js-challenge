'use strict'

const compose = (...args) => {
    return (...args2) => {
        return args.reverse().reduce((fn1, fn2, i) => {
            return fn2(1 === i ? fn1(...args2) : fn1)
        })
    }
}

const say = (name) => name
const greeting = (name) => 'Hi ' + name
const greet = compose(console.log, greeting, greeting, say)

greet('Anacleto') // Just like console.log(greeting(say('Anacleto'))) //returns 'Hi Anacleto'