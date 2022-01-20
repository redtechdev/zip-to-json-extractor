import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const dirName =  path.resolve();
const file = "003372430X.json";
const directory = './inputs/ACH/AccountEnquiry/123/good/';

const directoryPath = path.join(dirName, directory);


// console.log({directoryPath})
function readDirAndScan() {
    fs.readdir(directoryPath, function(err, files) {
        if(err) {
            return console.log('Error retrieving files in specified directory ' + err);
        } 
        
        files.forEach(function(file) {
            console.log(readFile(file));
        })
    })    
}



function readFile(file) {
   return fs.readFileSync(directoryPath + '/' + file, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
        //   return
        }

        return data;
      })      
}

