import React from 'react'
import { useGetAllContactsQuery } from '../api/contactApiSlice'

const ContactList = () => {
  const { data: contacts, isLoading, isSuccess } = useGetAllContactsQuery()

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contacts?.map((contact) => {
          return (
            <tr key={contact._id}>
              <td>{contact._id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.contactNumber}</td>
              <td></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ContactList
