

export const HeroSectionContact = () => {
    return (
        <>
            <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] py-12 md:py-16 lg:py-20 bg-HeroPic bg-cover bg-no-repeat bg-center">
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
                    <div className="w-full text-center">
                        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 lg:space-y-8">
                            <h1 className="text-[#538083] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                Contact us
                            </h1>
                            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-xl">
                                Get in touch or ask us anything about our club.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
