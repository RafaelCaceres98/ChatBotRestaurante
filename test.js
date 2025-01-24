// const test = require('test');
// const index = require('./index.js');


// test('valida cedula passing test', t => {
//     // This test passes because it does not throw an exception.
//     assert.strictEqual('123', index.validaCedula('123'))
// })

// test('valida cedula failing test', t => {
//     // This test fails because it throws an exception.
//     assert.strictEqual('123', index.validaCedula('113'))
// })

// test('valida len cedula passing test', t => {
//     // This test passes because it does not throw an exception.
//     assert.strictEqual('123456789101112', index.validaCedula('123456789101112'))
// })



// test('valida conversacion passing test', t => {
//     // This test passes because it does not throw an exception.
//     assert.strictEqual({
//         phone: msg.from,
//         name: '',
//         item: 0,
//     },
//         index.setNuevoEstudiante({
//             phone: msg.from,
//             name: '',
//             item: 0,
//         }))
// })

// test('valida conversacion failing test', t => {
//     // This test fails because it throws an exception.
//     assert.strictEqual({
//         phone: msg.from,
//         name: '',
//         item: 1,
//     }, index.setNuevoEstudiante({
//         phone: msg.from,
//         name: '',
//         item: 0,
//     }))
// })


const assert = require('assert');  // Asegúrate de importar 'assert'
const index = require('./index.js');  // Asegúrate de importar el archivo correcto

// Simulación de 'msg.from' para las pruebas de conversación
const mockMsg = { from: '1234567890' };  // Valor simulado para 'msg.from'

// Test para la cédula que pasa (simulando que la cédula es válida)
test('valida cedula passing test', t => {
    // La función 'validaCedula' debería devolver '123' si la cédula es válida.
    assert.strictEqual('123', index.validaCedula('123'));
});

// Test para la cédula que falla (simulando que la cédula no es válida)
test('valida cedula failing test', t => {
    // La función 'validaCedula' debería devolver 'undefined' si la cédula no es válida.
    assert.strictEqual(undefined, index.validaCedula('113')); 
});

// Test para cédula de longitud válida
test('valida len cedula passing test', t => {
    // La función 'validaCedula' debería devolver '123456789101112' si la cédula es válida
    assert.strictEqual('123456789101112', index.validaCedula('123456789101112'));
});

// Prueba de la función setUser (validar conversación)
test('valida conversacion passing test', t => {
    // Probamos la función 'setUser' y aseguramos que el valor de retorno sea el esperado
    let result = index.setUser({
        phone: mockMsg.from, // Usamos 'mockMsg.from' en lugar de 'msg.from'
        name: '',
        item: 0,
    });

    // Aquí esperamos que 'result' sea igual al objeto que hemos pasado
    assert.deepStrictEqual(result, { 
        phone: '1234567890', 
        name: '', 
        item: 0 
    });
});

// Simulamos que el 'item' de la conversación se actualiza a 1 en el siguiente paso
test('valida conversacion failing test', t => {
    let result = index.setUser({
        phone: mockMsg.from, 
        name: '', 
        item: 0,
    });

    // Aquí esperamos que el valor de 'item' se actualice a 1, no a 0
    assert.deepStrictEqual(result, { 
        phone: '1234567890', 
        name: '', 
        item: 1 
    });
});
