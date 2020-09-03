const sum = require('../ex001/ex001')

test('Testa se soma 4+5 retorna 9', () => {
    expect(sum(4, 5)).toBe(9)
});

test('Testa se 0+0 retorna 0', () => {
    expect(sum(0, 0)).toBe(0)
});

test('Testa se é lançado um erro quando recebe uma String por parametro', () => {
    expect(() => {
        sum(4, '5');
    }).toThrow();
});

test('Testa se a mensagem de erro é "parameters must be numbers" ', () => {
    expect(() => {
        sum(4, '5');
    }).toThrowError('parameters must be numbers')
})

