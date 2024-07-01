import OutletLayout from "@/components/Layout/outletLayout";
import { FC } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const IpProcessSchema = z.object({
  id: z.string(),
  titled: z.string(),
  region: z.string(),
  CADTNumber: z.string(),
  name: z.string(),
  tribe: z.string(),
  yearApproved: z.string(),
  dateApproved: z.date(),
  areasCovered: z.string(),
  exactLocation: z.string(),
  hyperlink: z.string(),
});

type IpProcess = z.infer<typeof IpProcessSchema>;

const Page: FC = () => {
  const IpsProcessForm = useForm<IpProcess>({
    resolver: zodResolver(IpProcessSchema),
  });

  function onSubmit(values: IpProcess) {
    console.log(values);
  }
  return (
    <OutletLayout>
      <section className="h-full">
        <h3 className="font-bold text-start text-2xl">IPS Process</h3>
        <article className="mt-10 mr-10">
          <Card className="py-5">
            <CardContent>
              <Form {...IpsProcessForm}>
                <form
                  onSubmit={IpsProcessForm.handleSubmit(onSubmit)}
                  className="space-y-8 grid-col-2 grid items-end"
                >
                  <section className="flex gap-5 col-span-2">
                    <FormField
                      control={IpsProcessForm.control}
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
                  </section>

                  <section className="flex gap-5 col-span-2">
                    <FormField
                      control={IpsProcessForm.control}
                      name="titled"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Titled</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={IpsProcessForm.control}
                      name="region"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Region</FormLabel>
                          <FormControl>
                            <Input placeholder="Your region" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <section className="col-span-1 self-start">
                    <FormField
                      control={IpsProcessForm.control}
                      name="CADTNumber"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center self-start">
                          <FormLabel>CADT Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your catd" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <section className="flex gap-5 col-span-2">
                    <FormField
                      control={IpsProcessForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={IpsProcessForm.control}
                      name="tribe"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Tribe</FormLabel>
                          <FormControl>
                            <Input placeholder="Your tribe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <section className="flex gap-5 col-span-2">
                    <FormField
                      control={IpsProcessForm.control}
                      name="yearApproved"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Year Approved</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={IpsProcessForm.control}
                      name="dateApproved"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Date Approved</FormLabel>
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

                  <section className="flex gap-5 col-span-2">
                    <FormField
                      control={IpsProcessForm.control}
                      name="areasCovered"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Areas Covered</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={IpsProcessForm.control}
                      name="exactLocation"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center flex-1">
                          <FormLabel>Exact Location</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <section className="col-span-1 self-start">
                    <FormField
                      control={IpsProcessForm.control}
                      name="hyperlink"
                      render={({ field }) => (
                        <FormItem className="flex gap-4 items-center self-start">
                          <FormLabel>Hyperlink</FormLabel>
                          <FormControl>
                            <Input placeholder="Your hyperlink" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <section className="col-span-1 self-start">
                    <FormLabel className="mr-5">Upload Document</FormLabel>
                    <input type="file" />
                  </section>

                  <div className="flex gap-4 items-center justify-end col-span-2">
                    <Button
                      variant={"ghost"}
                      onClick={() => IpsProcessForm.reset()}
                    >
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
