"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, MapPin, Clock } from "lucide-react"
import Navbar from "@/components/Navbar";

export default function ContactPage() {
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-500 animate-gradient-x"></div>
        <motion.div 
          className="max-w-md w-full relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Card className="backdrop-blur-md bg-white/80 shadow-xl">
            <CardHeader className="space-y-1">
              <motion.div variants={itemVariants}>
                <CardTitle className="text-2xl font-bold text-center">Contact Us</CardTitle>
                <CardDescription className="text-center">Get in touch with us</CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <motion.div className="grid gap-2" variants={itemVariants}>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>(123) 456-7890</span>
                </div>
              </motion.div>
              <motion.div className="grid gap-2" variants={itemVariants}>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>123 Main St, Anytown, USA</span>
                </div>
              </motion.div>
              <motion.div className="grid gap-2" variants={itemVariants}>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  <span>Mon-Sat: 8am - 7pm</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  <span>Sun: 10am - 5pm</span>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}