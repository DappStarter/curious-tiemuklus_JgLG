require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note spider coach hope prize swallow tumble'; 
let testAccounts = [
"0x37d095c4b641e747b657fb20e558737d21cff58b7ba04e51149650b7e7899377",
"0xe1699bdcd94cb61a7beaabfdbfa3fed29153ea21a9eb5eff62758aa9ab5eafd4",
"0x4e5e0690911af1a544e0581ae344c709017e1d94d81173b9a7495d7dcd0f595f",
"0x6507ae3989aa7454f6a9a966bdbfe6a721bb1042e1fbd152100dbfb0efa8f35c",
"0xb32473d89750998d57e28b111f2dde2940162cc0c6b3d08484fa457326755002",
"0x9b84cb09a1a004688e82865f8adc25d96ea885111c6205ca0439077c552f66ef",
"0x737db25ccf1c231ec3a26b39b93e41cb76f2b50a67a6b9ae37366784e24a8959",
"0x241de1cc3afc020631fc7b932d36766cc382018ea31cf91292c437465e544ccd",
"0x1773867fa76f13ce8b734ec7ba30583f0a1011a19ae42be1c77008c532fa1a66",
"0x870c8d04bfbc5f728ac9cd4e0e3b42caf8bedccfe925a83e1169d94b571b12d6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


