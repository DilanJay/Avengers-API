const express = require('express')
const authentication = require("./middleware/authentication")
const emailSending = require("./middleware/emailSending")

const avengers = require("./routes/avengers")
const home = require("./routes/home")

const app = express()
const PORT = 3000

app.use(express.json()) //Used a express inbuilt milddleware to parse JSON
app.use(authentication)
app.use(emailSending)
app.use("/api/avengers", avengers)
app.use("/", home)

app.listen(PORT, () => {
    console.log("Started listening on port: " + PORT)
})