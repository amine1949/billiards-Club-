import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import clubPic3 from "../../../assets/clubPic1.jpg";

export const FormReservations = () => {
    return (
        <>
            <section className="w-full py-8 md:py-12 lg:py-20">
                <div className="container mx-auto grid items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
                    <div className="order-2 lg:order-1">
                        <img
                            alt="Billiards Club"
                            className="mx-auto aspect-video w-full overflow-hidden rounded-xl object-cover object-center"
                            height="400"
                            src={clubPic3}
                            width="600"
                            loading="lazy"
                        />
                    </div>

                    <div className="space-y-4 order-1 lg:order-2">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 md:text-lg dark:text-gray-400">
                            Reserve your Place Now!
                        </p>

                        <div className="mt-6 w-full space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:items-center">
                                <Label htmlFor="name" className="font-bold sm:text-right sm:col-span-1">
                                    Full Name
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Full Name"
                                    className="sm:col-span-4"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:items-center">
                                <Label htmlFor="email" className="font-bold sm:text-right sm:col-span-1">
                                    Email
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    className="sm:col-span-4"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:items-center">
                                <Label htmlFor="tel" className="font-bold sm:text-right sm:col-span-1">
                                    Telephone
                                </Label>
                                <Input
                                    type="tel"
                                    id="tel"
                                    placeholder="Telephone"
                                    className="sm:col-span-4"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:items-center">
                                <Label className="font-bold sm:text-right sm:col-span-1">
                                    Choose Table
                                </Label>
                                <Select className="sm:col-span-4">
                                    <SelectTrigger className="w-40">
                                        <SelectValue placeholder="Select a table" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Snooker Tables</SelectLabel>
                                            <SelectItem value="Snooker 1">Snooker 1</SelectItem>
                                            <SelectItem value="Snooker 2">Snooker 2</SelectItem>
                                        </SelectGroup>
                                        <SelectGroup>
                                            <SelectLabel>8 Pool Tables</SelectLabel>
                                            <SelectItem value="8 Pool 1">8 Pool 1</SelectItem>
                                            <SelectItem value="8 Pool 2">8 Pool 2</SelectItem>
                                            <SelectItem value="8 Pool 3">8 Pool 3</SelectItem>
                                            <SelectItem value="8 Pool 4">8 Pool 4</SelectItem>
                                            <SelectItem value="8 Pool 5">8 Pool 5</SelectItem>
                                            <SelectItem value="8 Pool 6">8 Pool 6</SelectItem>
                                            <SelectItem value="8 Pool 7">8 Pool 7</SelectItem>
                                            <SelectItem value="8 Pool 8">8 Pool 8</SelectItem>
                                            <SelectItem value="8 Pool 9">8 Pool 9</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="pt-2">
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto font-semibold text-lg py-5 px-8 bg-[#efefef] border-2 border-[#538083] hover:bg-[#C3ACCE] hover:border-[#89909F] transition-colors"
                                >
                                    Reserve
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
