import mongoose from "mongoose"

const Connection = async () => {
    const URL = `mongodb+srv://admin:admin@cluster0.wbj0w.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(URL).catch(error => console.log(error.reason))

    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

    mongoose.connection.once('open', () => {
        console.log('MongoDB up')
    })
        .on('error', error => {
            throw new Error('Database error')
        })

}
export default Connection
