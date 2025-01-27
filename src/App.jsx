import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FrontPage } from './pages/FrontPage'
import { MainLayout } from './layout/MainLayout'
import { InfoPage } from './pages/InfoPage'
import { ReservationPage } from './pages/ReservationPage'
import { RoomPage } from './pages/RoomPage'
import { LoginPage } from './pages/LoginPage'
import { NoPage } from './pages/NoPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path={"/info"} element={<InfoPage />} />
            <Route path={"/reservation"} element={<ReservationPage />} />
            <Route path={"/rooms"} element={<RoomPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/*"} element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
