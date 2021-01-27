const express = require('express')
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send("Hellow world")
})

app.listen(PORT, () => {
    console.log("Started listening on port: " + PORT)
})