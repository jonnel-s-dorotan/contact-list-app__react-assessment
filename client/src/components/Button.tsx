interface Props {
  type?: 'button' | 'submit'
  bgColor?: string
  innerText: string
  border?: string
  customClass?: string
  handleOnClick?: () => void
}

const Button = ({
  type = 'button',
  bgColor = 'bg-chGreen',
  innerText,
  border = 'rounded-lg',
  customClass,
  handleOnClick,
}: Props) => {
  return (
    <button
      type={type}
      className={`text-fmNeutralVeryDarkGrayishCyan ${bgColor} hover:brightness-90
        font-bold text-md px-3 py-1.5 text-center ${border} ${customClass}`}
      onClick={handleOnClick}
    >
      {innerText}
    </button>
  )
}

export default Button
