//Link from react router dom
import { Link } from "react-router-dom";
//Components ShadCN
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input"
//Icons
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
    return (
        <>
            {/* Footer Section  */}
            <footer className="bg-gray-100 w-full dark:bg-gray-800 py-8 md:py-12 px-4">
                <div className="container max-w-7xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 pb-10">
                        {/* Brand & Newsletter */}
                        <div className="col-span-2 space-y-4">
                            <h1 className="font-bold text-3xl">
                                Billards <span className="text-[#C3ACCE]">Club</span>
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300">
                                Stay up to date on the latest features and releases by joining our newsletter.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    className="flex-1"
                                />
                                <Button
                                    type="submit"
                                    className="font-bold bg-[#efefef] text-black border-2 border-[#538083] hover:bg-[#C3ACCE] hover:border-[#89909F] whitespace-nowrap"
                                >
                                    Subscribe
                                </Button>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg text-[#538083]">About</h3>
                            <div className="flex flex-col space-y-1">
                                <Link to="#" className="hover:underline">About Us</Link>
                                <Link to="#" className="hover:underline">Services</Link>
                                <Link to="#" className="hover:underline">Contact</Link>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg text-[#538083]">Services</h3>
                            <div className="flex flex-col space-y-1">
                                <Link to="/billiardsclub/tournament" className="hover:underline">Tournament</Link>
                                <Link to="/billiardsclub/reservation" className="hover:underline">Reservation</Link>
                                <Link to="/billiardsclub/Event" className="hover:underline">Event</Link>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg text-[#538083]">Social</h3>
                            <div className="flex gap-2 mt-2">
                                <Link to="#" aria-label="Facebook">
                                    <Facebook size={30} color="#46494E" className="hover:opacity-80" />
                                </Link>
                                <Link to="#" aria-label="Twitter">
                                    <svg className="w-[30px] h-[30px] text-[#46494E] dark:text-white hover:opacity-80"
                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                                    </svg>
                                </Link>
                                <Link to="#" aria-label="Instagram">
                                    <Instagram size={30} color="#46494E" className="hover:opacity-80" />
                                </Link>
                                <Link to="#" aria-label="LinkedIn">
                                    <Linkedin size={30} color="#46494E" className="hover:opacity-80" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Copyright & Legal Links */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © 2024 Billards Club. All rights reserved.
                        </p>
                        <nav className="flex flex-wrap justify-center gap-4">
                            <Link to="#" className="text-xs md:text-sm hover:underline underline-offset-4">
                                Terms of Service
                            </Link>
                            <Link to="#" className="text-xs md:text-sm hover:underline underline-offset-4">
                                Privacy Policy
                            </Link>
                            <Link to="#" className="text-xs md:text-sm hover:underline underline-offset-4">
                                Cookies Settings
                            </Link>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    )
}
