// menu.js
const Menu = {
    "entradas": [
        { name: "Sopa de Verduras", price: 5 },
        { name: "Ensalada César", price: 7 }
    ],
    "platos_principales": [
        { name: "Pasta Alfredo", price: 12 },
        { name: "Pizza Margarita", price: 15 }
    ],
    "postres": [
        { name: "Tarta de Limón", price: 4 },
        { name: "Helado de Vainilla", price: 3 }
    ],
    "bebidas": [
        { name: "Agua", price: 2 },
        { name: "Coca-Cola", price: 3 }
    ]
};

function showMenu(client, user) {
    let message = "Aquí está el menú del día:\n";
    for (let category in Menu) {
        message += `\n*${category.toUpperCase()}*:\n`;
        Menu[category].forEach(item => {
            message += `- ${item.name}: $${item.price}\n`;
        });
    }
    client.sendMessage(user.phone, message);
}

module.exports = { Menu, showMenu };
