import { createBrowserRouter } from "react-router-dom";
import FrontOffice from "../layouts/FrontOffice";
import Home from "../pages/FrontOfficePages/Home";
import { Tournament } from "../pages/FrontOfficePages/Tournament";
import { Reservation } from "../pages/FrontOfficePages/Reservation";
import { Parties } from "../pages/FrontOfficePages/Parties";
import { Contact } from "../pages/FrontOfficePages/Contact";
import { NotFound } from "../pages/NotFound";
import SignIn from "../pages/SignIn.jsx";
import BackOffice from "../layouts/BackOffice.jsx";
import Dashboard from "../pages/BackOfficePages/Dashboard.jsx";
import TournamentsBackOffice from "../pages/BackOfficePages/TournamentsBackOffice.jsx";
import  ReservationsBackOffice  from "../pages/BackOfficePages/ReservationsBackOffice.jsx";
import  PartiesBackOffice from "../pages/BackOfficePages/PartiesBackOffice.jsx";
import  ContactBackOffice  from "../pages/BackOfficePages/ContactBackOffice.jsx";

export const router = createBrowserRouter([
    {
        element: <FrontOffice />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/tournament',
                element: <Tournament />
            },
            {
                path: '/reservation',
                element: <Reservation />
            },
            {
                path: '/parties',
                element: <Parties />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    },
    {
        element: <BackOffice />,
        children: [
            {
                path: '/backoffice',
                element: <Dashboard />
            },
            {
                path: '/backoffice/tournament',
                element: <TournamentsBackOffice/>
            },
            {
                path: '/backoffice/reservation',
                element: <ReservationsBackOffice/>
            },
            {
                path: '/backoffice/partie',
                element: <PartiesBackOffice />
            },
            {
                path: '/backoffice/contact',
                element: <ContactBackOffice />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
    {
        path: '/signin',
        element: <SignIn />
    }
])