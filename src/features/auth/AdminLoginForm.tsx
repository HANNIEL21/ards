import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAdminLogin } from "./useAdminLogin";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";

const adminLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function AdminLoginForm() {
  const adminLogin = useAdminLogin();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof adminLoginSchema>>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: {
      email: "admin@admin.com",
      password: "Plural18$",
    },
  });

  function onSubmit(values: z.infer<typeof adminLoginSchema>) {
    adminLogin.mutate(values, {
      onSuccess: () => {
        form.reset();
        navigate("/dashboard", { replace: true });
      },
      onError: () => {
        form.setValue("password", "");
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="********"
                    {...field}
                  />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-md p-1 text-muted-foreground"
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
}
