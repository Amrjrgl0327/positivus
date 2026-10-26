"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { ModeToggle } from "../_components/ModeToggle";

export default function Page() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <ModeToggle />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border flex justify-center items-center h-screen w-screen"
        captionLayout="dropdown"
      />
    </div>
  );
}
