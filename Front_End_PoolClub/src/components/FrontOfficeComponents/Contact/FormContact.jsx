//Components ShadCN
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";


export const FormContact = () => {
    return (
        <>
            <section
                className="relative w-full  py-10 md:py-20 lg:py-10 ">
                <div className=" ">
                    <div className="">
                        <div className="flex flex-col justify-center items-center space-y-2 mt-5">
                            <div className={'mt-4 py-3 lg:w-[70%] md:w-[70%] justify-center'}>
                                <div
                                    className="border-2 border-gray-300 dark:border-gray-700 px-6 py-10 rounded-md shadow-md space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
                                        <p className="text-gray-500 dark:text-gray-400 text-center">
                                            Have a question? We&apos;re here to help !
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label className="text-gray-600 dark:text-gray-400" htmlFor="name">
                                                Name
                                            </Label>
                                            <Input
                                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                                id="name"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-gray-600 dark:text-gray-400" htmlFor="phone">
                                                Phone Number
                                            </Label>
                                            <Input
                                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                                id="phone"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-gray-600 dark:text-gray-400" htmlFor="message">
                                                Message
                                            </Label>
                                            <Textarea
                                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                                placeholder="Enter Your Message"
                                                id="message"
                                            />
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox className="text-gray-600 dark:text-gray-400" id="agreement" />
                                            <Label className="text-sm font-normal text-gray-600 dark:text-gray-400"
                                                htmlFor="agreement">
                                                I agree to the
                                                <a
                                                    className="underline underline-offset-2 text-gray-600 dark:text-gray-400"
                                                    href="#">
                                                    Terms & Conditions
                                                </a>
                                            </Label>
                                        </div>
                                        <Button
                                            className="w-full font-bold text-black text-[18px] p-5 bg-[#efefef] border-2 border-[#538083] mt-3 hover:bg-[#C3ACCE] hover:border-[#89909F]"
                                            type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
