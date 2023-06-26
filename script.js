// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// historyService.getOrdersByEmail("solomon@topmail.net")
// historyService.getOrdersByEmail("artemis@coldmail.net")

// =================================================
// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// class Car {
//   // Change code below this line
// constructor (brand, model, price){
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }


//   // Change code above this line
// }
// const Audi = new Car("Audi", "Q3", 36000)
// console.log(Audi);
// =====================================================


// Change code above this line
class Storage {
    constructor(items) {
        this.items = items
    }
    getItems() {
        return this.items;
    }
    addItem(newItem) {
        this.items.push(newItem)
    }
    removeItem(itemToRemove) {
        const indexItemForDelete = this.items.indexOf(itemToRemove)
        this.items.splice(indexItemForDelete, 1)
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]