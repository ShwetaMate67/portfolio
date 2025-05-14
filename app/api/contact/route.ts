import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real implementation, you would use a service like FormSubmit, Formspree, or EmailJS
    // These services provide simple endpoints that don't require server-side DNS lookups

    // Example with FormSubmit (no API key required):
    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("subject", subject)
    formData.append("message", message)
    formData.append("_subject", `Portfolio Contact: ${subject}`)

    // This is a mock implementation - in production, uncomment this and use your actual FormSubmit endpoint
    // const response = await fetch("https://formsubmit.co/shwetamate0109@gmail.com", {
    //   method: "POST",
    //   body: formData
    // })

    // if (!response.ok) {
    //   throw new Error("Failed to send message")
    // }

    // For demo purposes, we'll just log the form data
    console.log("Form submission:", { name, email, subject, message })

    return NextResponse.json({
      success: true,
      message: "Message received successfully",
    })
  } catch (error) {
    console.error("Error in contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
