const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Use capital letter 'W' because it's a Construct function

// UPDATE THESE TWO LINES RIGHT HERE!!!!! <-----------------
const provider = ganache.provider();
const web3 = new Web3(provider); // the instance of Web3 construct
const { interface, bytecode } = require('../compile');
//
let accounts;
let inbox;
// mocha function test
beforeEach(async () => {
    // get a list of all accounts (Using async await syntax) / much simpler
    accounts = await web3.eth.getAccounts();

    // use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas: '1000000' });
    // ADD THIS ONE LINE RIGHT HERE!!!!! <---------------------
    inbox.setProvider(provider);
});

// describe('Inbox', () => {
//   it('deploys a contract', () => {
//     console.log(inbox);
//     //console.log(accounts);
//   });
// });

// beforeEach(() => {
//     // get a list of all accounts (Using a Promise syntax)
//     web3.eth.getAccounts().then(fetchedAccounts => {
//         console.log(fetchedAccounts);
//     });
// });

describe('Inbox', () => {

    it('deploys a contract', () => {
        // check if the value is defined
        assert.ok(inbox.options.address);
        //console.log(inbox);
        //console.log(accounts);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
    });

    it('can change the message', async() => {
        await inbox.methods.setMessage('bye').send({from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
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
// // 매 it function 전에 호출됨 / initialization purposes
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
