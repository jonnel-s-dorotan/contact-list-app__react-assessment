import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useGetContactQuery } from 'features/contacts/api/contactApiSlice'

import Button from 'components/Button'

const ContactInfoPage = () => {
  const navigate = useNavigate()

  const { _id } = useParams()

  const { data: contacts, isFetching } = useGetContactQuery(_id)

  useEffect(() => {
    if (!isFetching && !contacts) {
      navigate('/HttpErrorNotFoundPage', { replace: true })
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBackOnClick = () => navigate(-1)

  return (
    <div className='p-10 mb-20 lg:w-1/2 bg-slate-50 border-2 rounded-xl break-all'>
      <h1 className='text-center text-5xl mb-8'>Contact Info</h1>

      {contacts?.map((contact) => {
        return (
          <div key={contact._id}>
            <div>
              <p>
                <span className='font-extrabold'>ID:</span> {contact._id}
              </p>

              <hr className='border-2 border-fmPrimaryDesaturatedDarkCyan w-40 mb-8 rounded-full' />

              <p>
                <span className='font-extrabold'>Name:</span> {contact.name}
              </p>
              <p>
                <span className='font-extrabold'>Email:</span> {contact.email}
              </p>
              <p>
                <span className='font-extrabold'>Contact:</span>{' '}
                {contact.contactNumber}
              </p>
            </div>
          </div>
        )
      })}
      <Button
        innerText='BACK'
        bgColor='bg-chYellow'
        handleOnClick={handleBackOnClick}
        customClass='mt-8 lg:w-40'
      />
    </div>
  )
}

export default ContactInfoPage
