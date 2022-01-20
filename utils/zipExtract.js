const AdmZip = require("adm-zip");
const fs = require('graceful-fs');
var util = require('util');

const readZipArchive = async (filepath) => {
  try {
    const zip = new AdmZip(filepath);
    const allEntries = zip.getEntries();
    let count = 0;

    // const fileName = new Date().toUTCString();
    // console.log({fileName});
    const outputPath = './output/somefile.json';

    let newEntries = [];

    for (const zipEntry of allEntries) {
      let entry = zipEntry.getData().toString();

      if(entry) {
        newEntries.push(entry);
      }
    }

    fs.writeFile(outputPath, '[' + newEntries.toString() + ']', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });      
    console.log('hello')

  } catch (e) {
    console.log(`Something went wrong. ${e}`);
  }
}

module.exports = readZipArchive;