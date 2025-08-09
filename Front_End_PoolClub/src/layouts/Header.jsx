//Link from react router dom
import { Link } from "react-router-dom";
//Components ShadCN
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
//Icons
import { MenuIcon } from "lucide-react";

export const Header = () => {
    return (
        <>
            {/* Header Section  */}
            <header className="w-full flex h-16 items-center justify-between px-10">
                <div>
                    <h1 className={"font-[1000] text-[25px]"}>Billards <span className={"text-[#C3ACCE]"}>Club</span></h1>
                </div>
                <div>
                    <Sheet>
                        <SheetTrigger className={"border-0"}>
                            {/* <Button className="md:hidden bg-[#DFD9E2] bg-opacity-40 border-none" size="icon" variant="outline"> */}
                            <MenuIcon className="h-6 w-6 md:hidden bg-[#DFD9E2] bg-opacity-40 border-none" />
                            <span className="sr-only">Toggle navigation menu</span>
                            {/* </Button> */}
                        </SheetTrigger>
                        <SheetContent aria-describedby={undefined}>
                            <SheetHeader className={"mt-8"}>
                                <SheetTitle as="h1">
                                    <span className={"text-[25px]"}>Billards <span className={"text-[#C3ACCE]"}>Club</span></span>
                                </SheetTitle>
                            </SheetHeader>
                            <div className={"font-[500] text-[17px] w-full grid mt-7 text-center sm:text-left"}>
                                <Link to={"/"}
                                    className={"p-3 hover:text-[#9D81AA] hover:rounded-xl"}>
                                    Home
                                </Link>
                                <Link to={"/tournament"}
                                    className={"p-3 hover:text-[#9D81AA] hover:rounded-xl"}>
                                    Tournament
                                </Link>
                                <Link to={"/reservation"}
                                    className={"p-3 hover:text-[#9D81AA] hover:rounded-xl"}>
                                    Reservation
                                </Link>
                                <Link to={"/parties"}
                                    className={"p-3 hover:text-[#9D81AA] hover:rounded-xl"}>
                                    Parties
                                </Link>
                                <Link to={"/contact"}
                                    className={"p-3  hover:text-[#9D81AA] hover:rounded-xl"}>
                                    Contact
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className={"hidden md:flex "}>
                    <div>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to="/tournament">
                                        Tournament
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to="/reservation">
                                        Reservations
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to="/parties">
                                        Parties
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </header >
        </>
    )
}

