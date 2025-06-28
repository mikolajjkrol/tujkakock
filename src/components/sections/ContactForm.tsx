import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Imię musi mieć co najmniej 2 znaki.",
  }),
  email: z.string().email({
    message: "Podaj poprawny adres e-mail.",
  }),
  phone: z.string().min(10, {
    message: "Podaj poprawny numer telefonu.",
  }),
  message: z.string().min(10, {
    message: "Wiadomość musi mieć co najmniej 10 znaków.",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your server
    console.log(values);
    alert("Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.");
    form.reset();
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="mb-6 text-2xl font-bold text-green-900">Wyślij wiadomość</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twoje imię</FormLabel>
                <FormControl>
                  <Input placeholder="Jan Kowalski" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adres e-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="jan.kowalski@przyklad.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numer telefonu</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(123) 456-7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twoja wiadomość</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Jestem zainteresowany zakupem tuj do mojego ogrodu..." 
                    className="h-32" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
            <Send className="w-4 h-4 mr-2" /> Wyślij wiadomość
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;