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
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  firstname: z.string().min(3, "First name must be at least 3 characters"),
  lastname: z.string().min(3, "Last name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  address: z.string().optional(),
  message: z.string().optional(),
});

type FormValidation = z.infer<typeof contactSchema>;

export const Contact = () => {
  const form = useForm<FormValidation>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      address: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValidation) => {
    console.log(data);
  };

  return (
    <section id="contact" className="w-full px-4 py-12 md:py-16 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Contact us today!
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-lg p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <FormField
                  name="firstname"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">First name*</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John" className="h-11" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="lastname"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Last name*</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Doe" className="h-11" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Email*</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your@email.com"
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="phone"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Phone</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="(123) 456-7890"
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                name="address"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your address"
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Your message here..."
                        className="min-h-[120px] resize-y"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full md:w-auto min-w-[200px]"
                  size="lg"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
