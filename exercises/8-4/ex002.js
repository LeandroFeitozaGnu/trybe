const assert = require('assert')

// escreva sum abaixo

function sum (...rest) {
    return rest.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)