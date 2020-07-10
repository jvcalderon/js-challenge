'use strict'

const name = () => 'Periquillo'

const sayHello = nameFn => `Hello ${nameFn()}!`

console.log(sayHello(name)) //Must print "Hello Periquillo!"
