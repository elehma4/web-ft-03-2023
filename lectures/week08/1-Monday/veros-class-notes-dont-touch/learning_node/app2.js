
//core modules

const fs = require('fs'); //core node module that allows us to read and write to file system 

const express = require('express');

// const http = require('http');

let fileName = "sample.txt"

let content = "Node is pretty awesome"

// fs.writeFile(fileName, content, (error)=>{

//     if(error){
//         console.log(error.message);
//     }

//     console.log(`File saved at ${fileName}`);
// })


fs.readFile('preamble.txt', (err, bufferedData)=>{

    if(err){
        console.log(err.message);
        return;
    }

    // console.log(`File DAta: ${bufferedData.toString()}`);

    let data = bufferedData.toString().split(" ")

    // for( let word of data){

    //     console.log(word);
    // }

    let starData = data.join('*')

    console.log(starData);

})




