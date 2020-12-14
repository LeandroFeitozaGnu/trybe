const myRemoveWithoutCopy = require('../ex001/ex003')

describe('Testa a implementação da função myRemoveWithoutCopy', () => {
	it('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
		expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ])
	})

	it('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
		expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
	})

	it('Testa chamada função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
		const arr = [1, 2, 3, 4];
		myRemoveWithoutCopy(arr, 3);
		expect(arr).toEqual([1, 2, 4])
	})

	it('Testa myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
		expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
	})
});
