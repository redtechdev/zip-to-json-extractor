const readZipArchive = require('./utils/zipExtract');
const mergeFiles = require('./utils/mergeFiles');

//Make this a file input or console
// const input = './input/AccountEnquiry_Batch_1.zip';
const input = __dirname + '/input/';

// console.log(readZipArchive(input));

console.log(mergeFiles(input));