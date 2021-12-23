const {Router} = require('express')
const router = Router()
const Task = require('../models/Task')

router.post('/todo'), async (req, res) => {
    try {
        const { title } = req.body

        const isTask = await Task.findOne({title})

        if(isTask) {
            return res.status(300).json({message: 'Такая таска уже есть'})
        }

        const task = new Task({
            task
        })

        await task.save()

        res.status(201).json({message: 'Таска создана'})

    } catch(error) {
        console.log(error)
    }
}

module.exports = router