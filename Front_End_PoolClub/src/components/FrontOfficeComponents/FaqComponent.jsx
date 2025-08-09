import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export const FaqComponent = () => {
    return (
        <>
            <section className="w-full py-8 md:py-16 lg:py-20">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        {/* FAQ Header */}
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-3xl text-[#538083] mb-2 font-bold tracking-tighter md:text-4xl">
                                FAQs
                            </h2>
                            <p className="max-w-[800px] text-[15px] text-center md:text-lg lg:text-xl">
                                Find answers to common questions about the club, membership, booking process, and tournament participation.
                            </p>
                        </div>

                        {/* Accordion */}
                        <div className="w-full lg:w-[70%] mt-6 md:mt-10">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>What is the club's membership process?</AccordionTrigger>
                                    <AccordionContent>
                                        To become a member, simply fill out the online application form and pay the
                                        membership fee. Once your application is approved, you will receive a membership
                                        card.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>How do I book a table?</AccordionTrigger>
                                    <AccordionContent>
                                        To book a table, visit our website and select the date and time you would like to
                                        play. You can also call our reservation hotline for assistance.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Can I participate in tournaments?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, members are eligible to participate in our tournaments. Keep an eye on our
                                        website and social media for upcoming tournament announcements.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>What are the club's opening hours?</AccordionTrigger>
                                    <AccordionContent>
                                        Our club is open from 10am to midnight, Monday to Sunday. Please note that
                                        tournament schedules may affect table availability during certain hours.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>Is there a dress code?</AccordionTrigger>
                                    <AccordionContent>
                                        There is no strict dress code, but we encourage players to dress comfortably and
                                        appropriately for a sports environment.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Contact CTA */}
                        <div className="text-center mt-12 md:mt-16">
                            <h2 className="text-3xl text-[#538083] mb-2 font-bold tracking-tighter md:text-4xl">
                                Still have questions?
                            </h2>
                            <p className="max-w-[800px] text-[15px] text-center md:text-lg lg:text-xl mb-4">
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
                    </div>
                </div>
            </section>
        </>
    )
}
