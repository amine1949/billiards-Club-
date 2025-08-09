import clubPic1 from "../../../assets/clubPic1.jpg";
import clubPic2 from "../../../assets/clubPic2.jpg";
import clubPic3 from "../../../assets/clubPic4.jpg";
import clubPic5 from "../../../assets/clubPic5.jpg"
import coaching from "../../../assets/Coaching.jpg"
import bar from "../../../assets/Bar.jpg"
import tournament from "../../../assets/TournamentPic.jpg"

import { Button } from "@/components/ui/button"

import { ChevronRight } from "lucide-react"

export const BodyHome = () => {
    return (
        <>
            <section className="w-full py-12 md:py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                        <div className="w-full lg:w-1/2 lg:order-last">
                            <img
                                alt="Billiards Club"
                                className="w-full aspect-video rounded-xl object-cover object-center"
                                src={clubPic1}
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-[30px] leading-tight">
                                Experience the Best <span className="text-[#538083]">Billiards<br />Club</span> in Town with
                                High-Quality<br />Tables and Premium Amenities
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg lg:text-xl leading-relaxed">
                                Our Billiards Club offers an exclusive experience with top-notch tables and luxurious
                                amenities. Whether you&apos;re a professional player or just looking to have some fun,
                                we have everything you need for a memorable time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                        <div className="w-full lg:w-1/2">
                            <img
                                alt="Billiards Club Interior"
                                className="w-full aspect-video rounded-xl object-cover object-center"
                                src={clubPic2}
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-[40px] leading-tight">
                                Experience the Best<br />
                                <span className="text-[#538083]">Billiards Club</span> in Town
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg lg:text-xl leading-relaxed dark:text-gray-400">
                                Welcome to our exclusive Billiards Club, where you can enjoy high-quality billiards tables and
                                relax in our comfortable lounge areas. Whether you're a seasoned player or a beginner, our club offers the
                                perfect environment for you to unwind, socialize, and improve your skills.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div className="w-full lg:w-1/2 lg:order-last">
                            <img
                                alt="Billiards game in progress"
                                className="w-full aspect-video rounded-xl object-cover"
                                src={clubPic3}
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-[40px] leading-tight">
                                Experience the Thrill of<br />
                                <span className="text-[#538083]">Billiards Club</span>
                            </h2>
                            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                                Join our Billiards Club and enjoy the benefits of a vibrant community, ultimate relaxation,
                                and thrilling competition. Whether you're a seasoned player or just starting out,
                                our club offers a welcoming environment for all skill levels.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Connect with like-minded players and build lasting friendships.",
                                    "Escape the daily grind and unwind in our serene club atmosphere.",
                                    "Sharpen your skills and compete in exciting tournaments."
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
            </section>

            <section className="w-full py-12 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
                <div className="container px-4 md:px-6 mx-auto space-y-12">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Experience the Best <span className="text-[#538083]">Billiards Club</span> in Town
                            </h2>
                        </div>
                        <div>
                            <p className="text-gray-500 text-lg md:text-xl dark:text-gray-400">
                                Our club offers a range of amenities including a fully stocked bar, a pro-shop for all
                                your billiards needs, and professional coaching services to help you improve your game.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Unwind and Socialize in a Stylish Bar Area",
                                description: "After a challenging game, relax in our stylish bar area and enjoy a drink with friends.",
                                image: bar,
                                buttonText: "Show More"
                            },
                            {
                                title: "Exciting Tournaments to Showcase Your Skills",
                                description: "Participate in our thrilling tournaments and compete against top players to prove your billiards prowess.",
                                image: tournament,
                                buttonText: "Show More"
                            },
                            {
                                title: "Professional Coaching Services for All Skill Levels",
                                description: "Our experienced coaches are here to help you improve your billiards skills, whether you're a beginner or an advanced player.",
                                image: coaching,
                                buttonText: "Coming Soon ..."
                            }
                        ].map((item, index) => (
                            <div key={index} className="space-y-6 group">
                                <div className="overflow-hidden rounded-xl">
                                    <img
                                        alt={item.title}
                                        className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                                        src={item.image}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                                    <Button
                                        variant="ghost"
                                        className="text-lg font-semibold text-[#538083] hover:text-[#2A7F62] px-0"
                                    >
                                        {item.buttonText} <ChevronRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img
                                    alt="Club reservation process"
                                    className="w-full h-auto max-h-[500px] rounded-xl object-cover"
                                    src={clubPic5}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-8">
                            {[
                                {
                                    title: "Easy Reservation Process",
                                    description: "Making reservations and joining tournaments at our Billiards Club is quick and hassle-free. Simply choose your preferred date and time, select the number of players, and complete the online booking form. Our team will confirm your reservation shortly."
                                },
                                {
                                    title: "Club Rules and Guidelines",
                                    description: "To ensure a pleasant experience for all members, we have established a set of club rules and guidelines. These include maintaining proper etiquette, respecting other players, and adhering to the dress code. We kindly ask all participants to familiarize themselves with these rules before visiting our club."
                                },
                                {
                                    title: "Exciting Tournament Opportunities",
                                    description: "Join our thrilling billiards tournaments and showcase your skills against other passionate players. With various categories and prize pools, our tournaments offer a competitive and enjoyable experience for players of all levels. Sign up now to secure your spot!"
                                }
                            ].map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <h3 className="text-2xl font-bold text-[#538083]">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
