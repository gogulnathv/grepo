var express=require('express');
var app=express();
let REQUEST_NUMBER = 0;

let asyncDatabaseFetch = () => {
    return new Promise((resolve, reject) => {
        // Artifically creating 15 seconds database operation!
        setTimeout(() => {
            resolve('First request!');
        }, 15000);
    })
} 

app.get('/getdata', (req, res) => {
    console.log('Got request on: \'/getdata\'')
    REQUEST_NUMBER++;
    if(REQUEST_NUMBER == 1) {
        asyncDatabaseFetch().then((val) => {
            res.send(val);
        })
    } else {
        res.send("No data for you!");
    }
});