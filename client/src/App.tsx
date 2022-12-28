import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

import ContactListPage from './pages/ContactListPage'
import ContactInfoPage from './pages/ContactInfoPage'
import ErrorPage from './pages/HttpErrorNotFoundPage'

const App = () => {
  return (
    <div className='container p-8'>
      <Routes>
        <Route path='/'>
          <Route index element={<ContactListPage />} />
          <Route path=':_id' element={<ContactInfoPage />} />
        </Route>
        <Route path='/HttpErrorNotFoundPage' element={<ErrorPage />} />
        <Route
          path='*'
          element={<Navigate to='/HttpErrorNotFoundPage' replace />}
        />
      </Routes>
    </div>
  )
}

export default App
