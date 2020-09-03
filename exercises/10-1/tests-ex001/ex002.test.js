const myRemove = require('../ex001/ex002');
const myRemoveWithoutCopy = require('../ex001/ex003');

describe('Testa a implementação da função myRemove', () => {
    it('Testa se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4])
    })

    it('Testa se a chamada myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })

    it('Testa se o array passado por parametro NÃO sofreu alterações', () => {
        const arr = [1, 2, 3, 4];
		myRemove(arr, 3);
		expect(arr).toEqual([1, 2, 3, 4])
    })

    it('Testa se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
});
