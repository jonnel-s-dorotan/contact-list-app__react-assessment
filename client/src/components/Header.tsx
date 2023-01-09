import { Link } from 'react-router-dom'

import LogoReactJS from 'assets/images/LogoReactJS.png'

const Header = () => {
  return (
    <nav className='text-fmNeutralLightGrayishCyanFilter bg-fmPrimaryDesaturatedDarkCyan px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-fmNeutralVeryDarkGrayishCyan'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <Link to='/' className='flex items-center'>
          <img
            src={LogoReactJS}
            className='h-6 mr-3 sm:h-9 logo'
            alt='ReactJS Logo'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Contact List Application
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Header
