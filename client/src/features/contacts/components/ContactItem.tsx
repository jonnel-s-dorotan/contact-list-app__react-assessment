import { useNavigate } from 'react-router-dom'
import { DateTime } from 'luxon'

import IContact from 'types/contactType'
import { useAppDispatch } from 'app/hooks'
import { setInputsForUpdate } from 'features/global/api/globalSlice'
import { useDeleteContactMutation } from 'features/contacts/api/contactApiSlice'

import Button from 'components/Button'

interface props {
  contact: IContact
}

const ContactItem = ({ contact }: props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [deleteContact] = useDeleteContactMutation()

  const { _id, name, email, contactNumber, createdAt, updatedAt } = contact

  const createdAtFormatted = DateTime.fromISO(createdAt).toFormat(
    'yyyy-MM-dd HH:mm:ss'
  )
  const updatedAtFormatted = DateTime.fromISO(updatedAt).toFormat(
    'yyyy-MM-dd HH:mm:ss'
  )

  return (
    <tr className='bg-white border-b  hover:bg-gray-50'>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{contactNumber}</td>
      <td>{createdAtFormatted}</td>
      <td>{updatedAtFormatted}</td>
      <td className='text-center'>
        <div className='inline-flex rounded-md shadow-sm' role='group'>
          <Button
            innerText='VIEW'
            handleOnClick={() => {
              navigate(`/${_id}`)
            }}
            border='rounded-l-lg border'
          />
          <Button
            innerText='UPDATE'
            handleOnClick={() => {
              dispatch(setInputsForUpdate(contact))
            }}
            border='border-t border-b'
          />
          <Button
            innerText='DELETE'
            handleOnClick={async () => {
              await deleteContact(_id)
            }}
            border='rounded-r-md border'
          />
        </div>
      </td>
    </tr>
  )
}

export default ContactItem
