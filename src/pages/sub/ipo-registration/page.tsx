import OutletLayout from "@/components/Layout/outletLayout";
import { FC } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface PageProps {}

const IpsRegisterSchema = z.object({
  id: z.number(),
  dateOfRegistration: z.date(),
  catdtNumber: z.string(),
  name: z.string().min(2).max(20),
  tribe: z.string(),
  region: z.string(),
  province: z.string(),
  location: z.string(),
  natureOfIpo: z.string(),
  partners: z.string(),
  endorsedBy: z.string(),
  tribalLeader: z.string(),
  dateOfRecognition: z.date(),
  contactNumber: z.string(),
});

type IpsRegister = z.infer<typeof IpsRegisterSchema>;

const Page: FC<PageProps> = () => {
  const IpsForm = useForm<IpsRegister>({
    resolver: zodResolver(IpsRegisterSchema),
  });

  function onSubmit(values: IpsRegister) {
    console.log(values);
  }
  return (
    <OutletLayout>
      <section className="h-full">
        <h3 className="font-bold text-start text-2xl">IPS Registration</h3>
        <article className="mt-10 mr-10">
          <Card className="py-5">
            <CardContent>
              <Form {...IpsForm}>
                <form
                  onSubmit={IpsForm.handleSubmit(onSubmit)}
                  className="space-y-8 grid-col-2 grid items-end"
                >
                  <section className="flex gap-5 col-span-2">
                    <FormField
                      control={IpsForm.control}
                      name="id"
                      disabled
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>ID</FormLabel>
                          <FormControl>
                            <Input placeholder="Your ID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={IpsForm.control}
                      name="dateOfRegistration"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Date of Registration</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
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
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>
                  <section className="col-span-1 self-start">
                    <FormField
                      control={IpsForm.control}
                      name="catdtNumber"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center self-start">
                          <FormLabel>CADT</FormLabel>
                          <FormControl>
                            <Input placeholder="Your ID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <section className="flex gap-5 col-span-2">
                    <FormField
                      control={IpsForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Juan Dela Cruz" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={IpsForm.control}
                      name="tribe"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Tribe</FormLabel>
                          <FormControl>
                            <Input placeholder="Tausug" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <section className="flex gap-5 col-span-2">
                    <FormField
                      control={IpsForm.control}
                      name="region"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Region</FormLabel>
                          <FormControl>
                            <Input placeholder="Region 3" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={IpsForm.control}
                      name="province"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Province</FormLabel>
                          <FormControl>
                            <Input placeholder="Batangas" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <section className="flex gap-5 col-span-2">
                    <FormField
                      control={IpsForm.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Blk 13 Mount Makiling"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <section className="flex gap-5 col-span-2">
                    <FormField
                      control={IpsForm.control}
                      name="natureOfIpo"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Nature of Ipo</FormLabel>
                          <FormControl>
                            <Input placeholder="Region 3" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={IpsForm.control}
                      name="partners"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Partners</FormLabel>
                          <FormControl>
                            <Input placeholder="Batangas" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <section className="flex gap-5 col-span-2">
                    <FormField
                      control={IpsForm.control}
                      name="endorsedBy"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Endorsed By</FormLabel>
                          <FormControl>
                            <Input placeholder="Region 3" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={IpsForm.control}
                      name="tribalLeader"
                      render={({ field }) => (
                        <FormItem className="flex gap-1 items-center flex-1">
                          <FormLabel>Tribal Leader</FormLabel>
                          <FormControl>
                            <Input placeholder="Batangas" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <section className="flex gap-5 col-span-2">
                    <FormField
                      control={IpsForm.control}
                      name="dateOfRecognition"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Date of Recognition</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
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
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={IpsForm.control}
                      name="contactNumber"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Contact Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+63" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <div className="flex gap-4 items-center justify-end col-span-2">
                    <Button variant={"ghost"} onClick={() => IpsForm.reset()}>
                      Cancel
                    </Button>
                    <Button type="submit">Process</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </article>
      </section>
    </OutletLayout>
  );
};

export default Page;
