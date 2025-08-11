import { SidebarProvider } from "@/components/ui/sidebar"
import Sidebarcomp from "../components/BackOfficeComponents/SideBarComponents/Sidebarcomp"
import { Outlet } from "react-router-dom"
import HeaderBackOffice from "../components/BackOfficeComponents/HeaderBackOffice"



const BackOffice = () => {
    return (
        <>
            <SidebarProvider className="bg-[#efefef]">
                <Sidebarcomp/>
                <main className="w-full mx-2">
                    <HeaderBackOffice/>
                    <Outlet/>
                </main>
            </SidebarProvider>
        </>
    )
}

export default BackOffice
