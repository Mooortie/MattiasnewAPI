const express =  require('express')
const app = express()
const PORT = process.env.PORT || 3000
const https = require('https')

const instrument  = {instruments: [
{"name": "Guitar", "kind":"String instrument"},
{"name": "Piano", "kind":"PlingPlong"},
{"name": "Violin", "kind":"Stroke instrument"}
] }

app.get("/joke", (req,res) => {
    https.get("https://api.chucknorris.io/jokes/random", (respone) =>{
        respone.on('data',(data) => {
            res.send(JSON.parse(data))
        })
    }).on("error",(error) =>{
        console.log("There was an error" + error.message)
    })
})

app.get("/instruments", (req,res)=>{
    res.send(instrument)
})

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT, () =>{
    console.log("Listen to port " + PORT)
})