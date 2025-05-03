import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label"; // Correct import
import { GalleryVerticalEnd, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";
import AdminLoginForm from "@/features/auth/AdminLoginForm";

const Login = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <Button className="absolute top-5 left-5" onClick={() => navigate("/")}>
        <MoveLeft size={38} />
      </Button>
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <a href="#" className="flex flex-col items-center space-y-2">
            <div className="flex size-10 items-center justify-center rounded-md bg-muted">
              <GalleryVerticalEnd className="size-6 text-primary" />
            </div>
            <span className="sr-only">Acme Inc.</span>
          </a>
          <h1 className="text-2xl font-bold">Welcome to RSU ARDS.</h1>
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a
              href="/register"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign up
            </a>
          </p>
        </div>

        <Tabs defaultValue="user" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="user" className="w-1/2">
              Login
            </TabsTrigger>
            <TabsTrigger value="admin" className="w-1/2">
              Admin Login
            </TabsTrigger>
          </TabsList>

          {/* User Login */}
          <TabsContent value="user">
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="matricNo">Mat No</Label>
                  <Input
                    id="matricNo"
                    name="matricNo"
                    type="text"
                    placeholder="DE.20XX/XXXX"
                    autoComplete="username"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>
          </TabsContent>

          {/* Admin Login */}
          <TabsContent value="admin">
            <AdminLoginForm />
          </TabsContent>
        </Tabs>

        <p className="text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </main>
  );
};

export default Login;
