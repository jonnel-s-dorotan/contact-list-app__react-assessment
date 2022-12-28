interface props {
  type?: 'button' | 'submit'
  innerText: string
  border?: string
  customClass?: string
  handleOnClick?: () => void
}

const Button = ({
  type = 'button',
  innerText,
  border = 'rounded-lg',
  customClass,
  handleOnClick,
}: props) => {
  return (
    <button
      type={type}
      className={`text-white bg-blue-700 hover:bg-blue-800
        focus:ring-4 focus:outline-none focus:ring-blue-300
        font-medium text-sm px-5 py-2.5 text-center ${border} ${customClass}`}
      onClick={handleOnClick}
    >
      {innerText}
    </button>
  )
}

export default Button
