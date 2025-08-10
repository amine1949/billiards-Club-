import {
    Command,
} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Navbar from "./Navbar.jsx";


const Sidebarcomp = () => {
    return (
        <>
            <Sidebar>
                <SidebarHeader className="bg-[#d8d8d8] text-black">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" asChild>
                                <a href="#">
                                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                        <Command className="size-4" />
                                    </div>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">Billiards Club</span>
                                    </div>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent className="bg-[#d8d8d8]">
                    <Navbar/>
                </SidebarContent>
                <SidebarFooter className="bg-[#d8d8d8]">
                    {/*<NavUser user={data.user} />*/}
                </SidebarFooter>
            </Sidebar>
        </>
    );
};

export default Sidebarcomp;