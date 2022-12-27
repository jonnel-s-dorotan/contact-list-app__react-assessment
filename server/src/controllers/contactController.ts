import { RequestHandler } from 'express'

import Contact from '../models/contactModel'

const createContact: RequestHandler = async (req, res, next) => {
  try {
    const body = req.body

    const contact = new Contact(body)

    await contact.save()

    res.status(201).send({ contact })
  } catch (error) {
    res.status(400).send(error)
  }
}

const retrieveAllContacts: RequestHandler = async (req, res, next) => {
  try {
    const contacts = await Contact.find()

    res.status(200).send(contacts)
  } catch (error) {
    res.status(400).send(error)
  }
}

const getContact: RequestHandler = async (req, res, next) => {
  const _id = req.params.id

  try {
    const contact = await Contact.find({ _id })

    res.status(200).send(contact)
  } catch (error) {
    res.status(400).send(error)
  }
}

const updateContact: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id
    const body = req.body

    const contact = await Contact.findByIdAndUpdate(id, body, { new: true })

    res.status(200).send(contact)
  } catch (error) {
    res.status(400).send(error)
  }
}

const deleteContact: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id

    const contact = await Contact.findByIdAndDelete(id)

    if (!contact) throw new Error()

    res.status(200).send(contact)
  } catch (error) {
    res.status(400).send(error)
  }
}

export {
  createContact,
  retrieveAllContacts,
  getContact,
  updateContact,
  deleteContact,
}
