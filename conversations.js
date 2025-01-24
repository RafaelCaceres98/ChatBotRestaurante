// conversations.js
// Lista de conversación de los clientes
let ListConversation = [];

function setUser(params) {
    let result = ListConversation.find(item => item.phone == params.phone);
    if (!result) {
        ListConversation.push(params);
        result = params;
    }
    return result;
}

function updateUser(params) {
    const resultIndex = ListConversation.findIndex(item => item.phone == params.phone);
    if (resultIndex >= 0) {
        ListConversation[resultIndex] = params;
    }
}

module.exports = {
    ListConversation,
    setUser,
    updateUser
};
