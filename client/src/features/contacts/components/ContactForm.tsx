import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Modal from 'react-modal'

import IContact from 'types/contactType'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { setInputsForCreate } from 'features/global/api/globalSlice'
import {
  useCreateContactMutation,
  useUpdateContactMutation,
} from 'features/contacts/api/contactApiSlice'

import InputGroup from 'components/InputGroup'
import Button from 'components/Button'

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      'must be valid person name'
    )
    .min(3, 'must be at least 3 characters')
    .max(100, '100 characters limit reached')
    .required(),
  email: yup.string().email().required(),
  contactNumber: yup
    .string()
    .matches(/^09\d{9}$/, 'must start with "09" and 11 digits')
    .min(11, 'must be exactly 11 digits')
    .max(11, 'must be exactly 11 digits')
    .required(),
})

const ContactForm = () => {
  const [invalidInputErrMsg, setInvalidInputErrMsg] = useState('')
  const [modalInvalidInputIsOpen, setModalInvalidInputIsOpen] = useState(false)

  const { isUpdate, contactDetails } = useAppSelector(
    (state) => state.globalState
  )
  const dispatch = useAppDispatch()

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
  } = useForm<IContact>({
    resolver: yupResolver(schema),
  })

  const [createContact] = useCreateContactMutation()
  const [updateContact] = useUpdateContactMutation()

  useEffect(() => {
    setFocus('name')
    reset()

    if (!isUpdate) return

    const { _id, name, email, contactNumber } = contactDetails

    setValue('_id', _id)
    setValue('name', name)
    setValue('email', email)
    setValue('contactNumber', contactNumber)
  }, [isUpdate, contactDetails, setValue, setFocus, reset])

  const onSubmit = handleSubmit(async (data) => {
    if (isUpdate) {
      const result: any = await updateContact(data)

      let errorMessage = ''

      try {
        if (result.error.data.codeName === 'DuplicateKey')
          // UPDATE error message
          errorMessage =
            'Contact validation failed: email: Email already exists'

        setInvalidInputErrMsg(errorMessage)

        openModal()
      } catch (error) {
        dispatch(setInputsForCreate())

        reset()
      }
    } else {
      const result: any = await createContact(data)

      try {
        const errorMessage = result.error.data.message // INSERT error message

        setInvalidInputErrMsg(errorMessage)

        openModal()
      } catch (error) {
        reset()
      }
    }
  })

  const handleCancelOnClick = () => dispatch(setInputsForCreate())

  const openModal = () => setModalInvalidInputIsOpen(true)
  const closeModal = () => setModalInvalidInputIsOpen(false)

  const modalCustomStyles = {
    content: {
      minWidth: '32rem',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  return (
    <form
      className='grid gap-6 p-10 mb-20 lg:w-1/2 bg-slate-50 border-2 border-fmNeutralVeryDarkGrayishCyan rounded-xl shadow-lg'
      onSubmit={onSubmit}
    >
      <InputGroup
        placeholder='Enter your name.'
        register={register}
        registerParam='name'
        error={errors.name?.message}
      />
      <InputGroup
        placeholder='Enter your email address.'
        register={register}
        registerParam='email'
        error={errors.email?.message}
      />
      <InputGroup
        placeholder='Enter your contact Number.'
        register={register}
        registerParam='contactNumber'
        error={errors.contactNumber?.message}
      />

      <div className='flex justify-between' role='button'>
        <Button
          type='submit'
          innerText={isUpdate ? 'UPDATE' : 'ADD'}
          customClass='lg:w-40'
        />
        {isUpdate && (
          <Button
            type='button'
            bgColor='bg-chPeach'
            innerText='CANCEL'
            customClass='lg:w-40'
            handleOnClick={handleCancelOnClick}
          />
        )}
      </div>

      <Modal
        isOpen={modalInvalidInputIsOpen}
        onRequestClose={closeModal}
        style={modalCustomStyles}
        contentLabel='Delete Modal'
        ariaHideApp={false}
      >
        <h2 className='text-fmNeutralVeryDarkGrayishCyan text-xl font-semibold mb-4'>
          Input Validation
        </h2>

        <p className='text-fmNeutralVeryDarkGrayishCyan mb-8'>
          {invalidInputErrMsg}
        </p>

        <div className='flex justify-center'>
          <Button
            innerText='OK'
            bgColor='bg-chYellow'
            handleOnClick={closeModal}
            customClass='lg:w-40'
          />
        </div>
      </Modal>
    </form>
  )
}

export default ContactForm
