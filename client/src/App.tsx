import { Routes, Route, Navigate } from 'react-router-dom'

import 'App.css'

import ContactListPage from 'pages/ContactListPage'
import ContactInfoPage from 'pages/ContactInfoPage'
import HttpErrorNotFoundPage from 'pages/HttpErrorNotFoundPage'

const App = () => {
  return (
    <div className='min-h-screen bg-fmNeutralLightGrayishCyanBG'>
      <div className='container mx-auto p-12'>
        <Routes>
          <Route path='/'>
            <Route index element={<ContactListPage />} />
            <Route path=':_id' element={<ContactInfoPage />} />
          </Route>
          <Route
            path='/HttpErrorNotFoundPage'
            element={<HttpErrorNotFoundPage />}
          />
          <Route
            path='*'
            element={<Navigate to='/HttpErrorNotFoundPage' replace />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
