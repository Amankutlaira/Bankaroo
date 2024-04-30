'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKAROO APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>

      <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

//----------------------------------------------------------------------------------

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'r'];

// //Slice
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// //SPLICE
// arr.splice(-1);
// console.log(arr);

// //Reverse
// arr = ['a', 'b', 'c', 'd', 'r'];
// const arr2 = ['5', '4', '3', '2', '1'];

// console.log(arr2.reverse());
// const letters = arr.concat(arr2);
// console.log(letters);

// //Join
// console.log(letters.join(' & '));

// const arr1 = [23, 11, 64];

// console.log(arr1[0]);
// console.log(arr1.at(0));

// // getting last element of array
// console.log(arr1[arr1.length - 1]);
// console.log(arr1.slice(-1)[0]);
// console.log(arr1.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movenment of movements){
//     if(movenment > 0){
//         console.log(`You Deposited Money ${movement}`);
//     }
//     else{
//         console.log(`You Withdrew the Money `);
//     }
// }

// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrect = dogsJulia.slice(1, 3);
//   // dogsJuliaCorrect.splice(0, 1);
//   // dogsJuliaCorrect.splice(-2);
//   const dogs = dogsJuliaCorrect.concat(dogsKate);
//   // const dogs = [...dogsJuliaCorrect, ...dogsKate];
//   dogs.forEach(function (age, i) {
//     if (age > 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
//     } else {
//       console.log(
//         `Dog number ${i + 1} is still pupppy, and is ${age} years old`
//       );
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Reduce

const balance = movements.reduce(function (acc, curr, i, arr) {
  return acc + curr;
});
console.log(balance);

//Filter method

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// for (const mov of movements) {
//   if (mov > 0) {
//     console.log(mov);
//   }
// }
// const withrew = movements.filter(mov => mov < 0);
// console.log(withrew);

//Map method
// const euroToUsd = 1.1;

// const movementUsd = movements.map(function (mov) {
//   return mov * euroToUsd;
// });
// console.log(movementUsd);

// const newA = [];
// for (const mov of movements) {
//   newA.push(euroToUsd * mov);
// }
// console.log(newA);

// const movementUsd = movements.map(mov => mov * euroToUsd);
// console.log(movementUsd);

// const movementDes = movements.map((mov, i) => {
//   return `Movement${i + 1}: You ${mov > 0 ? 'Deposit' : 'Withdrew'} ${Math.abs(
//     mov
//   )}`;
// });

// console.log(movementDes);
