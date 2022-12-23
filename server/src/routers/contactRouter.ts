import { Router } from 'express'

import {
  createContact,
  retrieveAllContacts,
  updateContact,
  deleteContact,
} from '../controllers/contactController'

const router = Router()

router.route('/').get(retrieveAllContacts).post(createContact)

router.route('/:id').patch(updateContact).delete(deleteContact)

export default router
