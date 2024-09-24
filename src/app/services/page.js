"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Car, Droplets } from "lucide-react"
import Navbar from "@/components/Navbar";

export default function ServicesPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 animate-gradient-x"></div>
        <motion.div 
          className="max-w-3xl w-full relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Card className="backdrop-blur-md bg-white/80 shadow-xl">
            <CardHeader className="space-y-1">
              <motion.div variants={itemVariants}>
                <CardTitle className="text-2xl font-bold text-center">Our Services</CardTitle>
                <CardDescription className="text-center">We offer a variety of car wash services</CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <motion.div className="grid gap-2" variants={itemVariants}>
                <Card className="p-4">
                  <Car className="w-12 h-12 mb-4" />
                  <CardTitle>Exterior Wash</CardTitle>
                  <CardDescription>Thorough cleaning of your car's exterior, including wheels and windows.</CardDescription>
                </Card>
              </motion.div>
              <motion.div className="grid gap-2" variants={itemVariants}>
                <Card className="p-4">
                  <Droplets className="w-12 h-12 mb-4" />
                  <CardTitle>Interior Detailing</CardTitle>
                  <CardDescription>Deep cleaning of your car's interior, including vacuuming and surface cleaning.</CardDescription>
                </Card>
              </motion.div>
              <motion.div className="grid gap-2" variants={itemVariants}>
                <Card className="p-4">
                  <Car className="w-12 h-12 mb-4" />
                  <CardTitle>Full Service Wash</CardTitle>
                  <CardDescription>Complete interior and exterior cleaning for a like-new car experience.</CardDescription>
                </Card>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}