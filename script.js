// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
// Функція яка виведе всю інформацію про тварину.
// Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день).
// Функція яка зможе змінити назву тварини на більш детальну. 




// let animal = {
//     name: 'собака',
//     weight: '17 кг',
//     age: 5,
//     speedInKm: 25,
// };

// // function allInfo (obj) {
// //     console.log(this.name + ' ' + this.weight + ' ' + this.age + ' ' + this.speedInKm);
// // }

// // function allInfoTwo(obj) {
// //     return this.name + ' ' + this.weight + ' ' + this.age + ' ' + this.speedInKm;
// // }
// // allInfo.call(animal);
// // console.log(allInfoTwo.apply(animal));


// function nameChange(obj) {
//     obj.name = prompt('Ви можете змінити назву тварини на більщ детальну наприклад `німецька вівчарка`') ;
//     console.log(obj.name)
// }
// nameChange(animal);
// function overcome(obj) {
//     let timeToCome = 1000 / obj.speedInKm;
//     let daysToCome = Math.floor(timeToCome / 12);
//     let hoursToCome = timeToCome % 12;
//     console.log('щоб подолати 1000 км' + ' ' + animal.name + ' ' + ' витратить ' + daysToCome + ' днів ' + hoursToCome + ' годин');
// }
// overcome(animal);




// 2. Створіть обєкт який має у собі 2 довжини сторін фігури. 
// Додайте методи які будуть робити наступне - рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, 
// зададуть назву фігури, переведуть значення з сантиметрів у метри.


// let object = {
//     lenght: 12,
//     width: 14
// }

// function perimeterCalc(obj) {
//     let perimeter = 0;
//     perimeter = (obj.lenght + obj.width) * 2;
//     return perimeter;
// }

// function squareCalc(obj) {
//     let square = 0;
//     square = obj.lenght**2 + obj.width**2;
//     return square;
// }

// function addHeight(obj) {
//     obj.height = +prompt('задайте висоту фігури');
// }

// function objName(obj) {
//     obj.name = prompt('задайте назву фігурі');
// }
// function inToCentimeters(obj) {
//     obj.height = obj.height / 100;
//     obj.width = obj.width / 100;
//     obj.lenght = obj.lenght / 100;
//     console.log(obj)
//  }

// addHeight(object);
// inToCentimeters(object);
// objName(obj);


// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
// Виводимо список покупок - спочатку ті які є в магазині потім яких немає, 
// Виводимо список покупок які ми купили.
// Додаємо функцію яка дозволить купити продукт.
// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).

// let buyList = {
//     tomato: {
//         count: 5,
//         price: 50,
//         buy: false,
//         outOfstore: true
//       },
//     potato: {
//         count: 4,
//         price: 20,
//         buy: true,
//         outOfstore:true
//       },
//     orange: {
//         count: 6,
//         price: 60,
//         buy: false,
//         outOfstore: false
//       },
//       apple: {
//         count: 2,
//         price: 10,
//         buy: true,
//         outOfstore: false
//       },
//       onion: {
//         count: 6,
//         price: 5,
//         buy: false,
//         outOfstore: true
//       },
// }

// let userBought = [];


// function productInShop(obj) {
//     let arrInShop = [];
//     for (let key in obj){
//         if (obj[key].outOfstore === false) {
//             arrInShop.push(key);
//         }
//     }
//     // console.log(arrInShop);
// }

// function productOutOfShop(obj) {
//     let arrOutOfShop = [];
//     for (let key in obj){
//         if (obj[key].outOfstore === true) {
//             arrOutOfShop.push(key);
//         }
//     }
//     // console.log(arrOutOfShop);
// }

// function productUserBought(obj) {
//     let arrUserBought = [];
//     for (let key in obj){
//         if (obj[key].buy === true) {
//             arrUserBought.push(key);
//         }
//     }
//     // console.log(arrUserBought);
// }

// function buyProduct(obj) {
//     let arrWantToBuy = [];
//     for (let key in obj){
//         if (obj[key].buy === false) {
//             let wantToBuy = confirm(`maybe you want to buy ${key}`);
//             if (wantToBuy) {
//                 arrWantToBuy.push(key);
//             }
//         }
//     }
//     // console.log(arrWantToBuy);
// }

// function productSum (obj) {
//     let sum = 0;
//     for(let key in obj ) {
//         if (obj[key].buy) {
//             sum += obj[key].count * obj[key].price;
//         }
//     }
//     // console.log(sum);
//     return sum;
// }
// function addMoreProd(obj) {
//     for(let key in obj) {
//         if(obj[key].count) {
//            let newCount = +prompt(`do you want to add ${key}`);
//                 obj[key].count =obj[key].count + newCount;
//                 if (newCount < 0) {
//                     alert (`you can't make count of ${key} lower than zero!!!`);
//                 } 
//         }
//     }
//        return obj;
// }

// function reduceProd(obj) {
//     for(let key in obj) {
//         let lowerCount = +prompt(` If you wan't reduce count of ${key}`);
//         obj[key].count =obj[key].count - lowerCount;
//         if (obj[key].count < 0) {
//           lowerCount = +prompt(`you can't make count of ${key} lower than zero!!! pleace write another value`);
//           obj[key].count = lowerCount;
//         }   
//     }
//     return obj;
// }

// //console.log(reduceProd(buyList));
// // console.log(buyList);
// //  addMoreProd(buyList)
// // productSum(buyList);
// // productInShop(buyList);
// // productOutOfShop(buyList);
// // productUserBought(buyList);
// // buyProduct(buyList);

//. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. 
//Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.

// let people = [
//     {
//         name: 'Yura',
//         age: 55,
//         hobby: ['films', 'games', 'hiking'],
//         type: 'admin'
//     },
//     {
//         name: 'Mike',
//         age: 45,
//         hobby: ['films', 'football', 'cooking'],
//         type: 'teacher '
//     },
//     {
//         name: 'John',
//         age: 18,
//         hobby: ['films', 'karate', 'sony playstation'],
//         type: 'student'
//     },
//     {
//         name: 'David',
//         age: 35,
//         hobby: ['films', 'fishing', 'football'],
//         type: 'admin'
//     }
// ];

// let admins = [];
// function allAdmins(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].type === 'admin') {
//             admins.push(arr[i].name)
//         }
//     }
//     return admins;
// }
// console.log(allAdmins(people));


// function averageAge(arr) {
//     let totalAge = 0;
//         let averAge = 0;
//         for (let i = 0; i < arr.length; i++) {
//             totalAge += arr[i].age;
//         }
//         averAge = totalAge / arr.length;
//         return averAge;
// }
// console.log(averageAge(people));

// function uniqHobby(arr) {
//     let arrUniqHobby = [];
//     let uniqObj = {};
//     let allHobby = [];
//     for (let i = 0; i < arr.length; i++) {
//         allHobby = allHobby.concat(arr[i].hobby);
//     }
//     uniqObj = new Set(allHobby);
//     arrUniqHobby = [...uniqObj];
//     return arrUniqHobby;
// }
// console.log(uniqHobby(people));


