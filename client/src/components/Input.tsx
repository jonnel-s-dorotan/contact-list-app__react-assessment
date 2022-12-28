interface props {
  type?: string
  placeholder: string
  register: any
  registerParam: string
}

const Input = ({
  type = 'text',
  placeholder,
  register,
  registerParam,
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

  return (
    <div>
      <label className='block mb-2 text-sm font-medium text-gray-900 capitalize'>
        {labelText}
      </label>
      <input
        type={type}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        placeholder={placeholder}
        autoComplete='off'
        {...register(registerParam)}
      ></input>
    </div>
  )
}

export default Input
