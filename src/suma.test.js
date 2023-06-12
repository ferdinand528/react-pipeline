const suma = require('./suma');

test('2 + 5 = 7', () =>{
    expect(suma(2,5)).toBe(8);
})