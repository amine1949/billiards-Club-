

export const HeroSectionParties = () => {
    return (
        <>
            <section className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] py-12 md:py-16 lg:py-20 bg-HeroPicPartie bg-cover bg-no-repeat bg-center">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="flex flex-col justify-center items-start">
                            <div className="space-y-4 md:space-y-6 lg:space-y-8">
                                <h1 className="text-white text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                    <span className="text-[#538083]">Parties & Events</span>
                                </h1>
                                <p className="max-w-[600px] text-white text-lg sm:text-xl md:text-2xl lg:max-w-[700px] lg:text-xl">
                                    Check out our blog for insights on parties, including tips, event highlights, and more!
                                </p>
                                {/* Optional: Add a CTA button */}
                                <button className="mt-4 px-6 py-3 bg-[#538083] text-white font-medium rounded-lg hover:bg-[#3a5a5c] transition-colors duration-300">
                                    View Events
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
