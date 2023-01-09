import ContactForm from 'features/contacts/components/ContactForm'
import ContactList from 'features/contacts/components/ContactList'

const ContactListPage = () => {
  return (
    <>
      <h1 className='text-center text-5xl mb-8'>Contact List</h1>

      <h2 className='text-2xl'>Add Contact</h2>
      <hr className='border-2 border-fmPrimaryDesaturatedDarkCyan w-40 mb-8 rounded-full' />
      <ContactForm />

      <h2 className='text-2xl'>Contact List</h2>
      <hr className='border-2 border-fmPrimaryDesaturatedDarkCyan w-40 mb-8 rounded-full' />
      <ContactList />
    </>
  )
}

export default ContactListPage
