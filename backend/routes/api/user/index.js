const express = require("express")
const userModel = require("../../../models/users")
const transactionModel = require("../../../models/transactions")

const router = express.Router()

router.get("/", async (req, res) => {
    const users = await userModel.find({}).populate("transactions")
    res.json(users)
})
router.post("/", async (req, res) => {
    const newUser = await userModel.create(req.body)
    res.json(newUser)
})
// my update attempt below
router.post("/:id/transaction", async (req, res) => {
    // const updateUser = await userModel.findByIdAndUpdate(req.params.id, req.body)
    // res.json(updateUser)
    // res.sendStatus(200)
    // const existingUser = await userModel.findById(req.params.id);
    // for (let key in req.body) {
    //     existingUser[key] = req.body[key]
    // }
    // await existingUser.save()
    // res.json(existingUser)
    const newTransaction = await transactionModel.create({
        user: req.params.id,
        ...req.body
    })
    res.json(newTransaction)
})
// my update attempt above 

module.exports = router