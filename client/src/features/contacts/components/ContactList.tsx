import { useGetAllContactsQuery } from 'features/contacts/api/contactApiSlice'

import ContactItem from './ContactItem'

const ContactList = () => {
  const { data: contacts, isLoading, isSuccess } = useGetAllContactsQuery()

  return (
    <table className='w-full text-sm text-left text-gray-500 '>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th className='text-center'>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts?.map((contact) => (
          <ContactItem key={contact._id} contact={contact} />
        ))}
      </tbody>
    </table>
  )
}

export default ContactList
