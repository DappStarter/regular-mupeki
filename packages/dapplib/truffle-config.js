require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth remind puppy grace forget equal ghost'; 
let testAccounts = [
"0x47c02bb847ac9cc9a0da85bd450714b04e202d950b09646a4bfd5446df2d69e2",
"0x3a9fb6238a11148fe7fe22fc6b65e9ce50bf029f195dc8b967dc9439e0a6b372",
"0x9120c7ac089a898bd6177b74e84d47c3a83d93220d677359818d3008a7d5017b",
"0x7b7ff0189703b5f5dd512931b8b2fae7a22aba8e3d19788f0f95689a382a1d81",
"0xd65af3457ddd66817ece1a28b23f1ca0544d54ca49764b2301d604ad0f4e222a",
"0x8de483e381bee833ab79b00b02d28033dc06110cd8e3e4fcca1dbad2b62fe60a",
"0x35f8fa3ac14dee2326c9ba10b54dda2d3b948f4241ec46237bef47162f217006",
"0xd2206f9ebc5516e3b1a0d25e77bbaf539d30f29f79db4c66b5018d5496aa683c",
"0xbb80a585e4fc456f6cd6a78b8477e05728dc355ceb8050c39f713cb1048b8977",
"0x30d986cc27e1721ab11b1a61db4bf8c9e428246895e97b45970ba30b1774c742"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
