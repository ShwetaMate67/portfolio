"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Cloud, Server, Code, Star, StarHalf } from "lucide-react"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("backend")

  const skillCategories = [
    {
      id: "backend",
      name: "Backend Development",
      icon: <Server className="h-5 w-5" />,
      color: "from-purple-600 to-pink-600",
      description: "Building robust server-side applications with Java, Spring Boot, and related technologies.",
      skills: [
        { name: "Java", level: 4.5, years: 5 },
        { name: "Spring Boot", level: 4.5, years: 4 },
        { name: "Microservices", level: 4, years: 3 },
        { name: "REST APIs", level: 4.5, years: 4 },
        { name: "GraphQL", level: 3, years: 2 },
        { name: "JPA/Hibernate", level: 4, years: 3 },
        { name: "JUnit/Mockito", level: 4, years: 3 },
        { name: "OAuth/JWT", level: 4, years: 3 },
      ],
    },
    {
      id: "database",
      name: "Database Systems",
      icon: <Database className="h-5 w-5" />,
      color: "from-blue-600 to-cyan-600",
      description: "Designing and implementing efficient database solutions for various data storage needs.",
      skills: [
        { name: "MySQL", level: 4.5, years: 4 },
        { name: "PostgreSQL", level: 4, years: 3 },
        { name: "MongoDB", level: 4, years: 3 },
        { name: "Redis", level: 4, years: 3 },
        { name: "Cassandra", level: 3, years: 2 },
        { name: "Oracle", level: 3, years: 2 },
        { name: "SQL", level: 4.5, years: 5 },
        { name: "Database Design", level: 4, years: 4 },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      color: "from-green-600 to-teal-600",
      description: "Deploying and managing applications in cloud environments with modern DevOps practices.",
      skills: [
        { name: "AWS", level: 4, years: 3 },
        { name: "Docker", level: 4, years: 3 },
        { name: "Kubernetes", level: 3, years: 2 },
        { name: "Jenkins", level: 3, years: 2 },
        { name: "CI/CD", level: 4, years: 3 },
        { name: "Linux", level: 4, years: 3 },
        { name: "Terraform", level: 3, years: 1 },
        { name: "AWS Lambda", level: 3, years: 2 },
      ],
    },
    {
      id: "frontend",
      name: "Frontend Technologies",
      icon: <Code className="h-5 w-5" />,
      color: "from-orange-600 to-red-600",
      description: "Creating responsive and interactive user interfaces for web applications.",
      skills: [
        { name: "JavaScript", level: 4, years: 3 },
        { name: "React", level: 3, years: 2 },
        { name: "HTML/CSS", level: 4, years: 3 },
        { name: "TypeScript", level: 3, years: 1 },
        { name: "Responsive Design", level: 4, years: 3 },
        { name: "UI/UX Principles", level: 3, years: 2 },
        { name: "RESTful Consumers", level: 4, years: 3 },
        { name: "Web Accessibility", level: 3, years: 2 },
      ],
    },
    {
      id: "tools",
      name: "Tools & Methodologies",
      icon: <Server className="h-5 w-5" />,
      color: "from-pink-600 to-purple-600",
      description: "Utilizing industry-standard tools and methodologies for efficient development.",
      skills: [
        { name: "Git", level: 4.5, years: 4 },
        { name: "Agile/Scrum", level: 4.5, years: 4 },
        { name: "JIRA", level: 4, years: 3 },
        { name: "Design Patterns", level: 4, years: 3 },
        { name: "TDD", level: 4, years: 3 },
        { name: "IntelliJ IDEA", level: 4.5, years: 4 },
        { name: "VS Code", level: 4, years: 3 },
        { name: "Postman", level: 4, years: 3 },
      ],
    },
  ]

  // Function to render stars based on skill level
  const renderStars = (level) => {
    const fullStars = Math.floor(level)
    const hasHalfStar = level % 1 !== 0
    const stars = []

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-primary text-primary" />)
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-primary text-primary" />)
    }

    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-primary/30" />)
    }

    return stars
  }

  const activeSkills = skillCategories.find((category) => category.id === activeCategory)

  return (
    <section id="skills" className="py-16 relative">
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
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My technical expertise across various domains and technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm h-full">
            <CardContent className="p-4">
              <div className="space-y-2">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3 ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : "hover:bg-primary/10"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activeCategory === category.id ? "bg-white/20" : "bg-primary/10"
                      }`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <div className="font-medium">{category.name}</div>
                      {activeCategory === category.id && (
                        <div className="text-xs opacity-80 mt-0.5 line-clamp-1">{category.description}</div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm h-full">
            <div className={`h-1.5 bg-gradient-to-r ${activeSkills.color}`}></div>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${activeSkills.color} flex items-center justify-center text-white`}
                >
                  {activeSkills.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{activeSkills.name}</h3>
                  <p className="text-muted-foreground text-sm">{activeSkills.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeSkills.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="relative"
                  >
                    <div className="p-4 border border-primary/10 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-200">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{skill.name}</h4>
                        <div className="text-sm text-muted-foreground">
                          {skill.years} {skill.years === 1 ? "year" : "years"}
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        {renderStars(skill.level)}
                        <span className="ml-2 text-sm text-muted-foreground">{skill.level.toFixed(1)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
