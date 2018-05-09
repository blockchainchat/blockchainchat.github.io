// Blockchain chat contract address
const blockchainChatAddress = "0xAbeccD6a8556E6662014B205B6cbc165994FF7CE";
// Blockchain chat contract ABI
const blockchainChatABI = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"members","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"messages","outputs":[{"name":"from","type":"address"},{"name":"message","type":"string"},{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"timeCalled","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"updateName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalMessages","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"string"}],"name":"newMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];