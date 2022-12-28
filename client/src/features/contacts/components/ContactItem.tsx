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

  const createdAtFormatted = DateTime.fromISO(createdAt)
    .setZone('Asia/Manila')
    .toLocaleString(DateTime.DATETIME_MED)
  const updatedAtFormatted = DateTime.fromISO(updatedAt)
    .setZone('Asia/Manila')
    .toLocaleString(DateTime.DATETIME_MED)

  // const createdAtFormatted = DateTime.fromISO(createdAt).toFormat(
  //   'yyyy-MM-dd HH:mm:ss'
  // )
  // const updatedAtFormatted = DateTime.fromISO(updatedAt).toFormat(
  //   'yyyy-MM-dd HH:mm:ss'
  // )

  return (
    <tr className='border-b hover:bg-fmNeutralLightGrayishCyanFilter'>
      <td className='break-all'>{_id}</td>
      <td className='break-all'>{name}</td>
      <td className='break-all'>{email}</td>
      <td>{contactNumber}</td>
      <td>{createdAtFormatted}</td>
      <td>{updatedAtFormatted}</td>
      <td className='text-center'>
        <div className='inline-flex rounded-md shadow-sm' role='group'>
          <Button
            innerText='VIEW'
            bgColor='bg-chYellow'
            handleOnClick={() => {
              navigate(`/${_id}`)
            }}
            border='rounded-l-lg border'
          />
          <Button
            innerText='UPDATE'
            bgColor='bg-chGreen'
            handleOnClick={() => {
              dispatch(setInputsForUpdate(contact))
            }}
            border='border-t border-b'
          />
          <Button
            innerText='DELETE'
            bgColor='bg-chPeach'
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
