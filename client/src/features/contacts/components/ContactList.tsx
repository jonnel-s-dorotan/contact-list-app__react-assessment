import { useGetAllContactsQuery } from 'features/contacts/api/contactApiSlice'

import ContactItem from './ContactItem'

const ContactList = () => {
  const { data: contacts } = useGetAllContactsQuery()

  return (
    <div className='bg-slate-50 overflow-x-auto relative border-2 border-fmNeutralVeryDarkGrayishCyan shadow-lg rounded-lg p-10'>
      <table className='w-full text-sm text-left text-gray-500 border-separate [border-spacing:0.5rem]'>
        <thead className='text-xs text-fmNeutralVeryDarkGrayishCyan uppercase bg-gray-50'>
          <tr className='text-lg'>
            <th>ID</th>
            <th className='w-1/6'>Name</th>
            <th className='w-1/6'>Email</th>
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
    </div>
  )
}

export default ContactList
