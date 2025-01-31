import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FrontPage } from './pages/FrontPage'
import { MainLayout } from './layout/MainLayout'
import { DestinationPage } from './pages/DestinationPage'
import { ReservationPage } from './pages/ReservationPage'
import { RoomPage } from './pages/RoomPage'
import { LoginPage } from './pages/LoginPage'
import { NoPage } from './pages/NoPage'
import { SignupPage } from './pages/SignupPage'
import { CityPage } from './pages/CityPage'
import { CountryPage } from './pages/CountryPage'
import { HotelPage } from './pages/HotelPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path={"/destinations"} element={<DestinationPage />} />
            <Route path={"/destinations/:country"} element={<CountryPage />} />
            <Route path={"/destinations/:country/:city"} element={<CityPage />} />
            <Route path={"/destinations/:country/:city/:hotel"} element={<HotelPage />} />
            <Route path={"/reservation"} element={<ReservationPage />} />
            <Route path={"/rooms"} element={<RoomPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/signup"} element={<SignupPage />} />
            <Route path={"/*"} element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
