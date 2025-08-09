//Icons
import { ChevronRight, FileText, LayoutList, UserRoundPlus } from "lucide-react";
//Pictures
import TournamentPic from "../../../assets/TournamentPic3.jpg";
import Tournament1 from "../../../assets/Tournament1.jpg";
import Tournament2 from "../../../assets/Tournament2.jpg";
import Tournament3 from "../../../assets/Tournament3.jpg";
//shadcn Components
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import {fetchAllTournaments} from "../../../redux/features/tournament/tournamentSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import tournamentService from "../../../redux/features/tournament/tournamentService.js";


export const BodyTournament = () => {

    const dispatch = useDispatch();
    const {tournaments, isLoading, isError, message} = useSelector(
        (state) => state.tournament
    );

    useEffect(() => {
        dispatch(fetchAllTournaments());
    }, [dispatch]);

    console.log(tournaments);

    return (
        <>
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                        <h2 className="text-3xl text-[#538083] mb-2 font-bold tracking-tighter md:text-4xl">
                            Upcoming
                        </h2>
                        <p className="max-w-[600px] text-gray-600 text-lg md:text-xl">
                            Check out the list of upcoming billiards tournaments
                        </p>
                    </div>
                    {/* Tournament Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            tournaments.map((tournament, index) => (
                                <Card key={index} className="hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex justify-center">
                                            <img
                                                alt={tournament.name}
                                                className="h-[300px] w-[250px] object-cover rounded-xl"
                                                src={`http://localhost:5000${tournament.image}`}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="flex items-center mt-4 text-gray-500">
                                            <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                                                <path
                                                    fill="currentColor"
                                                    d="M8 13a1 1 0 110-2 1 1 0 010 2zM8 17a1 1 0 110-2 1 1 0 010 2zM11 16a1 1 0 102 0 1 1 0 00-2 0zM16 17a1 1 0 110-2 1 1 0 010 2zM11 12a1 1 0 102 0 1 1 0 00-2 0zM16 13a1 1 0 110-2 1 1 0 010 2zM8 7a1 1 0 000 2h8a1 1 0 100-2H8z"
                                                />
                                                <path
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm12 2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-sm font-medium ml-2">{tournament.date}</span>
                                        </div>
                                        <CardHeader className="px-0 pt-4 pb-2 text-xl font-bold">
                                            {tournament.name}
                                        </CardHeader>
                                        <CardDescription className="text-gray-600">
                                            {tournament.title}
                                        </CardDescription>
                                        <Button
                                            variant="outline"
                                            className="mt-4 font-bold border-0 bg-white text-[#538083] hover:bg-gray-50"
                                        >
                                            View event <ChevronRight className="ml-2" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))
                        }
                        {[
                            {
                                title: "Exciting Tournament Experience",
                                description: "Join us at the Billiards Club for a thrilling tournament",
                                image: Tournament1,
                                date: "24-05-2024"
                            },
                            {
                                title: "Billiards Championship",
                                description: "Witness the ultimate billiards showdown at our club",
                                image: Tournament2,
                                date: "24-05-2024"
                            },
                            {
                                title: "Amateur Billiards Tournament",
                                description: "Compete against other billiards enthusiasts and showcase your skills",
                                image: Tournament3,
                                date: "24-05-2024"
                            }
                        ].map((tournament, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex justify-center">
                                        <img
                                            alt={tournament.title}
                                            className="h-[300px] w-[250px] object-cover rounded-xl"
                                            src={tournament.image}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="flex items-center mt-4 text-gray-500">
                                        <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                                            <path
                                                fill="currentColor"
                                                d="M8 13a1 1 0 110-2 1 1 0 010 2zM8 17a1 1 0 110-2 1 1 0 010 2zM11 16a1 1 0 102 0 1 1 0 00-2 0zM16 17a1 1 0 110-2 1 1 0 010 2zM11 12a1 1 0 102 0 1 1 0 00-2 0zM16 13a1 1 0 110-2 1 1 0 010 2zM8 7a1 1 0 000 2h8a1 1 0 100-2H8z"
                                            />
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm12 2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-sm font-medium ml-2">{tournament.date}</span>
                                    </div>
                                    <CardHeader className="px-0 pt-4 pb-2 text-xl font-bold">
                                        {tournament.title}
                                    </CardHeader>
                                    <CardDescription className="text-gray-600">
                                        {tournament.description}
                                    </CardDescription>
                                    <Button
                                        variant="outline"
                                        className="mt-4 font-bold border-0 bg-white text-[#538083] hover:bg-gray-50"
                                    >
                                        View event <ChevronRight className="ml-2" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}

                    </div>

                    {/* Tournament Info Section */}
                    <div className="mt-20">
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                            <div className="w-full lg:w-1/2 lg:order-last">
                                <img
                                    alt="Tournament action"
                                    className="w-full aspect-video rounded-xl object-cover"
                                    src={TournamentPic}
                                    loading="lazy"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-[40px] leading-tight">
                                    Experience the Thrill of<br />Our <span className="text-[#538083]">Tournaments</span>
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    Join us for an action-packed tournament and witness the excitement as top players compete
                                    for the grand prize. Don't miss out on this special event!
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Guest player appearance",
                                        "Special grand prize",
                                        "Unforgettable tournament experience"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <ChevronRight className="w-6 h-6 text-[#538083] flex-shrink-0 mt-1" />
                                            <p className="text-gray-600">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FileText size={60} />,
                                title: "Discover Tournament Structure",
                                description: "Learn about the tournament rules, categories, and more."
                            },
                            {
                                icon: <LayoutList size={60} />,
                                title: "Exciting Tournament Categories",
                                description: "Explore the different categories available, including singles and doubles."
                            },
                            {
                                icon: <UserRoundPlus size={60} />,
                                title: "Join the Tournament",
                                description: "Sign up now to participate in the thrilling tournament and showcase your skills."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="flex items-start gap-6 p-6 rounded-lg hover:bg-gray-50">
                                <div className="text-[#538083]">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
