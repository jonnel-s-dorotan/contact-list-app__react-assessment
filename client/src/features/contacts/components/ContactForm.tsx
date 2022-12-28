import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import IContact from 'types/contactType'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { setInputsForCreate } from 'features/global/api/globalSlice'
import {
  useCreateContactMutation,
  useUpdateContactMutation,
} from 'features/contacts/api/contactApiSlice'

import Input from 'components/Input'
import Button from 'components/Button'

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
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

const CreateContact = () => {
  const { isUpdate, contactDetails } = useAppSelector(
    (state) => state.globalState
  )
  const dispatch = useAppDispatch()

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContact>({
    resolver: yupResolver(schema),
  })

  const [createContact, { isSuccess, isError }] = useCreateContactMutation()
  const [updateContact] = useUpdateContactMutation()

  useEffect(() => {
    if (!isUpdate) {
      reset()

      return
    }

    const { _id, name, email, contactNumber } = contactDetails

    setValue('_id', _id)
    setValue('name', name)
    setValue('email', email)
    setValue('contactNumber', contactNumber)
  }, [isUpdate, setValue, contactDetails, reset])

  const onSubmit = handleSubmit(async (data) => {
    try {
      let result

      if (isUpdate) {
        result = await updateContact(data)

        dispatch(setInputsForCreate())
      } else {
        result = await createContact(data)
      }

      console.log({ isSuccess, isError, result })
    } catch (error) {
      console.log(error)
    } finally {
      reset()
    }
  })

  const handleCancelOnClick = () => {
    dispatch(setInputsForCreate())
  }

  return (
    <form className='grid gap-6 mb-20 w-1/2' onSubmit={onSubmit}>
      <Input
        placeholder='Enter your name.'
        register={register}
        registerParam='name'
        error={errors.name?.message}
      />
      <Input
        placeholder='Enter your email address.'
        register={register}
        registerParam='email'
        error={errors.email?.message}
      />
      <Input
        placeholder='Enter your contact Number.'
        register={register}
        registerParam='contactNumber'
        error={errors.contactNumber?.message}
      />

      <div className='flex justify-between'>
        <Button
          type='submit'
          innerText={isUpdate ? 'Update' : 'Add'}
          customClass='w-40'
        />
        {isUpdate && (
          <Button
            type='button'
            innerText='Cancel'
            customClass='w-40'
            handleOnClick={handleCancelOnClick}
          />
        )}
      </div>
    </form>
  )
}

export default CreateContact
