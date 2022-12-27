import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

import ContactListPage from './pages/ContactListPage'
import ContactInfoPage from './pages/ContactInfoPage'
import ErrorPage from './pages/HttpErrorNotFoundPage'

const App = () => {
  return (
    <>
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
    </>
  )
}

export default App
