    // const { Client, LocalAuth } = require('whatsapp-web.js');
    // const qrcode = require('qrcode-terminal');
    // const ListStudents = require('./datos/students.js');
    // const ConversationSteps = require('./datos/sonversationSteps.js');
    // const axios = require('axios');


    // const client = new Client({ authStrategy: new LocalAuth({ clientId: "client-one" }) });

    // var ListConversation = [];

    // client.on('qr', (qr) => {
    //     // Generate and scan this code with your phone
    //     console.log('QR RECEIVED', qr);
    //     qrcode.generate(qr, { small: true });
    // });

    // client.on('ready', () => {
    //     console.log('Client is ready!');
    // });



    // client.on('message', async msg => {
    //     try {

    //         if (msg.hasMedia) { return; }

    //         // console.log(msg);
    //         if (msg.body == "reset") {
    //             client.sendMessage(msg.from, 'Reiniciando');
    //             ListConversation = [];
    //             return;
    //         }

    //         let studentActual = setStudent({
    //             phone: msg.from,
    //             name: '',
    //             item: 1,
    //         });




    //         if (studentActual) {

    //             console.log('Student Actual:', studentActual);

    //             switch (studentActual.item) {
    //                 case 1:
    //                     var Steps = findSteps(1);
    //                     client.sendMessage(studentActual.phone, Steps.message);
    //                     Steps = findSteps(2);
    //                     client.sendMessage(studentActual.phone, Steps.message);
    //                     studentActual.item = 2;
    //                     updateStudent(studentActual);
    //                     break;
    //                 case 2:
    //                     var result = validaCedula(msg.body);
    //                     if (result) {
    //                         var Steps = findSteps(3);
    //                         client.sendMessage(studentActual.phone, Steps.message + ' ' + result.name);
    //                         studentActual.item = 5;
    //                         updateStudent(studentActual);
    //                         await delay(1500);
    //                         Steps = findSteps(5);
    //                         client.sendMessage(studentActual.phone, Steps.message);
    //                     } else {
    //                         var Steps = findSteps(2.1);
    //                         client.sendMessage(studentActual.phone, 'Estudiante no Identificado');
    //                         client.sendMessage(studentActual.phone, Steps.message);
                        
    //                     }
    //                     break;
    //                 case 5:
    //                     var resultIA = await consultarIA(msg.body);
    //                     await flujo(studentActual, resultIA);
    //                     break;

    //                 default:
    //                     break;
    //             }



    //         }

    //     } catch (error) {
    //         console.log(error);
    //     }
    // });



    // delay = (milliseconds) => {
    //     return new Promise(resolve => setTimeout(resolve, milliseconds));
    // }

    // function findSteps(value) {
    //     let result = ConversationSteps.ConversationSteps.find(item => item.item == value);
    //     return result;
    // }


    // function validaCedula(value) {

    //     if (value.length > 15) return;
    //     let result = ListStudents.ListStudents.find(item => item.cedula == value);
    //     return result;
    // }



    // function setStudent(params) {
    //     try {
    //         var result = ListConversation.find(item => item.phone == params.phone);
    //         if (!result) {
    //             //  console.log('Usuario nuevo');
    //             ListConversation.push(params);
    //             result = params;
    //         } else {
    //             console.log('Usuario ya existe');
    //         }

    //         if (!result.index) {
    //             result.index = 1;
    //         } else {
    //             result.index = result.index + 1;
    //         }

    //         //console.table(ListConversation);
    //         return result;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }



    // function updateStudent(params) {
    //     var resultIndex = ListConversation.findIndex(item => item.phone == params.phone);
    //     if (!resultIndex) {
    //         ListConversation[resultIndex] = params;
    //     }
    //     // console.table(ListConversation);
    //     return resultIndex;
    // }
    // /*
    // { 
    //     CERTIFICADOS: 'certificado', 
    //     Materias: 'software', 
    //     Notas: 'notas'
    // }
    
    // */
    // /*
    // *
    // * 
    // * @params studentActual
    // */

    // flujo = async (studentActual, params) => {
    //     try {
    //         console.log(params);

    //         if (params.intents.length == 0) {
    //             client.sendMessage(studentActual.phone, 'No entiendo tu solicitud! Porfavor escribe nuevamente...');
    //             return;
    //         }

    //         var intent = params.intents[0];
    //         var entities = params.entities;


    //         switch (intent.name) {
    //             case 'Solicitar':
    //                 client.sendMessage(studentActual.phone, 'Calro que si !! Aqui te tienes un link donde puedes gestionar tu solicitud !!');
    //                 client.sendMessage(studentActual.phone, 'https://form.jotform.com/212168917827061');
    //                 client.sendMessage(studentActual.phone, 'Te puedo ayudar en algo mas ?');
    //                 await delay(1500);

    //                 var d=getDataFromJson(entities);
    //                 console.log(d); 

    //                 client.sendMessage(studentActual.phone,JSON.stringify(d))
    //                 break;

    //             default:
    //                 break;
    //         }

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    // function getInitialPart(str) {
    //     const parts = str.split(":");
    //     return parts[0];
    // }

    // function getDataFromJson(entities) {
    //     const result = {};
    //     for (const entityKey in entities) {
    //         const entityData = entities[entityKey];
    //         const entityValues = entityData.map((entity) => entity.value);
    //         result[getInitialPart(entityKey)] = entityValues[0];
    //     }

    //     return result;
    // }

    // function consultarIA(message) {

    //     const witAiUrl = 'https://api.wit.ai/message?v=20230601&q';
    //     const accessToken = 'AJJVSLU7JXX4VLMKKWTYCD7MZLR772SO'; // Reemplaza con tu access token de Wit.ai

    //     return new Promise((result) => {
    //         axios.get(witAiUrl, {
    //             headers: {
    //                 Authorization: `Bearer ${accessToken}`
    //             },
    //             params: {
    //                 q: message
    //             }
    //         }).then(response => {
    //             console.log("Alan")
    //             const witAiResponse = response.data;
    //             console.log(witAiResponse);
    //             result(witAiResponse);
    //         }).catch(error => {
    //             console.error('Error al invocar el servicio de Wit.ai:', error);
    //         })
    //     });

    // }





    // client.initialize();


   // index.js
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { ListConversation, setUser, updateUser } = require('./conversations');
// const Menu = require('./menu.js');
const { Menu, showMenu } = require('./menu.js'); // Aquí importas ambos

