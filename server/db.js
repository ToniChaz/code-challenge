import mongoose from 'mongoose'

const Mongo = mongoose.connect('mongodb://localhost/billin')
Mongo.set('debug', true)

export default Mongo
