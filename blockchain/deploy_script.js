var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
web3.eth.accounts

code = fs.readFileSync('blockchain/voting.sol').toString()
solc = require('solc')
compiledCode = solc.compile(code)
abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
VotingContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':Voting'].bytecode
deployedContract = VotingContract.new(['Rahul', 'Arvind', 'Narendra', 'Rajnath', 'Piyush', 'Smriti'], {
    data: byteCode,
    from: web3.eth.accounts[0],
    gas: 4700000
});
deployedContract.address
JSON.stringify(abiDefinition)
contractInstance = VotingContract.at(deployedContract.address)