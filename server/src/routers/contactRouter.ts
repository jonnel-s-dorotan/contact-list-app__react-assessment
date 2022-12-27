import { Router } from 'express'

import {
  createContact,
  retrieveAllContacts,
  getContact,
  updateContact,
  deleteContact,
} from '../controllers/contactController'

const router = Router()

router.route('/').get(retrieveAllContacts).post(createContact)

router.route('/:id').get(getContact).patch(updateContact).delete(deleteContact)

export default router
