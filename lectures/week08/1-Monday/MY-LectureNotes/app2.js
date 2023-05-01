// core modules

const fs = require('fs') // core module that allows us to read & write to file system

let filename = 'sample.txt'

let content = 'Node is pretty awesome'

fs.readFile('preamble.txt', (err, bufferedData) => {
    if(err){
        console.log(err.message);
        return;
    }

    // console.log(`File data: ${bufferedData}`);

    let splitData = bufferedData.toString().split(" ")

    // for(let word of splitData){
    //     console.log(word);
    // }

    let starData = splitData.join('*')
    console.log(starData);
})


// fs.writeFile(filename, content, (error) => {

//     if(error){
//         console.log(error.message);
//     }

//     console.log(`File saved at ${filename}`);
// });


// fs.writeFile(filename, 'I love Node', function (error) {
//     if (error) {
//         console.error(error.message);
//     return;
//     }
//     console.log('File Save: ', filename);
// });