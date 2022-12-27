import React from 'react'
import ContactList from '../features/contacts/components/ContactList'
import CreateContact from '../features/contacts/components/CreateContact'

const ContactListPage = () => {
  return (
    <>
      <CreateContact />
      <ContactList />
    </>
  )
}

export default ContactListPage
