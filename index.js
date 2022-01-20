const readZipArchive = require('./utils/zipExtract');

//Make this a file input or console
const input = './input/AccountEnquiry/AccountEnquiry_Batch_1.zip';

console.log(readZipArchive(input));