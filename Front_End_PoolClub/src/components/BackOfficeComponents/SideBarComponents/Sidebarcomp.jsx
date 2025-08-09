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
            <Sidebar >
                <SidebarHeader className="bg-blue-800 text-black">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" asChild>
                                <a href="#">
                                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                        <Command className="size-4" />
                                    </div>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">Acme Inc</span>
                                        <span className="truncate text-xs">Enterprise</span>
                                    </div>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent className="bg-blue-800">
                    <Navbar/>
                    {/*<NavMain items={data.navMain} />
                    <NavProjects projects={data.projects} />
                    <NavSecondary items={data.navSecondary} className="mt-auto" />*/}
                </SidebarContent>
                <SidebarFooter className="bg-blue-800">
                    {/*<NavUser user={data.user} />*/}
                </SidebarFooter>
            </Sidebar>
        </>
    );
};

export default Sidebarcomp;