Higher order functions
======================

A higher order function is a function that takes a function as an argument, or returns a function.

This is a key concept of lambda calculus and functional programming.

## Exercise

You just need to provide a function who receives and run a function passed as argument.

```javascript
const name = () => 'Periquillo'

const sayHello = //TODO

console.log(sayHello(name)) //Must print "Hello Periquillo!"
```