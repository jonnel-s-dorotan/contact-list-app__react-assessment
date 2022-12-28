import ContactList from 'features/contacts/components/ContactList'
import ContactForm from 'features/contacts/components/ContactForm'

const ContactListPage = () => {
  return (
    <>
      <h1 className='text-2xl'>Add Contact</h1>
      <hr className='border-2 border-fmPrimaryDesaturatedDarkCyan w-40 mb-8 rounded-full' />
      <ContactForm />

      <h1 className='text-2xl'>Contact List</h1>
      <hr className='border-2 border-fmPrimaryDesaturatedDarkCyan w-40 mb-8 rounded-full' />
      <ContactList />
    </>
  )
}

export default ContactListPage
