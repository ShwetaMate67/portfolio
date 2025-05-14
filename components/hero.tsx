"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import TypewriterComponent from "typewriter-effect"

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Shweta Mate
            </span>
          </h1>
          <div className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-12">
            <TypewriterComponent
              options={{
                strings: ["Software Engineer", "Full Stack Developer", "Java & Spring Boot Expert", "Cloud Enthusiast"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Building robust, scalable applications with Java, Spring Boot, and cloud technologies. Currently pursuing a
            Master's in Information Systems at DePaul University.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/shwetamate01" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://linkedin.com/in/shwetamate" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <img src="/placeholder.svg?height=320&width=320" alt="Shweta Mate" className="object-cover w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
