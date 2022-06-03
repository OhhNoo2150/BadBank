const express = require("express")
const userModel = require("../../../models/users")

const router = express.Router()

router.get("/", async (req, res) => {
    const users = await userModel.find({})
    res.json(users)
})
router.post("/", async (req, res) => {
    const newUser = await userModel.create(req.body)
    res.json(newUser)
})

module.exports = router