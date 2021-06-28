//THIS is the Database connection
//Database lives in MongoDB
import mongoose from 'mongoose'

let MONGODB_URI =
  process.env.PROD_MONGODB ||
  'mongodb://127.0.0.1:27017/itemsDevDatabase'

//uncomment to debug Mongoose queries
// mongoose.set('debug', true)

mongoose.set('useCreateIndex', true)

mongoose.set("returnOriginal", false)

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .catch((error) => console.error('Error connecting to the database!', error.message))

mongoose.connection.on('disconnected', () => console.log(`Disconnected from MongoDB`))

mongoose.connection.on('error', (error) => console.error(`MongoDB connection error: ${error}`))

//export the connection
export default mongoose.connection