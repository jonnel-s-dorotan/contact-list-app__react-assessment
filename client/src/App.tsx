import { Routes, Route, Navigate } from 'react-router-dom'

import 'App.css'

import ContactListPage from 'pages/ContactListPage'
import ContactInfoPage from 'pages/ContactInfoPage'
import HttpErrorNotFoundPage from 'pages/HttpErrorNotFoundPage'

import Header from 'components/Header'
import Container from 'components/Container'
import Main from 'components/Main'
import Footer from 'components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
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
        </Container>
      </Main>
      <Footer />
    </>
  )
}

export default App
