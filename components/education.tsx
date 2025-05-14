"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  School,
  BadgeIcon as Certificate,
  Code,
  Database,
  Server,
  Brain,
  BookMarked,
  CheckCircle2,
  Cloud,
} from "lucide-react"

export default function Education() {
  const [activeTab, setActiveTab] = useState("degrees")
  const [hoveredCourse, setHoveredCourse] = useState(null)

  const education = [
    {
      degree: "Master of Information Systems",
      institution: "DePaul University",
      location: "Chicago, IL",
      period: "09/2023 – 06/2025",
      gpa: "3.9/4",
      color: "from-purple-600 to-pink-600",
      courses: [
        {
          name: "Systems Analysis & Design",
          description: "Techniques for analyzing business requirements and designing effective information systems.",
          icon: <Server className="h-4 w-4" />,
        },
        {
          name: "Cloud Computing",
          description: "Principles and practices of cloud infrastructure, services, and deployment models.",
          icon: <Cloud className="h-4 w-4" />,
        },
        {
          name: "Database Programming",
          description: "Advanced database concepts, query optimization, and programming techniques.",
          icon: <Database className="h-4 w-4" />,
        },
        {
          name: "Data Warehousing",
          description: "Design and implementation of data warehouses for business intelligence applications.",
          icon: <Database className="h-4 w-4" />,
        },
        {
          name: "Python Programming",
          description: "Programming fundamentals and advanced concepts using Python language.",
          icon: <Code className="h-4 w-4" />,
        },
      ],
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Savitribai Phule Pune University",
      location: "Pune, India",
      period: "06/2014 – 05/2018",
      gpa: "4/4",
      color: "from-blue-600 to-cyan-600",
      courses: [
        {
          name: "Data Structures and Algorithm",
          description: "Fundamental data structures, algorithms, and their analysis and implementation.",
          icon: <Code className="h-4 w-4" />,
        },
        {
          name: "Operating Systems",
          description: "Principles and design of operating systems, process management, and memory allocation.",
          icon: <Server className="h-4 w-4" />,
        },
        {
          name: "DBMS",
          description: "Database management systems, relational models, and SQL programming.",
          icon: <Database className="h-4 w-4" />,
        },
        {
          name: "Object Oriented Programming",
          description: "OOP concepts, design patterns, and implementation using Java and C++.",
          icon: <Code className="h-4 w-4" />,
        },
        {
          name: "Web Programming",
          description: "Web development technologies, client-server architecture, and responsive design.",
          icon: <Code className="h-4 w-4" />,
        },
      ],
    },
  ]

  const certifications = [
    {
      name: "System Design",
      issuer: "AlgoExpert",
      date: "2023",
      description:
        "Comprehensive training in designing scalable systems, covering topics like load balancing, caching, database sharding, and microservices architecture.",
      skills: ["Distributed Systems", "Scalability", "Microservices", "Database Design", "API Design"],
      color: "from-blue-600 to-cyan-600",
      icon: <Server className="h-6 w-6" />,
    },
    {
      name: "Data Structures & Algorithms",
      issuer: "AlgoExpert",
      date: "2022",
      description:
        "Mastered advanced algorithms and data structures by solving 500+ coding problems, covering arrays, strings, linked lists, trees, dynamic programming, and more.",
      skills: ["Problem Solving", "Algorithms", "Data Structures", "Time Complexity", "Space Complexity"],
      color: "from-green-600 to-emerald-600",
      icon: <Code className="h-6 w-6" />,
    },
    {
      name: "Machine Learning",
      issuer: "AlgoExpert",
      date: "2023",
      description:
        "In-depth training on machine learning concepts, algorithms, and practical implementations for real-world applications.",
      skills: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Neural Networks",
        "Model Evaluation",
        "Feature Engineering",
      ],
      color: "from-purple-600 to-violet-600",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      name: "Infrastructure",
      issuer: "AlgoExpert",
      date: "2022",
      description:
        "Comprehensive training on cloud infrastructure, DevOps practices, and deployment strategies for modern applications.",
      skills: ["Cloud Computing", "Containerization", "CI/CD", "Infrastructure as Code", "Monitoring"],
      color: "from-orange-600 to-red-600",
      icon: <Database className="h-6 w-6" />,
    },
  ]

  return (
    <section id="education" className="py-16 relative">
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
        <h2 className="text-3xl font-bold mb-4">Academic Journey</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My educational background and professional certifications.
        </p>
      </motion.div>

      <Tabs defaultValue="degrees" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-background/50 backdrop-blur-sm border border-primary/10">
            <TabsTrigger value="degrees" className="data-[state=active]:bg-primary/20">
              <School className="h-4 w-4 mr-2" /> Degrees
            </TabsTrigger>
            <TabsTrigger value="certifications" className="data-[state=active]:bg-primary/20">
              <Certificate className="h-4 w-4 mr-2" /> Certifications
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="degrees" className="mt-0">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${edu.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center text-white`}
                          >
                            <GraduationCap size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                          </div>
                        </div>

                        <div className="space-y-3 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-primary" />
                            <span>
                              GPA: <span className="font-medium text-foreground">{edu.gpa}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="md:w-2/3 md:border-l border-primary/10 md:pl-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-10 h-10 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center text-white`}
                          >
                            <BookMarked size={20} />
                          </div>
                          <h4 className="text-xl font-bold">Relevant Coursework</h4>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                          {edu.courses.map((course, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="relative"
                              onMouseEnter={() => setHoveredCourse(`${index}-${i}`)}
                              onMouseLeave={() => setHoveredCourse(null)}
                            >
                              <div
                                className={`p-3 rounded-lg border transition-all duration-300 ${
                                  hoveredCourse === `${index}-${i}`
                                    ? `border-primary/30 bg-gradient-to-r ${edu.color} bg-opacity-10 shadow-md`
                                    : "border-primary/10 bg-primary/5"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                      hoveredCourse === `${index}-${i}`
                                        ? `bg-gradient-to-r ${edu.color} text-white`
                                        : "bg-primary/10 text-primary"
                                    } transition-colors duration-300`}
                                  >
                                    {course.icon || <CheckCircle2 className="h-4 w-4" />}
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="font-medium">{course.name}</h5>
                                    {hoveredCourse === `${index}-${i}` && (
                                      <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-sm text-muted-foreground mt-1"
                                      >
                                        {course.description}
                                      </motion.p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-primary/10">
                          <h4 className="font-medium text-lg mb-3">Skills Acquired</h4>
                          <div className="flex flex-wrap gap-2">
                            {index === 0
                              ? [
                                  "Systems Analysis",
                                  "Cloud Technologies",
                                  "Database Design",
                                  "Data Warehousing",
                                  "Python",
                                  "Project Management",
                                ].map((skill, i) => (
                                  <Badge
                                    key={i}
                                    variant="secondary"
                                    className="bg-primary/10 hover:bg-primary/20 transition-colors"
                                  >
                                    {skill}
                                  </Badge>
                                ))
                              : [
                                  "Data Structures",
                                  "Algorithms",
                                  "Operating Systems",
                                  "Database Management",
                                  "OOP",
                                  "Web Development",
                                ].map((skill, i) => (
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="certifications" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${cert.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-white`}
                      >
                        {cert.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{cert.name}</h3>
                        <div className="text-sm text-muted-foreground">
                          {cert.issuer} • {cert.date}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{cert.description}</p>

                    <div>
                      <h4 className="font-medium mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            className={`bg-gradient-to-r ${cert.color} text-white hover:opacity-90 transition-opacity`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
