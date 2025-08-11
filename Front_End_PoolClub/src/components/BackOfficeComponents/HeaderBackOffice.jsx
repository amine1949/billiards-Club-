//Shadcn Components
import { SidebarTrigger } from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
//Logo Picture
import logo from "../../assets/LogoBackOffice.png";


const HeaderBackOffice = () => {
    return (
        <>
            <div className="flex p-4 w-full justify-between">
                <div className="flex items-center">
                    <SidebarTrigger/>
                    <img src={logo} alt="logo" className="w-10 h-10 ml-4" />
                    <h1 className="text-xl font-semibold ml-2">Billiard Club</h1>
                </div>
                <div className="flex items-center">
                    <p className="text-sm font-semibold mr-4">Welcome Admin</p>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </>
    )
}

export default HeaderBackOffice;