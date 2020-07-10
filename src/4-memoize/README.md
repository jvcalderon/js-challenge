Memoize
======================

Memoization is a optimization technique used to cache already calculated results inside a function. 
Obviously that function must be pure (deterministic); same input produces same output.

Key concepts:
- Pure functions
- Closures

## Exercise

You have to implement `memoize` function. It will receives a function and returns the same one but memoized:
- If the argument tuple is new, it should execute the operation and save it.
- If the argument tuple has been given before, it should recover the value from cache

```javascript
const memoize = x => x //TODO

const sum = memoize((a, b, c) => a + b + c)
console.log(sum(1,2,3)) //In this first call result (6) is calculated and stored in cache var
console.log(sum(1,2,3)) //In this call result is retrieved from cache
console.log(sum(2,3,4)) //New result (9) stored in cache
```