const ConversationSteps = require('./conversations.js');



const client = new Client({ authStrategy: new LocalAuth({ clientId: "restaurant-bot" }) });

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    try {
        if (msg.hasMedia) { return; }

        // Verificar si el mensaje es "reset"
        if (msg.body.toLowerCase() == "reset") {
            client.sendMessage(msg.from, 'Reiniciando...');
            ListConversation = [];
            return;
        }

        let user = setUser({
            phone: msg.from,
            name: '',
            item: 1,
        });

        if (user) {
            console.log('User:', user);

            switch (user.item) {
                case 1:
                    var steps = findStep(1);
                    client.sendMessage(user.phone, steps.message);
                    steps = findStep(2);
                    client.sendMessage(user.phone, steps.message);
                    user.item = 2;
                    updateUser(user);
                    break;
                case 2:
                    if (msg.body.toLowerCase() === 'pedir comida') {
                        var steps = findStep(3);
                        client.sendMessage(user.phone, steps.message);
                        showMenu(client, user);
                        user.item = 3;
                        updateUser(user);
                    } else if (msg.body.toLowerCase() === 'hacer una reserva') {
                        var steps = findStep(4);
                        client.sendMessage(user.phone, steps.message);
                        user.item = 4;
                        updateUser(user);
                    } else {
                        var steps = findStep(5);
                        client.sendMessage(user.phone, steps.message);
                    }
                    break;
                case 3:
                    // Tomar el pedido
                    var steps = findStep(6);
                    client.sendMessage(user.phone, steps.message);
                    user.item = 6;
                    updateUser(user);
                    break;
                case 4:
                    // Tomar la reserva
                    var steps = findStep(7);
                    client.sendMessage(user.phone, steps.message);
                    user.item = 7;
                    updateUser(user);
                    break;
                default:
                    break;
            }
        }

    } catch (error) {
        console.log(error);
    }
});

// Retornar los pasos de la conversación
function findStep(value) {
    const steps = {
            1: { message: '¡Hola! Soy el asistente virtual de [Comidas Rapidas william]. ¿Cómo puedo ayudarte hoy? Escribe "pedir comida" para hacer un pedido o "hacer una reserva" para reservar una mesa.' },
            2: { message: '¿Qué deseas hacer? Escoge una opción:\n- Pedir comida\n- Hacer una reserva' },
            3: { message: '¡Genial! Aquí está el menú del día. ¿Qué te gustaría ordenar?' },
            4: { message: 'Por favor, dime la fecha y hora para tu reserva.' },
            5: { message: 'Lo siento, no te entendí. Escribe uno de los comandos mencionados.' },
            6: { message: 'Perfecto, por favor indícame el plato que deseas pedir.' },
            7: { message: '¡Listo! ¿Cuántas personas serán para la reserva?' }
        };
    return steps[value];
}

client.initialize();
