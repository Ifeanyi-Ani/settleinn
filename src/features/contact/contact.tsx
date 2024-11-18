import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader } from "lucide-react";
import countryList from "react-select-country-list";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  firstname: z.string().min(3, "First name must be at least 3 characters"),
  lastname: z.string().min(3, "Last name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  address: z.string().optional(),
  message: z.string().optional(),
  location: z.string().min(1, "Please select a country"),
});

type FormValidation = z.infer<typeof contactSchema>;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const countries = useMemo(() => countryList().getData(), []);

  const form = useForm<FormValidation>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      address: "",
      message: "",
      location: "",
    },
  });

  const onSubmit = async (data: FormValidation) => {
    try {
      setIsSubmitting(true);

      const templateParams = {
        from_name: `${data.firstname} ${data.lastname}`,
        from_email: data.email,
        to_name: "Settleinn Ltd",
        phone: data.phone || "Not provided",
        address: data.address || "Not provided",
        message: data.message || "No message provided",
        location: data.location || "No location provided",
      };

      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_CONTACT_TEMPLATE,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      if (response.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        form.reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full px-2  md:py-16 md:bg-background">
      <div className="mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Contact us today!
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="md:bg-card md:rounded-lg md:shadow-lg p-2 md:p-8">
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
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Country*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.value} value={country.value}>
                            {country.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={20} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
