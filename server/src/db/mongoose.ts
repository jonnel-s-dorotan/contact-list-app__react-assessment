import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const MONGODB_URI_LOCAL: string = `${process.env.MONGODB_URI_LOCAL}`
    mongoose.set('strictQuery', false)

    const conn = await mongoose.connect(MONGODB_URI_LOCAL)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
