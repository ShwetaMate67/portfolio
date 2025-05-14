"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  Building,
  Calendar,
  MapPin,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

export default function Experience() {
  const [expandedExperience, setExpandedExperience] = useState(null)

  const toggleExpand = (index) => {
    if (expandedExperience === index) {
      setExpandedExperience(null)
    } else {
      setExpandedExperience(index)
    }
  }

  const experiences = [
    {
      title: "Website Manager",
      company: "DePaul University",
      location: "Chicago, USA",
      period: "08/2024 – Present",
      color: "from-blue-500 to-cyan-500",
      description: [
        "Rearchitected and built the official website for DePaul's Blue Book: Best American High School Writing, improving user experience and accessibility by 30%.",
        "Streamlined website architecture and improved content organization, increasing user engagement by 25%.",
      ],
      achievements: [
        "Increased website traffic by 30% through improved SEO and performance optimizations",
        "Reduced page load times by 40% through code optimization and asset management",
      ],
      skills: ["Web Development", "UX/UI", "Content Management", "SEO", "Accessibility"],
    },
    {
      title: "Software Developer",
      company: "DePaul iD Lab",
      location: "Chicago, USA",
      period: "04/2024 – 11/2024",
      color: "from-purple-500 to-pink-500",
      description: [
        "Designed and developed an intelligent chatbot using Spring Boot, implementing Retrieval-Augmented Generation (RAG) techniques to answer queries from custom technical documentation.",
        "Integrated Spring AI, Ollama with Mistal, and PGVector to enable semantic search and deliver accurate, context-aware responses, showcasing advanced use of Spring ecosystem tools.",
      ],
      achievements: [
        "Reduced response time for technical queries by 60% through AI-powered automation",
        "Achieved 85% accuracy in query responses, significantly improving user satisfaction",
      ],
      skills: ["Spring Boot", "RAG", "Spring AI", "PGVector", "Semantic Search", "Chatbot Development"],
    },
    {
      title: "Software Engineer (Level - G2)",
      company: "Xoriant Solutions Private Ltd",
      location: "Pune, India",
      period: "11/2021 – 05/2023",
      color: "from-orange-500 to-red-500",
      description: [
        "Accomplished migration of project architecture to microservices, by utilizing Agile practices, JIRA, and GIT throughout the development life cycle.",
        "Developed an SQL-based distributed storage solution utilizing PostgreSQL database, seamlessly integrated with React frontend and Java backend through Spring Data Repository within the Spring Boot environment.",
        "Enhanced authentication flow with JWT-based session validation using OAuth2 Spring Security principles for user data protection.",
        "Optimized system performance and scalability by integrating Redis caching into a Spring Boot environment, to store 20% of the total data for improved data access and processing.",
      ],
      achievements: [
        "Reduced system response time by 40% through Redis caching implementation",
        "Decreased deployment time by 60% through CI/CD pipeline optimization",
        "Improved system scalability, handling 3x more concurrent users after microservices migration",
      ],
      skills: [
        "Microservices",
        "Spring Boot",
        "PostgreSQL",
        "React",
        "JWT",
        "OAuth2",
        "Redis",
        "Kafka",
        "Jenkins",
        "Docker",
        "AWS",
        "Kubernetes",
      ],
    },
    {
      title: "Software Engineer Trainee",
      company: "Nihilent Technologies Inc.",
      location: "Pune, India",
      period: "03/2019 – 11/2021",
      color: "from-green-500 to-teal-500",
      description: [
        "Provide full lifecycle support to clients from initial client interaction and requirements analysis through design, implementation, debugging.",
        "Architected and deployed robust RESTful APIs utilizing Spring Boot, JPA, and JWT-based authentication, streamlining data flow, reducing response times by 50%, and fortifying application security.",
      ],
      achievements: [
        "Reduced API response times by 50% through optimized database queries and caching",
        "Improved code maintainability score by 25% through implementation of design patterns",
      ],
      skills: ["Spring Boot", "RESTful APIs", "JPA", "JWT", "Full Lifecycle Support", "Client Communication"],
    },
  ]

  return (
    <section id="experience" className="py-16 relative">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My career path and professional growth as a software engineer.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full hidden md:block"></div>

        <div className="space-y-12 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center z-10 hidden md:flex">
                <div className="w-4 h-4 rounded-full bg-background"></div>
              </div>

              {/* Year badge */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 bg-background border border-primary/20 text-primary font-bold py-1 px-3 rounded-full hidden md:block">
                {exp.period.split("–")[0].trim()}
              </div>

              {/* Content card - alternating sides */}
              <div
                className={`md:w-5/12 ${index % 2 === 0 ? "md:ml-auto md:mr-8" : "md:mr-auto md:ml-8"} relative z-10`}
              >
                <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden shadow-md">
                  <div className={`h-1.5 bg-gradient-to-r ${exp.color}`}></div>
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white`}
                        >
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <div className="text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Building className="h-4 w-4" /> {exp.company}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-lg mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex gap-2 text-muted-foreground"
                            >
                              <div className={`text-primary mt-1.5`}>•</div>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-medium text-lg mb-3">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.slice(0, 6).map((skill, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-primary/10 hover:bg-primary/20 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {exp.skills.length > 6 && (
                            <Badge variant="outline" className="cursor-pointer" onClick={() => toggleExpand(index)}>
                              +{exp.skills.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Achievements - expandable */}
                      <div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpand(index)}
                          className="text-primary hover:bg-primary/10 -ml-2 flex items-center gap-1"
                        >
                          {expandedExperience === index ? (
                            <>
                              <ChevronUp className="h-4 w-4" /> Hide Achievements
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4" /> View Achievements
                            </>
                          )}
                        </Button>

                        {expandedExperience === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 pt-3 border-t border-primary/10"
                          >
                            <h4 className="font-medium text-lg mb-3 flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary" /> Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                  className="flex gap-2 text-muted-foreground"
                                >
                                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>

                            {/* Additional skills if any */}
                            {exp.skills.length > 6 && (
                              <div className="mt-3 pt-3 border-t border-primary/10">
                                <h4 className="font-medium mb-2">Additional Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                  {exp.skills.slice(6).map((skill, i) => (
                                    <Badge
                                      key={i}
                                      variant="secondary"
                                      className="bg-primary/10 hover:bg-primary/20 transition-colors"
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="border-primary/20 hover:bg-primary/10 text-primary" asChild>
          <a
            href="/Shweta_Mate_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" /> View Full Resume
          </a>
        </Button>
      </div>
    </section>
  )
}
