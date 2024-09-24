"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function BookingPage() {
  const [date, setDate] = useState(new Date())

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }


  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 animate-gradient-x"></div>
      <motion.div 
        className="max-w-md w-full relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Card className="backdrop-blur-md bg-white/80 shadow-xl">
          <CardHeader className="space-y-1">
            <motion.div variants={itemVariants}>
              <CardTitle className="text-2xl font-bold text-center">Book Your Car Wash</CardTitle>
              <CardDescription className="text-center">Schedule a pickup for your car wash</CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent className="grid gap-4">
            <motion.div className="grid gap-2" variants={itemVariants}>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </motion.div>
            <motion.div className="grid gap-2" variants={itemVariants}>
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" placeholder="(91) 93456-78090" type="tel" />
            </motion.div>
            <motion.div className="grid gap-2" variants={itemVariants}>
              <Label htmlFor="pickup">Pickup Location</Label>
              <Textarea id="pickup" placeholder="Enter your pickup address" />
            </motion.div>
            <motion.div className="grid gap-2" variants={itemVariants}>
              <Label htmlFor="service">Service</Label>
              <Select>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="exterior">Exterior Wash</SelectItem>
                  <SelectItem value="interior">Interior Detailing</SelectItem>
                  <SelectItem value="full">Full Service Wash</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
            <motion.div className="grid gap-2" variants={itemVariants}>
              <Label htmlFor="date">Pickup Date</Label>
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
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </motion.div>
          </CardContent>
          <CardFooter>
            <motion.div className="w-full space-y-2" variants={itemVariants}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Book Pickup</Button>
              <Button variant="outline" className="w-full">Cancel</Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}