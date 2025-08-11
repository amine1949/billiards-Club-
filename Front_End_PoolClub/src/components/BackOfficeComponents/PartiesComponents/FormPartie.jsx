import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

const formSchema = z.object({
    namePartie: z.string().min(2, {
      message: "Name Tournament must be at least 2 characters.",
    }),
    titlePartie: z.string().min(2, {
      message: "Name Tournament must be at least 2 characters.",
    }),
    descriptionPartie: z
    .string()
    .min(10, {
      message: "description must be at least 10 characters.",
    })
    .max(160, {
      message: "description must not be longer than 30 characters.",
    }),
    imagePartie : z.string(),
    datePartie: z.date({
        required_error: "A date of birth is required.",
      }),
  })
   

const FormPartie = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            namePartie: "",
            titlePartie: "",
            descriptionPartie:"",
            imagePartie: "",
            datePartie: ""
        },
      })
     
      function onSubmit(values) {
        console.log(values)
      }


    return(
        <>
            <div className="mt-4">
                <h1 className="text-lg font-medium text-[#333333]">fill out this form to add a new Partie</h1>
                <div className="mt-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="flex justify-between">
                                <div className="w-1/2 space-y-2">
                                    <FormField
                                    control={form.control}
                                    name="namePartie"
                                    render={({ field }) => (
                                        <FormItem className="w-[90%]">
                                            <FormLabel className="font-medium text-[#333333]">Name Partie</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Name Partie" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="descriptionPartie"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel>description Partie</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                placeholder="Create a description for the Partie"
                                                className="resize-none w-[90%]"
                                                {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="w-1/2 space-y-2">
                                    <FormField
                                        control={form.control}
                                        name="titlePartie"
                                        render={({ field }) => (
                                            <FormItem className="w-[90%]">
                                                <FormLabel className="font-medium text-[#333333]">Title Partie</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Title Partie" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="imagePartie"
                                        render={({ field }) => (
                                            <FormItem className="w-[90%]">
                                                <FormLabel className="font-medium text-[#333333]">Image Partie</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Image Partie" type="file" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />  
                                    <FormField
                                        control={form.control}
                                        name="datePartie"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                            <FormLabel className="mt-2">Date of Partie</FormLabel>
                                            <Popover >
                                                <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "pl-3 text-left font-normal w-[90%]",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                    >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                    date < new Date()
                                                    }
                                                    captionLayout="dropdown"
                                                />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <Button type="submit" className="w-[30%] bg-[#538083] font-semibold">Create Partie</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default FormPartie;