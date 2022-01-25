const jsonConcat = require('json-concat');
const fs = require('graceful-fs');
const path = require('path')

const mergeFiles = async (dirPath) => {

    const newEntries = [];
    const outputPath = './output/testfile.json';

    fs.readdirSync(dirPath).forEach((file) => {
        console.log({file})
        if(path.extname(file) == '.json') {
            const buffer = fs.readFileSync(dirPath + '/' + file);
            const fileContent = buffer.toString();

            newEntries.push(JSON.stringify(JSON.parse(fileContent)));

            // files.push(dirPath + '/' + file);
        }
    });

    fs.writeFile(outputPath, '[' + newEntries.join(',') + ']', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });      


    // jsonConcat({
    //     src: files,
    //     dest: "./output/testfile.json"
    // }, (json) => console.log(json));
}

module.exports = mergeFiles;