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
      unique: true,
      validate: {
        validator: async (email: string) => {
          const numDocs = await Contact.countDocuments({ email })

          return numDocs === 0
        },
        message: 'Email already exists',
      },
    },
    contactNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Contact = model<IContact>('Contact', contactSchema)

export default Contact
