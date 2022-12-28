interface props {
  type?: string
  placeholder: string
  register: any
  registerParam: string
  error?: string
}

const Input = ({
  type = 'text',
  placeholder,
  register,
  registerParam,
  error = '',
}: props) => {
  // const { onChange, onBlur, name, ref } = register(registerParam);

  let labelText = ''

  switch (register(registerParam).name) {
    case 'contactNumber':
      labelText = 'Contact Number'
      break
    default:
      labelText = register(registerParam).name
      break
  }

  let className = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`

  if (error)
    className = `bg-red-50 border border-chPeach text-chPeach
      placeholder-chPeach text-sm rounded-lg focus:ring-chPeach
      focus:border-chPeach block w-full p-2.5`

  return (
    <div>
      <label className='block mb-2 text-sm font-medium text-fmNeutralVeryDarkGrayishCyan capitalize'>
        {labelText}
      </label>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        autoComplete='off'
        {...register(registerParam)}
      ></input>
      <p className='text-sm text-chPeach'>{error}</p>
    </div>
  )
}

export default Input
