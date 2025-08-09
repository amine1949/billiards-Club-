
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger
} from "@/components/ui/sidebar"
import {Outlet} from "react-router-dom";
import Sidebarcomp from "../components/BackOfficeComponents/SideBarComponents/Sidebarcomp.jsx";



const BackOffice = () => {
    return (
        <>
            <SidebarProvider>
                <SidebarInset>
                    <Sidebarcomp/>
                    <Outlet/>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}

export default BackOffice
