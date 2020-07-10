'use strict'

const memoize = x => x //TODO

const sum = memoize((a, b, c) => a + b + c)
console.log(sum(1,2,3)) //In this first call result (6) is calculated and stored in cache var
console.log(sum(1,2,3)) //In this call result is retrieved from cache
console.log(sum(2,3,4)) //New result (9) stored in cache
