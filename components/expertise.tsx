"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Database, Cloud, Server, Code, Workflow } from "lucide-react"

export default function Expertise() {
  const expertiseAreas = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Backend Development",
      description: "Expert in Java and Spring Boot with a focus on building robust, scalable microservices.",
      skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "GraphQL"],
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Management",
      description: "Proficient in designing and optimizing both SQL and NoSQL database solutions.",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Design"],
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Infrastructure",
      description: "Experienced in deploying and managing applications on cloud platforms.",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code"],
      color: "from-green-600 to-teal-600",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "System Architecture",
      description: "Skilled in designing scalable, resilient system architectures for complex applications.",
      skills: ["System Design", "Distributed Systems", "Scalability", "Performance Optimization"],
      color: "from-orange-600 to-red-600",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Software Engineering",
      description: "Strong foundation in software engineering principles and best practices.",
      skills: ["OOP", "Design Patterns", "Clean Code", "TDD", "Code Reviews"],
      color: "from-pink-600 to-rose-600",
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Development Practices",
      description: "Advocate for efficient development workflows and collaborative processes.",
      skills: ["Agile", "JIRA", "Git", "DevOps", "Technical Documentation"],
      color: "from-indigo-600 to-purple-600",
    },
  ]

  return (
    <section id="expertise" className="py-16 relative">
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Areas of Expertise</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My technical specializations and core competencies across various domains.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="h-full border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden">
              <div className={`h-1.5 bg-gradient-to-r ${area.color}`}></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-full bg-gradient-to-r ${area.color} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold">{area.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      className={`bg-gradient-to-r ${area.color} text-white hover:opacity-90 transition-opacity`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
