const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

let accounts;
// mocha function test
beforeEach(async () => {
    // get a list of all accounts (Using async await syntax) / much simpler
    accounts = await web3.eth.getAccounts();
});

// beforeEach(() => {
//     // get a list of all accounts (Using a Promise syntax)
//     web3.eth.getAccounts().then(fetchedAccounts => {
//         console.log(fetchedAccounts);
//     });
// });

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts);
    });
});


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
