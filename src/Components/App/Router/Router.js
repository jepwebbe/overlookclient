import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Hotels from '../../Pages/Hotels'
import Login from '../../Pages/Login'
import NotFound from '../../Pages/NotFound'
import Reservations from '../../Pages/Reservations'
import Rooms from '../../Pages/Rooms'
import CountriesDetails from '../../Partials/CountriesDetails'
import CountriesList from '../../Partials/CountriesList'

export const Router = () => {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="hotels" element={<Hotels />} >
                <Route path=":id" element={<CountriesDetails />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}