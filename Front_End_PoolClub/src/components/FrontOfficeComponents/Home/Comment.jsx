import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"



export const Comment = () => {
    return (
        <>

            <section className="w-full py-12 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                        <h2 className="text-3xl font-bold text-[#538083] mb-3 md:text-4xl lg:text-5xl">
                            What They Say
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-lg md:text-xl">
                            Read what our club members and visitors have to say about us
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {[
                            {
                                quote: "I love playing at this club, the atmosphere is amazing!",
                                name: "Elyas ElMaliki",
                                role: "Club Member",
                                avatar: "https://github.com/shadcn.png"
                            },
                            {
                                quote: "The tournaments organized here are top-notch!",
                                name: "Elyas ElMaliki",
                                role: "Club Member",
                                avatar: "https://github.com/shadcn.png"
                            },
                            {
                                quote: "The staff is friendly and the facilities are well-maintained.",
                                name: "Elyas ElMaliki",
                                role: "Club Member",
                                avatar: "https://yt3.googleusercontent.com/t7E1Nonv2IebjWy0c0iLPn3s8hY1R7XBk_GfTBqJba-aKr6obTTkrr42LIQ683SMNx72jKzOPQ=s900-c-k-c0x00ffffff-no-rj"
                            }
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <p className="text-gray-600 dark:text-gray-300 italic text-lg">
                                        "{testimonial.quote}"
                                    </p>
                                    <div className="flex flex-col items-center">
                                        <Avatar className="w-12 h-12 mb-3">
                                            <AvatarImage src={testimonial.avatar} />
                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <p className="font-semibold text-lg">{testimonial.name}</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
