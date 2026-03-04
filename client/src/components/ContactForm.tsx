import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { type ContactMessageInput } from "@shared/routes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, Loader2 } from "lucide-react";

export function ContactForm() {
  const submitMutation = useSubmitContact();
  
  const form = useForm<ContactMessageInput>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactMessageInput) {
    submitMutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Votre nom</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Jean Dupont" 
                  {...field} 
                  className="bg-card/50 border-muted-foreground/20 focus-visible:ring-primary focus-visible:border-primary shadow-sm h-12 rounded-xl"
                />
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
              <FormLabel className="text-foreground/80">Adresse e-mail</FormLabel>
              <FormControl>
                <Input 
                  placeholder="jean@exemple.com" 
                  type="email" 
                  {...field} 
                  className="bg-card/50 border-muted-foreground/20 focus-visible:ring-primary focus-visible:border-primary shadow-sm h-12 rounded-xl"
                />
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
              <FormLabel className="text-foreground/80">Votre message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Comment pouvons-nous vous aider ?" 
                  {...field} 
                  className="bg-card/50 border-muted-foreground/20 focus-visible:ring-primary focus-visible:border-primary shadow-sm min-h-[120px] rounded-xl resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={submitMutation.isPending}
          className="w-full h-12 text-base font-medium rounded-xl hover:-translate-y-0.5 transition-transform duration-300 shadow-md hover:shadow-lg shadow-primary/20"
        >
          {submitMutation.isPending ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Send className="mr-2 h-5 w-5" />
          )}
          {submitMutation.isPending ? "Envoi en cours..." : "Envoyer le message"}
        </Button>
      </form>
    </Form>
  );
}
