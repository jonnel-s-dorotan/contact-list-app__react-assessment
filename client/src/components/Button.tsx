interface props {
  type?: 'button' | 'submit'
  bgColor?: string
  innerText: string
  border?: string
  customClass?: string
  handleOnClick?: () => void
}

const Button = ({
  type = 'button',
  bgColor = 'bg-chSage',
  innerText,
  border = 'rounded-lg',
  customClass,
  handleOnClick,
}: props) => {
  return (
    <button
      type={type}
      className={`text-fmNeutralVeryDarkGrayishCyan ${bgColor} hover:bg-fmPrimaryDesaturatedDarkCyan
        font-medium text-sm px-5 py-2.5 text-center ${border} ${customClass}`}
      onClick={handleOnClick}
    >
      {innerText}
    </button>
  )
}

export default Button
