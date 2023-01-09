import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import { DateTime } from 'luxon'

import IContact from 'types/contactType'
import { useAppDispatch } from 'app/hooks'
import { setInputsForUpdate } from 'features/global/api/globalSlice'
import { useDeleteContactMutation } from 'features/contacts/api/contactApiSlice'

import Button from 'components/Button'

interface Props {
  index: number
  contact: IContact
}

const ContactItem = ({ index, contact }: Props) => {
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [deleteContact] = useDeleteContactMutation()

  const { _id, name, email, contactNumber, createdAt, updatedAt } = contact

  const getDateTimeString = (datetime: string) =>
    DateTime.fromISO(datetime)
      .setZone('Asia/Manila')
      .toLocaleString(DateTime.DATETIME_MED)

  const createdAtFormatted = getDateTimeString(createdAt)
  const updatedAtFormatted = getDateTimeString(updatedAt)

  const handleOnDeleteContact = async () => {
    await deleteContact(_id)

    closeModal()
  }

  const openModal = () => setModalDeleteIsOpen(true)
  const closeModal = () => setModalDeleteIsOpen(false)

  const modalCustomStyles = {
    content: {
      maxWidth: '32rem',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  const tableStripedRow = index % 2 === 0 ? 'bg-gray-100' : ''

  return (
    <>
      <tr
        className={`border-b ${tableStripedRow} hover:bg-fmPrimaryDesaturatedDarkCyan hover:text-fmNeutralLightGrayishCyanFilter`}
      >
        <td className='px-4 py-2'>{_id}</td>
        <td className='break-all px-4 py-2'>{name}</td>
        <td className='break-all px-4 py-2'>{email}</td>
        <td className='px-4 py-2'>{contactNumber}</td>
        <td className='px-4 py-2'>{createdAtFormatted}</td>
        <td className='px-4 py-2'>
          {updatedAtFormatted === createdAtFormatted
            ? 'N/A'
            : updatedAtFormatted}
        </td>
        <td className='px-4 py-2 bg-slate-50'>
          <div
            className='inline-flex rounded-md shadow-sm'
            role='button'
            aria-label='action buttons'
          >
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
              handleOnClick={openModal}
              border='rounded-r-md border'
            />
          </div>
        </td>
      </tr>

      <Modal
        isOpen={modalDeleteIsOpen}
        onRequestClose={closeModal}
        style={modalCustomStyles}
        contentLabel='Delete Modal'
        ariaHideApp={false}
      >
        <h2 className='text-fmNeutralVeryDarkGrayishCyan text-xl font-semibold mb-4'>
          Delete Contact
        </h2>

        <p className='text-fmNeutralVeryDarkGrayishCyan mb-8'>
          Are you sure you want to delete this contact? This will remove the
          contact and can't be undone.
        </p>

        <div className='flex justify-between'>
          <Button
            innerText='NO, CANCEL'
            bgColor='bg-chYellow'
            handleOnClick={closeModal}
          />
          <Button
            innerText='YES, DELETE'
            bgColor='bg-chPeach'
            handleOnClick={handleOnDeleteContact}
          />
        </div>
      </Modal>
    </>
  )
}

export default ContactItem
