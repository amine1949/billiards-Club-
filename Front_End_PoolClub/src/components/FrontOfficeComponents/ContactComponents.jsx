import { MailIcon, MapPin, PhoneCall } from "lucide-react"


export const ContactComponents = () => {
    return (
        <>
            <section className="w-full py-8 md:py-16 lg:py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    {/* Header */}
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-3xl text-[#538083] mb-2 font-bold tracking-tighter md:text-4xl">
                            Contact Information
                        </h2>
                        <p className="max-w-[800px] text-sm md:text-lg lg:text-xl text-gray-600">
                            Find us easily with the provided contact information.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Location */}
                        <div className="flex flex-col items-center text-center p-6">
                            <MapPin size={64} color="#89909F" className="mb-5" />
                            <p className="font-bold text-lg mb-2">Office</p>
                            <p className="text-gray-500">
                                123 Sample St, Sydney NSW 2000 AU
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col items-center text-center p-6">
                            <PhoneCall size={64} color="#89909F" className="mb-5" />
                            <p className="font-bold text-lg mb-2">Phone</p>
                            <p className="text-gray-500">
                                Call us for more information<br />
                                +212 699 999 999
                            </p>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-center text-center p-6">
                            <MailIcon size={64} color="#89909F" className="mb-5" />
                            <p className="font-bold text-lg mb-2">Email</p>
                            <p className="text-gray-500">
                                Send us an email<br />
                                billardclub.2024@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
