import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GalleryVerticalEnd, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";

const Register = () => {
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
            Already have an account?{" "}
            <a
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Login
            </a>
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                autoComplete="given-name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                autoComplete="family-name"
                required
              />
            </div>
            <div className="col-span-2 space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                autoComplete="new-password"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                autoComplete="new-password"
                required
              />
            </div>
            <div className="col-span-2">
              <Button type="submit" className="w-full">
                Register
              </Button>
            </div>
          </div>
        </form>

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

export default Register;
