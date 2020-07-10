'use strict'

const curry = fn => {
    const arity = fn.length
    const currify = (...args) => {
        return args.length === arity
            ? fn(...args)
            : (...newArgs) => {
                return currify(...[...args, ...newArgs])
            }
    }
    return currify
}

const curried = curry((a, b, c) => a + b + c)
console.log(curried(1)(2)) //Returns a function who spects one value to return a result
console.log(curried(1)(2)(3)) //Returns 6
console.log(curried(1,2)(3)) //Returns 6
console.log(curried(1,2,6)) //Returns 6