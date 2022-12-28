import { useNavigate } from 'react-router-dom'

import Button from 'components/Button'

const HttpErrorNotFoundPage = () => {
  const navigate = useNavigate()

  const handleBackOnClick = () => navigate('/')

  return (
    <div className='p-10 mb-20 lg:w-1/2 bg-slate-50 border-2 rounded-xl break-all'>
      <p>
        <span className='font-extrabold'>Error 404: Page Not Found!</span>
      </p>

      <hr className='border-2 border-fmPrimaryDesaturatedDarkCyan w-40 mb-8 rounded-full' />

      <p>The page you requested could not found</p>

      <Button
        innerText='BACK TO HOMEPAGE'
        handleOnClick={handleBackOnClick}
        customClass='mt-8'
      />
    </div>
  )
}

export default HttpErrorNotFoundPage
