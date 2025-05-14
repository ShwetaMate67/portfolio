"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User, Heart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 relative">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A passionate Software Engineer with expertise in Java, Spring Boot, and cloud technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border border-primary/10 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Professional Profile</h3>
              </div>

              <div className="text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm a passionate Software Engineer with over 4 years of experience specializing in Java, Spring Boot,
                  and cloud technologies. Currently pursuing a Master's in Information Systems at DePaul University, I
                  combine academic knowledge with practical expertise to build innovative solutions.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  My expertise spans backend development, microservices architecture, database design, and cloud
                  infrastructure. I'm committed to creating efficient, maintainable solutions that deliver exceptional
                  value while following industry best practices.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border border-primary/10 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"></div>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Beyond Coding</h3>
              </div>

              <div className="space-y-5 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="text-2xl mt-1">🧘‍♀️</div>
                  <div>
                    <span className="font-medium text-foreground">Pilates Enthusiast</span> - I practice pilates
                    regularly to maintain balance between mind and body, finding it essential for both physical and
                    mental well-being.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl mt-1">🎨</div>
                  <div>
                    <span className="font-medium text-foreground">Art & Sketching</span> - I love exploring
                    <span className="text-primary font-medium"> different forms of art</span>, particularly sketching,
                    which helps me express creativity outside the digital world.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl mt-1">✈️</div>
                  <div>
                    <span className="font-medium text-foreground">World Explorer</span> - Born in
                    <span className="text-primary font-medium"> Maharashtra, India</span>, I've traveled to Dubai,
                    Florida, Minnesota, Ohio, Punjab, Shimla, and various other parts of India, embracing diverse
                    cultures.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl mt-1">☕</div>
                  <div>
                    <span className="font-medium text-foreground">Coffee Aficionado</span> - A dedicated
                    <span className="text-primary font-medium"> coffee lover</span> who enjoys exploring different
                    brewing methods and discovering local cafés wherever I travel.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
