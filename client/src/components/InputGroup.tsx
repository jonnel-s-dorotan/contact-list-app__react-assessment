interface Props {
  type?: string
  placeholder: string
  register: any
  registerParam: string
  error?: string
}

const InputGroup = ({
  type = 'text',
  placeholder,
  register,
  registerParam,
  error = '',
}: Props) => {
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
    className = `bg-red-50 border border-red-600 text-red-600
      placeholder-chPeach text-sm rounded-lg focus:ring-chPeach
      focus:border-chPeach block w-full p-2.5`

  return (
    <div>
      <label
        htmlFor={registerParam}
        className='block mb-2 text-lg text-fmNeutralVeryDarkGrayishCyan font-bold capitalize'
      >
        {labelText}
      </label>
      <input
        type={type}
        className={className}
        id={registerParam}
        placeholder={placeholder}
        autoComplete='on'
        {...register(registerParam)}
      ></input>
      <p className='text-sm text-red-600'>{error}</p>
    </div>
  )
}

export default InputGroup
