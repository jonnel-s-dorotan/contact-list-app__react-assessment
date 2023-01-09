import { useNavigate } from 'react-router-dom'

import Button from 'components/Button'

const HttpErrorNotFoundPage = () => {
  const navigate = useNavigate()

  const handleBackOnClick = () => navigate('/')

  return (
    <div className='p-10 mb-20 lg:w-1/2 bg-slate-50 border-2 rounded-xl break-all'>
      <h1 className='text-center text-5xl mb-8'>404</h1>

      <p>
        <span className='font-extrabold'>Page Not Found</span>
      </p>

      <hr className='border-2 border-fmPrimaryDesaturatedDarkCyan w-40 mb-8 rounded-full' />

      <p>The page you requested could not found</p>

      <Button
        innerText='BACK TO HOME'
        handleOnClick={handleBackOnClick}
        customClass='mt-8'
      />
    </div>
  )
}

export default HttpErrorNotFoundPage
