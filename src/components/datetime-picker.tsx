"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DatetimePicker() {
  const [date, setDate] = React.useState<Date>();
  const [time, setTime] = React.useState<string>("12:00");

  const dateAndTimeToDate = () => {
    if (!date) return;
    if (!time) return;

    const [hours, minutes] = time.split(":");
    const dateWithTime = new Date(date);
    dateWithTime.setHours(parseInt(hours));
    dateWithTime.setMinutes(parseInt(minutes));

    return format(dateWithTime, "yyyy-MM-dd HH:mm");
  }

  return (
    <div className="flex gap-2 w-full">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="flex flex-col space-y-2 p-2"
        >
          <Select
            onValueChange={(value: string) =>
              setDate(addDays(new Date(), parseInt(value)))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="1">Tomorrow</SelectItem>
              <SelectItem value="7">In a week</SelectItem>
              <SelectItem value="30">In a month</SelectItem>
              <SelectItem value="365">In a year</SelectItem>
            </SelectContent>
          </Select>
          <div className="rounded-md border">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </div>
        </PopoverContent>
      </Popover>

      <Input className="w-[110px]" type="time" name="__time" placeholder="12:00" defaultValue="12:00" onChange={(e) => setTime(e.target.value)} required />

      <input type="hidden" aria-hidden="true" name="unlockDate" value={dateAndTimeToDate() || ""} />
    </div>
  )
}
