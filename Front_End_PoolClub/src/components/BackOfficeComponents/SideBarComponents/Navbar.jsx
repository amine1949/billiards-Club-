import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent
} from "@/components/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuAction,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton
} from "@/components/ui/sidebar";
import {ChevronRight, ChartBarStacked, LayoutDashboard, User2, MessageSquare, PartyPopper, Ticket} from "lucide-react";
import { Link } from "react-router-dom";



const itemSettingAdmin = [
    {
        items: [
            { title: "Gérer Votre Compte", url: "/Workspace/Admin/SettingUpdateUserName" },
            { title: "Gérer Votre mot de Passe", url: "/Workspace/Admin/SettingUpdateUserPass" },
        ]
    }
];

const navItemAdmin = [
    {
        title: "Dashboard",
        url: '/backoffice',
        icon: LayoutDashboard
    },
    {
        title: "Tournaments",
        url: '/backoffice/tournament',
        icon: ChartBarStacked
    },
    {
        title: "Reservations",
        url: '/backoffice/reservation',
        icon: Ticket 
    },
    {
        title: "Parties",
        url: '/backoffice/partie',
        icon: PartyPopper 
    },
    {
        title: "Contact",
        url: '/backoffice/contact',
        icon: MessageSquare 
    },

]

const Navbar = () => {
    return (
        <>
            <SidebarGroup>
                {/* PlatForm Section */}
                <SidebarGroupLabel className='text-[#538083] font-normal'>PlatForm</SidebarGroupLabel>
                <SidebarMenu>
                    {navItemAdmin.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild size="sm" className='text-black text-[17px] mb-2 hover:bg-[#DFD9E2]'>
                                <Link to={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroup>

            {/* Bottom-aligned Paramêtres Section */}
            <div className="mt-auto">
                <SidebarGroup>
                    <SidebarGroupLabel className='text-[#538083] font-normal'>Paramêtres</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <Collapsible asChild defaultOpen={true}>
                                <SidebarMenuItem>
                                    <SidebarMenuButton className='text-black text-[17px] mb-2'>
                                        <User2 />
                                        <span>Compte</span>
                                    </SidebarMenuButton>

                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuAction className="data-[state=open]:rotate-90">
                                            <ChevronRight className='text-black' />
                                            <span className="sr-only">Toggle</span>
                                        </SidebarMenuAction>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent className='mb-2'>
                                        <SidebarMenuSub>
                                            {itemSettingAdmin[0].items.map((item, index) => (
                                                <SidebarMenuSubItem key={index}>
                                                    <SidebarMenuSubButton asChild className='text-black'>
                                                        <Link to={item.url}>
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </div>
        </>
    );
};

export default Navbar;