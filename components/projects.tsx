"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Code, Bot, Gamepad2, ArrowRight, Eye, Database } from "lucide-react"
import { ProjectModal } from "./project-modal"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: "AI Stock Market Chatbot",
      description:
        "Engineered an AI-driven chatbot leveraging Retrieval-Augmented Generation (RAG), LLMs, financial data APIs, and web scraping to deliver real-time stock insights and concise summaries of market news for enhanced user decision-making.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      icon: <Bot className="h-5 w-5" />,
      color: "from-purple-600 to-pink-600",
      technologies: ["Spring Boot", "RAG", "LLMs", "Financial APIs", "Web Scraping"],
      details: {
        challenge:
          "Creating an intelligent chatbot that could provide accurate, real-time stock market information and insights.",
        solution:
          "Implemented a Retrieval-Augmented Generation (RAG) architecture to combine the power of LLMs with real-time financial data. Integrated with financial APIs and web scraping to gather current market information.",
        features: [
          "Real-time stock price and trend information",
          "Natural language processing for user queries",
          "Market news summarization",
          "Personalized stock recommendations",
          "Historical data analysis and visualization",
        ],
        architecture:
          "The system uses a Spring Boot backend with Redis for caching, PostgreSQL for data storage, and integrates with various financial APIs. The RAG system combines vector embeddings with LLM processing to provide accurate responses.",
      },
    },
    {
      id: 2,
      title: "Expense Tracker App",
      description:
        "Engineered a robust RESTful API using Spring Boot and MongoDB to streamline expense management, enabling efficient handling of income, expenses, and category data through well-structured CRUD operations.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      icon: <Code className="h-5 w-5" />,
      color: "from-blue-600 to-cyan-600",
      technologies: ["Spring Boot", "MongoDB", "RESTful API", "JWT Authentication"],
      details: {
        challenge: "Building a scalable and user-friendly expense tracking application with robust data management.",
        solution:
          "Developed a Spring Boot application with MongoDB for flexible data storage, implementing comprehensive CRUD operations and secure authentication.",
        features: [
          "User authentication and authorization",
          "Income and expense tracking with categories",
          "Detailed financial reports and analytics",
          "Budget setting and notifications",
          "Data export functionality",
        ],
        architecture:
          "The application uses a microservice architecture with Spring Boot for the backend, MongoDB for data storage, and JWT for authentication. The frontend is built with React and communicates with the backend via RESTful APIs.",
      },
    },
    {
      id: 3,
      title: "Candy Catcher – Browser-Based Arcade Game",
      description:
        "Implemented AWS services such as DynamoDB and S3 for Candy Collector, reducing game load times by 40% and improving real-time score tracking, while staying within the free-tier limits to optimize costs.",
      image: "/placeholder.svg?height=400&width=600",
      category: "game",
      icon: <Gamepad2 className="h-5 w-5" />,
      color: "from-orange-600 to-red-600",
      technologies: ["JavaScript", "HTML5 Canvas", "AWS DynamoDB", "AWS S3", "Serverless"],
      details: {
        challenge:
          "Creating an engaging browser-based game with real-time score tracking while optimizing AWS resource usage to stay within free-tier limits.",
        solution:
          "Developed a lightweight HTML5 Canvas game with JavaScript and optimized asset loading through AWS S3. Used DynamoDB for efficient score tracking and leaderboard functionality while carefully designing the architecture to minimize AWS costs.",
        features: [
          "Fast-paced arcade gameplay",
          "Real-time score tracking and leaderboards",
          "Progressive difficulty levels",
          "Responsive design for mobile and desktop play",
          "Offline capability with local storage backup",
        ],
        architecture:
          "The game uses HTML5 Canvas for rendering, with game assets stored in S3 for fast loading. Player scores and game state are managed through DynamoDB, with Lambda functions handling the serverless backend operations.",
      },
    },
    {
      id: 4,
      title: "Real-Time ETL Pipeline",
      description:
        "Designed and implemented an end-to-end ETL pipeline to extract real-time user activity data from ScyllaDB, transform it using Python (Pandas), and load it into Snowflake for scalable analytics.",
      image: "/placeholder.svg?height=400&width=600",
      category: "data",
      icon: <Database className="h-5 w-5" />,
      color: "from-blue-600 to-indigo-600",
      technologies: ["Python", "Pandas", "Airflow", "ScyllaDB", "Snowflake", "ETL"],
      details: {
        challenge:
          "Building a scalable, reliable ETL pipeline to process large volumes of real-time user activity data for analytics purposes.",
        solution:
          "Implemented an end-to-end data pipeline using Python and Airflow to extract data from ScyllaDB, transform it with Pandas, and load it into Snowflake for analytics.",
        features: [
          "Automated hourly data extraction and processing",
          "Real-time user behavior insights",
          "Scalable data processing with Pandas",
          "Robust error handling and retry mechanisms",
          "Comprehensive data validation and quality checks",
        ],
        architecture:
          "The pipeline uses Airflow for orchestration and scheduling, Python with Pandas for data transformation, and connects ScyllaDB (source) to Snowflake (destination). The system includes monitoring, logging, and alerting to ensure data reliability.",
      },
    },
  ]

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="py-16 relative">
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
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my technical projects and problem-solving abilities.
        </p>
      </motion.div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-background/50 backdrop-blur-sm border border-primary/10">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary/20">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-primary/20">
              <Bot className="h-4 w-4 mr-2" /> AI
            </TabsTrigger>
            <TabsTrigger value="web" className="data-[state=active]:bg-primary/20">
              <Code className="h-4 w-4 mr-2" /> Web
            </TabsTrigger>
            <TabsTrigger value="game" className="data-[state=active]:bg-primary/20">
              <Gamepad2 className="h-4 w-4 mr-2" /> Game
            </TabsTrigger>
            <TabsTrigger value="data" className="data-[state=active]:bg-primary/20">
              <Database className="h-4 w-4 mr-2" /> Data
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                openModal={() => openProjectModal(project)}
              />
            ))}
          </div>
        </TabsContent>

        {["ai", "web", "game"].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === category)
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    openModal={() => openProjectModal(project)}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
        <TabsContent key="data" value="data" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => project.category === "data")
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  openModal={() => openProjectModal(project)}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {selectedProject && (
        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  )
}

function ProjectCard({ project, index, openModal }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden group border border-primary/10 bg-background/50 backdrop-blur-sm">
        <div className={`h-1.5 bg-gradient-to-r ${project.color}`}></div>
        <div className="relative overflow-hidden h-48">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button
              variant="default"
              size="sm"
              onClick={openModal}
              className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white w-full`}
            >
              <Eye className="mr-2 h-4 w-4" /> View Details
            </Button>
          </div>
          <div className="absolute top-3 left-3 z-10">
            <div
              className={`flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}
            >
              {project.icon}
              <span className="capitalize">{project.category}</span>
            </div>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="mb-3">
            <h3 className="text-lg font-bold mb-2 line-clamp-1">{project.title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <Badge key={i} variant="secondary" className="bg-primary/10 text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={openModal}
              className="text-primary hover:text-primary/80 hover:bg-primary/10 -ml-2 text-xs"
            >
              Learn more <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
