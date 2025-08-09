import Partie from "../../../assets/Partie.jpg";

export const BodyParties = () => {
    return (
        <>
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
                        {/* Image Column - Responsive sizing and centering */}
                        <div className="flex justify-center lg:justify-start lg:ml-16 xl:ml-32">
                            <div className="w-full max-w-[300px] md:max-w-[350px] lg:w-[300px] xl:w-[450px] ">
                                <img
                                    alt="Night Party"
                                    className="aspect-[4/5] sm:aspect-video w-full h-[450px] rounded-xl object-cover object-center shadow-lg "
                                    src={Partie}
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Content Column - Improved spacing and typography */}
                        <div className="space-y-6 md:space-y-8">
                            <div className="space-y-4 md:space-y-6">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#538083] tracking-tight">
                                    Night Party
                                </h2>

                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    Experience the ultimate nightlife sensation with our electrifying DJ, who transforms every event into an unforgettable party. With an eclectic mix of beats and an unmatched energy, our DJ sets the stage on fire, ensuring a night filled with pulsating rhythms and euphoric vibes. Get ready to dance the night away and create memories that last a lifetime!
                                </p>

                                {/* Date/Time Info - Improved responsive layout */}
                                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24">
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
                                        <span className="ml-2 text-sm sm:text-base font-medium text-gray-700">24-05-2024</span>
                                    </div>

                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M9 7h2v5h5v2H9V7z" />
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="ml-2 text-sm sm:text-base font-medium text-gray-700">8:00 pm</span>
                                    </div>
                                </div>
                            </div>

                            {/* Optional CTA Button - Better responsive sizing */}
                            <button className="mt-4 px-6 py-3 sm:px-8 sm:py-3 bg-[#538083] text-white font-medium rounded-lg hover:bg-[#3a5a5c] transition-colors duration-300">
                                Book Tickets
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
