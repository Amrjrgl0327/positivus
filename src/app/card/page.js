"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/toast";
import { useState } from "react";
import { ModeToggle } from "../_components/ModeToggle";
export function CardPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); //useRef

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(event);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(event);
  };

  function showToast() {
    const id = toast.add({
      title: "Event created",
      description: "Sunday, December 3 at 9:00 AM",
      actionProps: {
        children: "Undo",
        onClick() {
          toast.close(id);
        },
      },
    });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <ModeToggle />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  onChange={() => {
                    handleEmail(event);
                  }}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={() => {
                    handlePassword(event);
                  }}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <button
            type="submit"
            disabled={!email || !password}
            className={`w-full ${!email || !password ? "cursor-not-allowed pointer-events-none " : ""}`}
          >
            login
          </button>

          <a target="_blank" href="https://google.com">
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
export default CardPage;
