import HeroSectionPic from "../../../assets/TournamentPic2.jpg";



export const HeroSectionTournament = () => {
    return (
        <>
            <section className="relative w-full min-h-[500px] py-12 md:py-20 lg:py-24 flex items-center">
                <div className="container px-4 md:px-6 mx-auto relative">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Text Content */}
                        <div className="lg:order-first space-y-6">
                            <div className="space-y-5">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl leading-tight">
                                    Upcoming Billiards <br />
                                    <span className="text-[#538083]">Tournaments</span>
                                </h1>
                                <p className="text-lg md:text-xl max-w-[700px] text-gray-600">
                                    Experience the thrill of competitive billiards at our upcoming tournaments.
                                    Join us for a chance to showcase your skills and win exciting prizes.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-full lg:w-auto ">
                            <img
                                alt="Billiards tournament"
                                className="w-full aspect-video rounded-xl object-cover shadow-lg"
                                src={HeroSectionPic}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
