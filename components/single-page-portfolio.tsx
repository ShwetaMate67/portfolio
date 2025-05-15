"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import TypewriterComponent from "typewriter-effect"
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Briefcase,
  Code,
  Database,
  Server,
  Cloud,
  Gamepad2,
  GraduationCap,
  ExternalLink,
  Eye,
  User,
  Heart,
  Cpu,
  Award,
  ChevronDown,
  Menu,
  X,
  Download,
  Globe,
  Layers,
  Star,
  StarHalf,
} from "lucide-react"
import { ProjectModal } from "./project-modal"
import { useMobile } from "@/hooks/use-mobile"
import { Calendar } from "lucide-react"

export default function SinglePagePortfolio() {
  const { toast } = useToast()
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''
  const [activeSection, setActiveSection] = useState("hero")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [formError, setFormError] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    expertise: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    certifications: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  }

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Find which section is currently in view
      const sectionOffsets = Object.entries(sectionRefs).map(([id, ref]) => ({
        id,
        offset: ref.current?.getBoundingClientRect().top,
      }))

      const currentSection = sectionOffsets
        .filter((section) => section.offset !== undefined)
        .reduce(
          (closest, current) => {
            if (current.offset <= 100 && (closest.offset < current.offset || closest.offset > 100)) {
              return current
            }
            return closest
          },
          { id: "hero", offset: Number.POSITIVE_INFINITY },
        )

      setActiveSection(currentSection.id)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
    const section = sectionRefs[sectionId].current
    if (section) {
      const navbarHeight = 80 // Adjust based on your navbar height
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })
    }
  }

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Friends Website",
      description:
        "A retro-themed website created for the Codedex Hackathon using React and Tailwind CSS, featuring nostalgic design elements and responsive layouts.",
      // COMMENT: Replace with actual project image - recommended size 600x400px
      image: "/react.svg?height=400&width=600",
      category: "web",
      icon: <Globe className="h-5 w-5" />,
      color: "from-blue-600 to-cyan-600",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/ShwetaMate67/Friends-Website",
      details: {
        challenge: "Creating a nostalgic, retro-themed website with modern web technologies for the Codedex Hackathon.",
        solution:
          "Developed a responsive website using React and Tailwind CSS that captures the essence of retro web design while maintaining modern functionality and user experience.",
        features: [
          "Retro visual design elements",
          "Responsive layouts for all device sizes",
          "Modern React components with retro styling",
          "Optimized performance",
          "Accessibility considerations",
        ],
        architecture:
          "The application uses React for the frontend with Tailwind CSS for styling. Components are organized in a modular fashion for maintainability and reusability.",
      },
    },
    {
      id: 2,
      title: "Expense Tracker System",
      description:
        "Developed an Expense Tracker application using Java (Spring Boot) for backend logic and MongoDB for NoSQL data storage, allowing users to add, update, delete, and categorize expenses with secure data handling and user-friendly API endpoints.",
      // COMMENT: Replace with actual project image - recommended size 600x400px
      image: "/sbmongo.png?height=400&width=600",
      category: "web",
      icon: <Database className="h-5 w-5" />,
      color: "from-green-600 to-teal-600",
      technologies: ["Java", "Spring Boot", "MongoDB", "RESTful API", "JWT Authentication"],
      github: "https://github.com/ShwetaMate67/Expense-Tracker-System",
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
      title: "Trivia Monolithic",
      description:
        "A monolithic trivia application built with Java Spring Boot and PostgreSQL that allows users to add, update, delete, and fetch questions with comprehensive CRUD operations.",
      // COMMENT: Replace with actual project image - recommended size 600x400px
      image: "/sbpostgres.png?height=400&width=600",
      category: "web",
      icon: <Layers className="h-5 w-5" />,
      color: "from-purple-600 to-pink-600",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "RESTful API", "JPA/Hibernate"],
      github: "https://github.com/ShwetaMate67/Trivia-Monolithic",
      details: {
        challenge:
          "Creating a comprehensive trivia application with full CRUD functionality for managing questions and categories.",
        solution:
          "Developed a monolithic application using Spring Boot and PostgreSQL that provides a robust backend for trivia question management with RESTful API endpoints.",
        features: [
          "Complete CRUD operations for trivia questions",
          "Category management",
          "Search and filter functionality",
          "Pagination for large datasets",
          "Secure API endpoints",
        ],
        architecture:
          "The application follows a monolithic architecture using Spring Boot with PostgreSQL for data persistence. It implements the MVC pattern with controllers, services, and repositories for clean separation of concerns.",
      },
    },
    {
      id: 4,
      title: "Candy Catcher – Browser-Based Arcade Game",
      description:
        "Implemented AWS services such as DynamoDB and S3 for Candy Collector, reducing game load times and improving real-time score tracking, while staying within the free-tier limits to optimize costs. Frontend built with Phaser.js.",
      // COMMENT: Replace with actual project image - recommended size 600x400px
      image: "/aws.jpeg?height=400&width=600",
      category: "game",
      icon: <Gamepad2 className="h-5 w-5" />,
      color: "from-orange-600 to-red-600",
      technologies: ["JavaScript", "Phaser.js", "AWS DynamoDB", "AWS S3", "Serverless"],
      github: "https://github.com/ShwetaMate67/AWS-Hackathon",
      details: {
        challenge:
          "Creating an engaging browser-based game with real-time score tracking while optimizing AWS resource usage to stay within free-tier limits.",
        solution:
          "Developed a lightweight HTML5 game with Phaser.js and optimized asset loading through AWS S3. Used DynamoDB for efficient score tracking and leaderboard functionality while carefully designing the architecture to minimize AWS costs.",
        features: [
          "Fast-paced arcade gameplay",
          "Real-time score tracking and leaderboards",
          "Progressive difficulty levels",
          "Responsive design for mobile and desktop play",
          "Offline capability with local storage backup",
        ],
        architecture:
          "The game uses Phaser.js for rendering, with game assets stored in S3 for fast loading. Player scores and game state are managed through DynamoDB, with Lambda functions handling the serverless backend operations.",
      },
    },
    {
      id: 5,
      title: "Spring Security Implementation",
      description:
        "A comprehensive implementation of Spring Security featuring JWT authentication and OAuth2 integration for secure application access and user management.",
      // COMMENT: Replace with actual project image - recommended size 600x400px
      image: "/jwt.png?height=400&width=600",
      category: "web",
      icon: <Server className="h-5 w-5" />,
      color: "from-blue-600 to-indigo-600",
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "OAuth2"],
      github: "https://github.com/ShwetaMate67/Spring-Security",
      details: {
        challenge:
          "Implementing robust security measures for web applications using modern authentication and authorization techniques.",
        solution:
          "Developed a Spring Security implementation that showcases JWT token-based authentication and OAuth2 integration for secure and flexible user authentication.",
        features: [
          "JWT token-based authentication",
          "OAuth2 integration for third-party login",
          "Role-based access control",
          "Secure password handling",
          "Token refresh mechanisms",
        ],
        architecture:
          "The application uses Spring Boot with Spring Security for the security framework. JWT is used for stateless authentication, while OAuth2 provides integration with external identity providers.",
      },
    },
    {
      id: 6,
      title: "GoodBites - Food Donation App",
      description:
        "A food donation application built with Swift that connects food donors with recipients to reduce food waste and help those in need.",
      // COMMENT: Replace with actual project image - recommended size 600x400px
      image: "/swift.png?height=400&width=600",
      category: "mobile",
      icon: <Heart className="h-5 w-5" />,
      color: "from-pink-600 to-rose-600",
      technologies: ["Swift", "iOS", "Firebase", "MapKit", "Core Location"],
      github: "https://github.com/ShwetaMate67/GoodBites",
      details: {
        challenge:
          "Creating a mobile platform to connect food donors with recipients to reduce food waste and address food insecurity.",
        solution:
          "Developed an iOS application using Swift that provides a user-friendly interface for food donation management, with features for listing, finding, and claiming food donations.",
        features: [
          "User profiles for donors and recipients",
          "Location-based donation discovery",
          "Real-time notifications",
          "Donation tracking and history",
          "In-app messaging between donors and recipients",
        ],
        architecture:
          "The application is built with Swift for iOS devices, using Firebase for backend services including authentication, database, and storage. MapKit and Core Location are used for location-based features.",
      },
    },
  ]

  // Experience data
  const experiences = [
    {
      title: "Website Manager",
      company: "DePaul University",
      location: "Chicago, USA",
      period: "08/2024 – Present",
      color: "from-blue-500 to-cyan-500",
      description: [
        "Rearchitected and built the official website for DePaul's Blue Book: Best American High School Writing, improving user experience and accessibility by 30%.",
        "Streamlined website architecture and enhanced content organization, increasing user engagement by 25%, with the use of Google Analytics to measure performance and identify areas for optimization.",
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
      skills: ["Spring Boot", "RAG", "Spring AI", "PGVector", "Semantic Search", "Chatbot Development"],
    },
    {
      title: "Software Engineer (Level - G2)",
      company: "Xoriant Solutions Private Ltd",
      location: "Pune, India",
      period: "11/2021 – 05/2023",
      color: "from-orange-500 to-red-500",
      description: [
        "Redesigned and migrated a monolithic application to a scalable microservices architecture using Java, Spring Boot, and Spring Data JPA, improving modularity and system resilience.",
        "Containerized and deployed microservices on AWS using Docker and Kubernetes (EKS), ensuring efficient scaling and high availability.",
        "Configured CI/CD pipelines using Jenkins to automate build, test, and deployment processes, significantly reducing delivery time.",
        "Implemented OAuth2 and Spring Security for secure authentication, and enhanced observability by integrating monitoring tools such as Prometheus and Grafana.",
      ],
      skills: ["Microservices", "Spring Boot", "PostgreSQL", "React", "JWT", "OAuth2", "Redis", "Kafka", "Jenkins"],
    },
    {
      title: "Software Engineer Trainee",
      company: "Nihilent Technologies",
      location: "Pune, India",
      period: "03/2019 – 11/2021",
      color: "from-orange-500 to-red-500",
      description: [
        "Developed and maintained Java-based applications using Java 11+, Spring Boot, and Spring MVC, ensuring the creation of scalable and robust RESTful APIs and Web Services (REST/SOAP) for Cashiering technical environments.",
        "Designed, developed, and managed REST and SOAP-based Web Services, with hands-on experience in creating PaaS-ready distributed services exposed via Web API to channel partners.",
        "Collaborated with cross-functional teams including Product Owners, Project Management, Business, QA, and Technology Operations to ensure timely, high-quality delivery of software projects within budget.",
      ],
      skills: ["Microservices", "Spring Boot", "PostgreSQL", "React", "JWT", "OAuth2", "Redis", "Kafka", "Jenkins"],
    },
  ]

  // Certifications
  const certifications = [
    {
      name: "System Design",
      issuer: "AlgoExpert",
      date: "2025",
      color: "from-blue-600 to-cyan-600",
      icon: <Server className="h-5 w-5" />,
      description:
        "Comprehensive training in designing scalable systems, covering load balancing, caching, database sharding, and microservices architecture.",
    },
    {
      name: "Data Structures & Algorithms",
      issuer: "AlgoExpert",
      date: "2025",
      color: "from-green-600 to-emerald-600",
      icon: <Code className="h-5 w-5" />,
      description:
        "Mastery of advanced algorithms and data structures, solving complex coding problems covering arrays, linked lists, trees, dynamic programming, and more.",
    },
    {
      name: "Infrastructure Expert",
      issuer: "AlgoExpert",
      date: "2025",
      color: "from-orange-600 to-red-600",
      icon: <Cloud className="h-5 w-5" />,
      description:
        "Comprehensive training on cloud infrastructure, DevOps practices, and deployment strategies for modern applications.",
    },
    {
      name: "Machine Learning",
      issuer: "AlgoExpert",
      date: "2025",
      color: "from-purple-600 to-violet-600",
      icon: <Database className="h-5 w-5" />,
      description:
        "In-depth training on machine learning concepts, algorithms, and practical implementations for real-world applications.",
    },
    {
      name: "iOS Development",
      issuer: "AlgoExpert",
      date: "2025",
      color: "from-pink-600 to-rose-600",
      icon: <Layers className="h-5 w-5" />,
      description:
        "Comprehensive training in iOS app development using Swift, UIKit, and SwiftUI for creating modern mobile applications.",
    },
    {
      name: "Frontend Development",
      issuer: "AlgoExpert",
      date: "2025",
      color: "from-yellow-600 to-amber-600",
      icon: <Code className="h-5 w-5" />,
      description:
        "Comprehensive training in modern frontend technologies including HTML, CSS, JavaScript, and React for building responsive and interactive web applications.",
    },
  ]

  // Education data
  const education = [
    {
      degree: "Master of Information Systems",
      institution: "DePaul University",
      location: "Chicago, IL",
      period: "09/2023 – 06/2025",
      gpa: "3.8/4",
      color: "from-purple-600 to-pink-600",
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Savitribai Phule Pune University",
      location: "Pune, India",
      period: "06/2014 – 05/2018",
      gpa: "4/4",
      color: "from-blue-600 to-cyan-600",
    },
  ]

  // Expertise areas
  const expertiseAreas = [
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Backend Development",
      description: "Expert in Java and Spring Boot with a focus on building robust, scalable microservices.",
      skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "GraphQL"],
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Database Management",
      description: "Proficient in designing and optimizing both SQL and NoSQL database solutions.",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Design"],
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "Cloud Infrastructure",
      description: "Experienced in deploying and managing applications on cloud platforms.",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Kafka", "Infrastructure as Code"],
      color: "from-green-600 to-teal-600",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Frontend Development",
      description: "Skilled in building responsive and interactive user interfaces with modern frameworks.",
      skills: ["React", "Angular", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
      color: "from-orange-600 to-red-600",
    },
  ]

  // Contact info
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "shwetamate0109@gmail.com",
      link: "mailto:shwetamate0109@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+1 (872) 239-2679",
      link: "tel:+18722392679",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Chicago, IL, USA",
      link: "https://maps.google.com/?q=Chicago,IL,USA",
      color: "from-pink-500 to-orange-500",
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

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  // Navigation links
  const navLinks = [
    { name: "Home", id: "hero", icon: <User className="h-4 w-4" /> },
    { name: "About", id: "about", icon: <User className="h-4 w-4" /> },
    { name: "Expertise", id: "expertise", icon: <Cpu className="h-4 w-4" /> },
    { name: "Experience", id: "experience", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Projects", id: "projects", icon: <Code className="h-4 w-4" /> },
    { name: "Certifications", id: "certifications", icon: <Award className="h-4 w-4" /> },
    { name: "Education", id: "education", icon: <GraduationCap className="h-4 w-4" /> },
    { name: "Contact", id: "contact", icon: <Mail className="h-4 w-4" /> },
  ]

  return (
    <>
      {/* Floating Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-primary/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("hero")
              }}
              className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
            >
              Shweta Mate
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.id)
                  }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-primary/10 flex items-center gap-1.5 ${
                    activeSection === link.id
                      ? "text-primary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
              {/* Resume download button - both views and downloads the resume */}
              <Button
                asChild
                size="sm"
                className="ml-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
              >
                <a
                  href="/Shweta_Mate_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Shweta_Mate_Resume.pdf"
                  className="flex items-center gap-1.5"
                >
                  <Download className="h-4 w-4" /> Resume
                </a>
              </Button>
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center md:hidden">
              <Button
                variant={isScrolled ? "outline" : "ghost"}
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className={isMenuOpen ? "bg-primary/10 text-primary" : ""}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-b border-primary/10 shadow-lg"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    className={`flex items-center gap-2 px-4 py-3 rounded-md ${
                      activeSection === link.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "hover:bg-primary/5 text-foreground/80 hover:text-primary"
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.id)
                    }}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                    {activeSection === link.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"></div>}
                  </a>
                ))}
                <div className="pt-2">
                  {/* Mobile resume download button - both views and downloads the resume */}
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
                  >
                    <a
                      href="/Shweta_Mate_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Shweta_Mate_Resume.pdf"
                      className="flex items-center justify-center gap-2"
                    >
                      <Download className="h-4 w-4" /> Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        id="hero"
        className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
      >
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 inline-block"
              >
                <div className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm inline-flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  Available for new opportunities
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Shweta Mate
                </span>
              </h1>
              <div className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-12">
                <TypewriterComponent
                  options={{
                    strings: [
                      "Software Engineer",
                      "Full Stack Developer",
                      "Java & Spring Boot Expert",
                      "Cloud Enthusiast",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              🚀 Building robust, scalable applications with Java, Spring Boot, and ☁️ cloud technologies. 🎓 Currently
              pursuing a Master's in Information Systems at DePaul University in{" "}
                <span className="font-medium">Chicago, IL, USA</span>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:bg-primary/10 transition-all duration-300"
                >
                  <a href="https://github.com/ShwetaMate67" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:bg-primary/10 transition-all duration-300"
                >
                  <a href="https://www.linkedin.com/in/shwetasanjaymate/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12 flex items-center"
              >
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary group"
                  onClick={() => scrollToSection("about")}
                >
                  <span>Scroll to explore</span>
                  <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="order-1 md:order-2 flex justify-center"
            >
              {/* Add a profile image with a comment */}
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-xl animate-pulse"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 bg-background/50 backdrop-blur-sm">
                  {/* COMMENT: Replace with your actual profile image - recommended size 320x320px */}
                  <img
                    src={`${basePath}/profile.jpeg`}
                    alt="Shweta Mate"
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-primary/20 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for hire</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} id="about" className="py-20 relative">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate Software Engineer 👩‍💻 with expertise in Java ☕, Spring Boot 🌱, and cloud technologies ☁️.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-primary/10 overflow-hidden bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500">
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
                    I'm a passionate Software Engineer 👩‍💻 with over 4 years of experience specializing in Java ☕, 
                    Spring Boot 🌱, and cloud technologies ☁️. Currently pursuing a Master's in Information Systems 🎓 at DePaul 
                    University in Chicago, IL, USA 🇺🇸, I combine academic knowledge with practical expertise to 
                    build innovative solutions 💡.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                    My expertise spans backend development 🛠️, microservices architecture 🧩, database design 🗄️, 
                    and cloud infrastructure ⚙️. I'm committed to creating efficient, maintainable solutions ✅ that deliver 
                    exceptional value 💼 while following industry best practices 📈.
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
              <Card className="h-full border border-primary/10 overflow-hidden bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-500">
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
                        <span className="text-primary font-medium"> different forms of art</span>, particularly
                        sketching, which helps me express creativity outside the digital world.
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
        </div>
      </section>

      {/* Expertise Section */}
      <section
        ref={sectionRefs.expertise}
        id="expertise"
        className="py-20 relative bg-gradient-to-b from-background/50 to-background"
      >
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Areas of Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical specializations and core competencies across various domains include💡
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <Card className="h-full border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500">
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
        </div>
      </section>

      {/* Experience Section */}
      <section ref={sectionRefs.experience} id="experience" className="py-20 relative">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            My Journey as a Software Engineer 👩‍💻 | Growth, Challenges & Milestones 🚀
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
                    <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500">
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
                                <span className="flex items-center gap-1">{exp.company}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                            <span className="flex items-center gap-1">{exp.period}</span>
                            <span className="flex items-center gap-1">{exp.location}</span>
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
                              {exp.skills.map((skill, i) => (
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
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            {/* Resume download button - both views and downloads the resume */}
            <Button variant="outline" className="border-primary/20 hover:bg-primary/10 text-primary" asChild>
              <a
                href="/Shweta_Mate_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Shweta_Mate_Resume.pdf"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" /> View Full Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={sectionRefs.projects}
        id="projects"
        className="py-20 relative bg-gradient-to-b from-background to-background/50"
      >
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            🚀 Highlighting my technical projects and knack for solving real-world problems 🧠
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full overflow-hidden group border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500">
                  <div className={`h-1.5 bg-gradient-to-r ${project.color}`}></div>
                  <div className="relative overflow-hidden h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* COMMENT: Replace with actual project image - recommended size 600x400px */}
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => openProjectModal(project)}
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
                        onClick={() => openProjectModal(project)}
                        className="text-primary hover:text-primary/80 hover:bg-primary/10 -ml-2 text-xs"
                      >
                        Learn more <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {selectedProject && (
            <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          )}
        </div>
      </section>

      {/* Certifications Section */}
      <section ref={sectionRefs.certifications} id="certifications" className="py-20 relative">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise 🎓 and commitment to continuous learning 📚✨.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500">
                  <div className={`h-1.5 bg-gradient-to-r ${cert.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {cert.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{cert.name}</h3>
                        <div className="text-sm text-muted-foreground">
                          {cert.issuer} • {cert.date}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    <div className="mt-4 pt-4 border-t border-primary/10">
                      <div className="flex justify-between items-center">
                        <Badge className={`bg-gradient-to-r ${cert.color} text-white`}>{cert.issuer}</Badge>
                        <span className="text-sm text-muted-foreground">{cert.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        ref={sectionRefs.education}
        id="education"
        className="py-20 relative bg-gradient-to-b from-background/50 to-background"
      >
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Academic Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational background 🎓 and academic achievements 🏆.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500">
                  <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center text-white`}
                      >
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
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
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-primary/10">
                        <div className="flex items-center justify-between">
                          <Badge className={`bg-gradient-to-r ${edu.color} text-white`}>
                            {edu.period.split("–")[0].trim()} - {edu.period.split("–")[1].trim()}
                          </Badge>
                          <Badge variant="outline">{edu.gpa} GPA</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} id="contact" className="py-20 relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center relative z-10"
          >
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
            💭 Got a project idea or thinking about collaborating? 🤔 Let's connect — I'd love to hear from you! 💬💡
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <Card className="overflow-hidden border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500">
                <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={index}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 group p-3 rounded-lg transition-all duration-300 hover:bg-primary/5"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{info.title}</h4>
                          <p className="text-muted-foreground group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-primary" />
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-10 pt-6 border-t border-border">
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <span className="inline-block w-4 h-4 rounded-full bg-green-500 animate-pulse"></span>
                      Currently Available For Work
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      I'm currently looking for new opportunities in software engineering and full-stack development
                      roles.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="overflow-hidden border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500">
                <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                  {formError && (
                    <Alert variant="destructive" className="mb-6">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{formError}</AlertDescription>
                    </Alert>
                  )}

                  {formSuccess && (
                    <Alert className="mb-6 border-green-500 text-green-500">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        Your message has been received! I'll get back to you as soon as possible.
                      </AlertDescription>
                    </Alert>
                  )}

                  {/* Simple contact form using Formspree */}
                  <form
                    action="https://formspree.io/f/meogkrgw"
                    method="POST"
                    className="space-y-6"
                    onSubmit={(e) => {
                      setIsSubmitting(true)
                      // Let the form submit naturally to Formspree
                      setTimeout(() => {
                        toast({
                          title: "Message sent!",
                          description: "Thank you for your message. I'll get back to you soon.",
                        })
                        setFormSuccess(true)
                        setIsSubmitting(false)
                        // Reset form after submission (Formspree will handle this too)
                        const form = e.target as HTMLFormElement
                        setTimeout(() => form.reset(), 100)
                      }, 1000)
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 relative">
                        <div className="relative">
                          <Input
                            id="name"
                            name="name"
                            placeholder=" "
                            required
                            className={`pt-4 transition-all duration-200 border-border focus:border-primary ${
                              focusedField === "name" ? "border-primary" : ""
                            }`}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                          />
                          <label
                            htmlFor="name"
                            className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                              focusedField === "name"
                                ? "text-xs text-primary top-1"
                                : "text-muted-foreground text-sm top-3"
                            }`}
                          >
                            Your Name
                          </label>
                        </div>
                      </div>
                      <div className="space-y-2 relative">
                        <div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder=" "
                            required
                            className={`pt-4 transition-all duration-200 border-border focus:border-primary ${
                              focusedField === "email" ? "border-primary" : ""
                            }`}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                          />
                          <label
                            htmlFor="email"
                            className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                              focusedField === "email"
                                ? "text-xs text-primary top-1"
                                : "text-muted-foreground text-sm top-3"
                            }`}
                          >
                            Your Email
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 relative">
                      <div className="relative">
                        <Input
                          id="subject"
                          name="subject"
                          placeholder=" "
                          required
                          className={`pt-4 transition-all duration-200 border-border focus:border-primary ${
                            focusedField === "subject" ? "border-primary" : ""
                          }`}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                        />
                        <label
                          htmlFor="subject"
                          className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                            focusedField === "subject"
                              ? "text-xs text-primary top-1"
                              : "text-muted-foreground text-sm top-3"
                          }`}
                        >
                          Subject
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2 relative">
                      <div className="relative">
                        <Textarea
                          id="message"
                          name="message"
                          placeholder=" "
                          rows={5}
                          required
                          className={`pt-4 transition-all duration-200 border-border focus:border-primary ${
                            focusedField === "message" ? "border-primary" : ""
                          }`}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                        />
                        <label
                          htmlFor="message"
                          className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                            focusedField === "message"
                              ? "text-xs text-primary top-1"
                              : "text-muted-foreground text-sm top-3"
                          }`}
                        >
                          Your Message
                        </label>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 shadow-md hover:shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} Shweta Sanjay Mate. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ShwetaMate67"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shwetasanjaymate/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shwetamate0109@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
