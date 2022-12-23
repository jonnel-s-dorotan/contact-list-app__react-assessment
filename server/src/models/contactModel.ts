import { Schema, model } from 'mongoose'
import IContact from '../interfaces/contactInterface'

const contactSchema: Schema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<IContact>('Contact', contactSchema)
