import mongoose from "mongoose"
import autoIncrement from "mongoose-auto-increment"

const productSchema = mongoose.Schema({
    name:'',
    category:'',
    description:'',
    cost:'',
    note_general:'',
    note_special:'',
})
autoIncrement.initialize(mongoose.connection)
productSchema.plugin(autoIncrement.plugin, 'product')
const product = mongoose.model('product', productSchema)

export default product
