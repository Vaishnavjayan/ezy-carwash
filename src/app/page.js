"use client"

import { Button } from "@/components/ui/button"
import { Car, Droplets, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar";

export default function EzyCarwash() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
  

      <main className="flex-grow">
        <motion.section 
          id="home" 
          className="bg-blue-500 text-white py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h2 className="text-4xl font-bold mb-4" variants={itemVariants}>Welcome to Ezy Carwash</motion.h2>
            <motion.p className="text-xl mb-8" variants={itemVariants}>Your car deserves the best care. We provide it.</motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/booking" passHref>
                <Button size="lg">Book Now</Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="services" 
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold mb-8 text-center" variants={itemVariants}>Our Services</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Car className="w-12 h-12 mb-4" />}
                title="Exterior Wash"
                description="Thorough cleaning of your car's exterior, including wheels and windows."
              />
              <ServiceCard 
                icon={<Droplets className="w-12 h-12 mb-4" />}
                title="Interior Detailing"
                description="Deep cleaning of your car's interior, including vacuuming and surface cleaning."
              />
              <ServiceCard 
                icon={<Car className="w-12 h-12 mb-4" />}
                title="Full Service Wash"
                description="Complete interior and exterior cleaning for a like-new car experience."
              />
            </div>
          </div>
        </motion.section>
      </main>

      <motion.footer 
        id="contact" 
        className="bg-gray-800 text-white py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="flex items-center mb-2"><Phone className="w-5 h-5 mr-2" /> (123) 456-7890</p>
              <p className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> 123 Main St, Anytown, USA</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours of Operation</h3>
              <p className="flex items-center mb-2"><Clock className="w-5 h-5 mr-2" /> Mon-Sat: 8am - 7pm</p>
              <p className="flex items-center"><Clock className="w-5 h-5 mr-2" /> Sun: 10am - 5pm</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">Facebook</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md text-center"
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
          scale: 1, 
          opacity: 1,
          transition: { 
            type: "spring",
            stiffness: 100
          }
        }
      }}
    >
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}