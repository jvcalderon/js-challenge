Currying
======================

Currying is the process of transforming a function that takes multiple arguments in a tuple as its argument, into a 
function that takes just a single argument and returns another function which accepts further arguments, one by one, 
that the original function would receive in the rest of that tuple.

Key concepts:
- Partial application

## Exercise

You have to implement the function `curry`; it can receive functions with arity > 1 (arity = number of arguments) and 
convert it in a curried function:

```javascript
const curry = x => x //TODO

const curried = curry((a, b, c) => a + b + c)
console.log(curried(1)(2)) //Returns a function who spects one value to return a result
console.log(curried(1)(2)(3)) //Returns 6
console.log(curried(1,2)(3)) //Returns 6
console.log(curried(1,2,6)) //Returns 6
```
