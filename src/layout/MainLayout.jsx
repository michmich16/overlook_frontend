import { Outlet } from "react-router-dom";
import {Header } from '../components/Header/Header'
import {Footer} from '../components/Footer/Footer'
import { UserProvider } from '../context/userContext';


export const MainLayout = () => {

    return (
        <>
        <Header />
        <UserProvider>
        <Outlet />
        </UserProvider>
        <Footer />
        </>
    );
};