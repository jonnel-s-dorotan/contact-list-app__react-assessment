import { Document } from 'mongoose'

interface IContact extends Document {
  name: string
  email: string
  contactNumber: string
}

export default IContact
