const myRemove = require('./ex001/ex002')

describe('Testa a implementação da função myRemove', () => {
    it('Testa se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4])
    })

    it('Testa se a chamada myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })

    it('Testa se o array passado por parametro NÃO sofreu alterações', () => {
        expect(myRemove([1, 2, 3])).toEqual([1, 2, 3])
    })

    it('Testa se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
});

// expect(sum(0, 0)).toBe(0)