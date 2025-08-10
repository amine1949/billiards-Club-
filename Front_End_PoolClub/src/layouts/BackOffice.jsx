import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Sidebarcomp from "../components/BackOfficeComponents/SideBarComponents/Sidebarcomp"
import { Outlet } from "react-router-dom"



const BackOffice = () => {
    return (
        <>
            <SidebarProvider className="bg-[#efefef]">
                <Sidebarcomp/>
                <main>
                    <SidebarTrigger/>
                    <Outlet/>
                </main>
            </SidebarProvider>
        </>
    )
}

export default BackOffice
