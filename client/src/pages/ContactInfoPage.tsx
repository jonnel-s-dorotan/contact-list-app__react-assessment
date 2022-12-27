import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useGetContactQuery } from '../features/contacts/api/contactApiSlice'

const ContactInfoPage = () => {
  const navigate = useNavigate()

  const { _id } = useParams()

  const { data: contacts, isSuccess } = useGetContactQuery(_id)

  useEffect(() => {
    if (!contacts) {
      navigate('/HttpErrorNotFoundPage', { replace: true })
      return
    }
  }, [contacts, navigate])

  return (
    <>
      <h1>ContactInfoPage</h1>
      {contacts?.map((contact) => {
        return (
          isSuccess && (
            <div key={contact._id}>
              <p>ID: {contact._id}</p>
              <p>Name: {contact.name}</p>
              <p>Email: {contact.email}</p>
              <p>Contact: {contact.contactNumber}</p>
            </div>
          )
        )
      })}
    </>
  )
}

export default ContactInfoPage
