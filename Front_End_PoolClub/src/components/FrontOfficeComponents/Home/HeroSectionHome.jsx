//Components Shadcn
import { Button } from "@/components/ui/button"

export const HeroSectionHome = () => {
    return (
        <>
            <section
                className="relative w-full h-[500px] py-10 md:py-20 lg:py-10 bg-HeroPic bg-cover bg-no-repeat bg-center bg-opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
                <div className="container md:px-6 relative ">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-2 mt-5">
                            <div className="space-y-7 ">
                                <h1 className="text-white text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Welcome to our<br />
                                    <span className={"text-[#538083]"}>Billiards Club</span>
                                </h1>
                                <p className="max-w-[900px] text-white md:text-[20px]">
                                    Welcome to the premier spot for billiards lovers! Dive into a world of endless
                                    excitement with tournaments, parties, and more. Here to play, mingle, or just have
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    fun? You've found the right place. Check out our events and book easily on our site.
                                    Gear up for unmatched cue sports excitement and create lasting memories with us!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"mt-4"}>
                        <Button className={"bg-[#538083] text-black font-bold hover:bg-[#2A7F62]"}>
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>

        </>
    )
}
