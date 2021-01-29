const express = require("express")
const router = express.Router()

let avengerArray = [
    { id: 1 , name: "Iron Man"},
    { id: 2 , name: "Thor"},
    { id: 3 , name: "Wonder Women"}
]

router.get("/", (req, res) => {
    res.send(avengerArray)
})

// app.get("/api/avengers/1", (req, res) => {
//     res.send(avengerArray[0])
// })

router.get("/:id", (req, res) => {
    let requestedID = req.params.id
    let avenger = avengerArray.find(avenger => avenger.id ==requestedID)
    if (!avenger) {
        return res
            .status(404)
            .send("Avenger you are looking for does not exist on the list")
    }
    res.send(avenger)
})

router.put("/:id", (req, res) => {
    let requestedID = req.params.id
    let avenger = avengerArray.find(avenger => avenger.id ==requestedID)
    if (!avenger) {
        return res
            .status(404)
            .send("Avenger you are looking to update not exist on the list")
    }
    avenger.name = req.body.name
    return res.send(avenger)

})

router.post("/", (req, res) => {
    if (!req.body.name) {
        return res
            .status(400)
            .send("Why you no send all the values in the requests..?")
    }

    let newAvenger = {
        id : avengerArray.length + 1,
        name : req.body.name
    }
    avengerArray.push(newAvenger)
    return res.send(newAvenger)
})

router.delete("/:id", (req, res) => {
    let avenger = avengerArray.find((b) => b.id == req.params.id)
    if (!avenger) {
        res
            .status(400)
            .send("The avenger you are request does not exist on list")
        return
    }

    let indecOfAvenger = avengerArray.indexOf(avenger)
    avengerArray.splice(indecOfAvenger)

    res.send(avenger)
})

module.exports = router