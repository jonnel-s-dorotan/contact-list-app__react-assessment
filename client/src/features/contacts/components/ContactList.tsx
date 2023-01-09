import { useGetAllContactsQuery } from 'features/contacts/api/contactApiSlice'

import ContactItem from './ContactItem'

const ContactList = () => {
  const { data: contacts } = useGetAllContactsQuery()

  return (
    <div className='bg-slate-50 overflow-x-auto relative border-2 border-fmNeutralVeryDarkGrayishCyan shadow-lg rounded-lg p-10 mb-32'>
      <table className='w-full text-sm text-left text-gray-500'>
        {/* border-separate [border-spacing:0.5rem] */}
        <thead className='text-xs text-fmNeutralVeryDarkGrayishCyan bg-gray-50'>
          <tr className='text-xl'>
            <th className='px-4 py-2 w-1/12'>ID</th>
            <th className='px-4 py-2 w-1/6'>Name</th>
            <th className='px-4 py-2 w-1/6 '>Email</th>
            <th className='px-4 py-2'>Contact</th>
            <th className='px-4 py-2'>Created At</th>
            <th className='px-4 py-2'>Updated At</th>
            <th className='px-4 py-2 text-center'>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts?.map((contact, index) => (
            <ContactItem key={contact._id} index={index} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContactList
