import clubPic2 from "../../../assets/clubPic2.jpg";

export const BodyReservations = () => {
    return (
        <>
            <section className="w-full py-8 md:py-12 lg:py-16">
                <div className="container mx-auto grid items-center gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                    <img
                        alt="Billiards Club"
                        className="mx-auto aspect-video w-full overflow-hidden rounded-xl object-cover object-center lg:order-last"
                        height="400"
                        src={clubPic2}
                        width="600"
                        loading="lazy"
                    />

                    <div className="space-y-4 sm:space-y-6">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-[2.5rem]">
                            Discover the Benefits of<br className="hidden sm:inline" />
                            Reserving a Table at Our<br className="hidden sm:inline" />
                            <span className="text-[#538083]">Billiards Club</span>
                        </h2>

                        <p className="text-gray-600 md:text-lg lg:text-base xl:text-lg dark:text-gray-400">
                            When you make a reservation at our Billiards Club, you can enjoy guaranteed table
                            availability and exclusive member rates. Don't miss out on the advantages!
                        </p>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold sm:text-xl">Guaranteed Availability</h3>
                                <p className="text-gray-600 sm:text-base">
                                    With a reservation, you can be confident that a table will be ready for you.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold sm:text-xl">Special Member Rates</h3>
                                <p className="text-gray-600 sm:text-base">
                                    As a member, you'll enjoy discounted rates when you reserve a table.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
