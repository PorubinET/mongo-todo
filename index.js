
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin12345@cluster0.dsbkl.mongodb.net/todo-BD?retryWrites=true&w=majority', {
            // onAfterSetupMiddleware,
            // onBeforeSetupMiddleware
        })

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (err) {console.error(err)}
}

start()







