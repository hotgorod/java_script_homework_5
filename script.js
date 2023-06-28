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
// class Storage {
//     constructor(items) {
//         this.items = items
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
//         this.items.push(newItem)
//     }
//     removeItem(itemToRemove) {
//         const indexItemForDelete = this.items.indexOf(itemToRemove)
//         this.items.splice(indexItemForDelete, 1)
//     }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// =======================================================

// class StringBuilder {
//     constructor(initialValue) {
//         this.value = initialValue
//     }
//     getValue() {
//         return this.value;
//     }
//     padEnd(str) {
//         return this.value = this.value + str
//     }
    
//     padStart(str) {
//         return this.value = str + this.value
//     }
//     padBoth(str) {
//         return this.value = str + this.value + str
//     }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// ==================================================
// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000
  
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
    
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
// ==============================================
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//     static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//         return "Error! Price exceeds the maximum"
//         }
//         else return "Success! Price is within acceptable limits"
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// ==============================================
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
// blacklistedEmails = [];
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
// blacklist(email) {
//   this.blacklistedEmails.push(email)
// }
//   isBlacklisted(email){
//     return this.blacklistedEmails.some(x => x === email)
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
// ===============================================
// sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]

// var arr=[1,2,3,4,5,6,100,999]
// arr.sort((a,b)=>{
//   if (a%2==b%2) return a-b;
//   if (a%2>b%2) return -1;
//   return 1;q
// })
// console.log(arr)
// =============================
// const arr1 = [1,1,1,2,6,3,4,5,5,6,4,]
// // arr1.sort((a, b) => a-b)
// // console.log(arr1)
// const tempArr = arr1.filter((el, i, arr1) => el[0] === el[i])
// console.log(tempArr)
// ====================================


// function solution(str) {
//   return str.split('').reverse().join('')
// }


// console.log(solution("World"));
// ======================================
// function boolToWord( bool ){
//   if (bool === true)
//     return "Yes"
//   else
//   return "No"
// }
// console.log(boolToWord(true));
// =====================================
// var summation = function (num) {
//   let sum = 0
//   for (let i = 1; i <= num; i += 1){
//     sum+=i
//   }
//   return sum
// }
// console.log(summation(10));
// =======================================
// function removeChar(str){
//   return str.slice(1, -1)

  
// };
// console.log(removeChar("World"));

// ===================================
// function opposite(number) {
//   return -number
// }
// console.log(opposite(-1));
// ==================================
// function positiveSum(arr) {
//   let sum = 0
//   for (i = 0; i < arr.length; i += 1){
//     if (arr[i] > 0) {
//       sum+=arr[i]
//     }
//   }
//   return sum
// }

// ==========================
// number= 2345
// binary = number.toString(2)
// console.log(binary)
// ============================
// function arr2bin(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i += 1){
//     if (Number.isInteger(arr[i])) {
//       sum+=arr[i]
//     }
//     if (Number.isNaN(arr[i]))
//       return "NaN"
//   }
//   return sum.toString(2)
// }
// console.log(arr2bin([1,2,3,4,5]));
// =================================
// function findAverage(array) {
  
//   if (array.length > 0) {
//     let sum = 0
//     for (const a of array) {
//       sum += a
//     }
//      return sum / array.length
      
//   }
//   else
//   return 0;
// }
// console.log(findAverage([1, 2, 3]));
// =========== same as previous ======================
// function findAverage(array) {
//   if (array.length > 0)
//     return array.reduce((sum, value) => sum + value, 0)/array.length
//   else
//   return 0;
// }
// console.log(findAverage([1, 2, 3]));
// ============================================
function solution(number){
  
}