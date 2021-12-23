const {Shema, model, Types, Schema} = require('mongoose')
const schema = new Schema({
    // title: {title: String, required: false},
    // done: {title: Boolean, required: false},
    todos: [{type: Types.ObjectId, ref: 'Todo'}]
})

module.exports = model('Task', schema)