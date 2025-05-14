import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Prepare email content
    const emailContent = {
      to: "shwetamate0109@gmail.com",
      from: "noreply@yourdomain.com", // Replace with your verified sender
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9333ea;">New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #9333ea;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    }

    // Use fetch to send to an external email service API
    // For this example, we'll use a mock success response
    // In production, replace this with your actual email service API call

    // Simulate API call to email service
    // const response = await fetch('https://api.youremailservice.com/send', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.EMAIL_API_KEY}`
    //   },
    //   body: JSON.stringify(emailContent)
    // });

    // if (!response.ok) {
    //   throw new Error('Failed to send email');
    // }

    // For demo purposes, we'll just log the email content and return success
    console.log("Email would be sent with content:", emailContent)

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Your message has been received. In the production version, an email would be sent to Shweta.",
    })
  } catch (error) {
    console.error("Error in email API:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
