import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CarguesPage } from './pages/CarguesPage'
import { CargueFormPage } from './pages/CagueFormPage'
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'


function App() {
  return (

    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Navigate to='/cargues'></Navigate>}></Route>
          <Route path="/cargues" element={<CarguesPage></CarguesPage>}></Route>
          <Route path="/cargues-create" element={<CargueFormPage></CargueFormPage>}></Route>
          <Route path="/cargues/:id" element={<CargueFormPage></CargueFormPage>}></Route>
        </Routes>
        <Toaster></Toaster>
      </div>
    </BrowserRouter>
  )
}

export default App