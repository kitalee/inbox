const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'fresh rapid edit chase foster undo couch trend symptom stove title frozen',
  'https://rinkeby.infura.io/v3/b0f66b69561941dca3e2750c04bde83b'
);
const web3 = new Web3(provider);

const deploy = async() => {

  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result =  await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });
  // to confirm the contract's address
  console.log('contract deployed to', result.options.address);
  // Attempting to deploy from account 0x64B3f06DF7A83d5899e57e330b3416830505F058
  // contract deployed to 0x33B9681915c2808624f0813E4ed7Ebc373C9939a
};
deploy();
