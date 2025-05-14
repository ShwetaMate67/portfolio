"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, ArrowRight, Sparkles, AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const [formError, setFormError] = useState("")
  const [formSuccess, setFormSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing again
    if (formError) setFormError("")
    if (formSuccess) setFormSuccess(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError("")
    setFormSuccess(false)

    try {
      // Direct form submission to formspree.io
      const formAction = "https://formspree.io/f/YOUR_FORM_ID" // Replace with your Formspree form ID

      // Create form data
      const formDataObj = new FormData()
      formDataObj.append("name", formData.name)
      formDataObj.append("email", formData.email)
      formDataObj.append("subject", formData.subject)
      formDataObj.append("message", formData.message)

      // For demo purposes in the preview, we'll simulate success without actually submitting
      // In production, uncomment the fetch call below and replace the form ID

      // const response = await fetch(formAction, {
      //   method: "POST",
      //   body: formDataObj,
      //   headers: {
      //     Accept: "application/json",
      //   },
      // })

      // if (!response.ok) {
      //   throw new Error("Failed to send message")
      // }

      // Simulate success for preview
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message
      setFormSuccess(true)
      toast({
        title: "Message received!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending message:", error)
      setFormError(error.message || "Failed to send message. Please try again later.")

      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "shwetamate0109@gmail.com",
      link: "mailto:shwetamate0109@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (872) 239-2679",
      link: "tel:+18722392679",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Chicago, IL",
      link: "https://maps.google.com/?q=Chicago,IL",
      color: "from-pink-500 to-orange-500",
    },
  ]

  return (
    <section id="contact" className="py-16 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center relative z-10"
      >
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
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
          <Card className="overflow-hidden border border-primary/10 bg-background/50 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Contact Information</h3>
              </div>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                opportunities, or partnerships.
              </p>

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
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">{info.value}</p>
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
                  I'm currently looking for new opportunities in software engineering and full-stack development roles.
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
          <Card className="overflow-hidden border border-primary/10 bg-background/50 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Mail className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Send Me a Message</h3>
              </div>

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
                          focusedField === "name" ? "text-xs text-primary top-1" : "text-muted-foreground text-sm top-3"
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
    </section>
  )
}
