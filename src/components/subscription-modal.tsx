import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";

const subscriptionSchema = z.object({
  email: z.string().email(),
});

type FormValidation = z.infer<typeof subscriptionSchema>;

export const SubscriptionModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const form = useForm<FormValidation>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: { email: "" },
  });

  const handleSubscribe = async (data: FormValidation) => {
    try {
      setIsSubmitting(true);

      const templateParams = {
        from_email: data.email,
        to_name: "Settleinn Ltd",
      };

      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_NEWS_TEMPLATE,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      if (response.status === 200) {
        toast({
          title: "Success!",
          description:
            "Your have successfully subscribe to Settleinn news letter.",
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
      setShowModal(false);
    }
  };

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Subscribe to Our Newsletter
          </DialogTitle>
          <DialogDescription>
            Get the latest updates and exclusive offers directly in your inbox.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubscribe)}
            className="space-y-4"
          >
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="sm:justify-between gap-2">
              <Button
                type="button"
                variant="outline"
                disabled={isSubmitting}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader size={20} className="animate-spin" /> Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
