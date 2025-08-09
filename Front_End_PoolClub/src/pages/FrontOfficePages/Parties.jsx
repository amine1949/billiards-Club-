import { ContactComponents } from "../../components/FrontOfficeComponents/ContactComponents"
import { BodyParties } from "../../components/FrontOfficeComponents/Parties/BodyParties"
import { HeroSectionParties } from "../../components/FrontOfficeComponents/Parties/HeroSectionParties"

import { Button } from "@/components/ui/button"

export const Parties = () => {
    return (
        <>
            <HeroSectionParties />
            <BodyParties />

            <div className="container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center max-w-screen-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#538083] mt-12 mb-4">
                    Still have questions?
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg max-w-2xl text-center mb-4">
                    Contact us for more information.
                </p>

                <Button
                    variant={'outline'}
                    className={'font-bold text-[18px] p-5 bg-[#efefef] border-2 border-[#538083] mt-3 hover:bg-[#C3ACCE] hover:border-[#89909F]'}
                >
                    <a href={"/billiardsclub/contact"}>
                        Contact
                    </a>
                </Button>
            </div>


            <ContactComponents />
        </>
    )
}
