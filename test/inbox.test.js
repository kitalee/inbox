const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

// mocha function test

// class Car {
//     park(){
//         return 'stopped';
//     }
//     drive(){
//         return 'vroom';
//     }
// }
//
// let car;
// // 매 it function 전에 호출됨 / initialization
// beforeEach(() => {
//     car = new Car();
// });
//
// describe('Car', () => {
//     it('car park', () => {
//         // const car = new Car();
//         assert.equal(car.park(), 'stopped');
//     });
//
//     it('car drive', () => {
//         // const car = new Car();
//         assert.equal(car.drive(), 'vroom');
//     });
// });
