"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, CheckCircle, Code, Layers, Server } from "lucide-react"
import { motion } from "framer-motion"

export function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className={`h-1.5 bg-gradient-to-r ${project.color} -mx-6 -mt-6 mb-6`}></div>
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r ${project.color} text-white`}
            >
              {project.icon}
            </div>
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          </div>
          <DialogDescription className="text-base">{project.description}</DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <div className="relative h-64 overflow-hidden rounded-lg mb-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" /> The Challenge
                  </h3>
                  <p className="text-muted-foreground">{project.details.challenge}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" /> The Solution
                  </h3>
                  <p className="text-muted-foreground">{project.details.solution}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.details.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Server className="h-5 w-5 text-primary" /> Technical Architecture
                  </h3>
                  <p className="text-muted-foreground">{project.details.architecture}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-primary/10 hover:bg-primary/20 transition-colors">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Code
                </a>
              </Button>
              <Button className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white`}>
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
