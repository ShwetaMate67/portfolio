"use client"

import { useEffect } from "react"

export default function ContactFormScript() {
  useEffect(() => {
    // This script will be executed on the client side
    const script = document.createElement("script")
    script.src = "https://formspree.io/js/formbutton-v1.min.js"
    script.defer = true

    script.onload = () => {
      // @ts-ignore - window.formbutton is added by the script
      window.formbutton =
        window.formbutton ||
        (() => {
          ;(window.formbutton.q = window.formbutton.q || []).push(arguments)
        })

      // @ts-ignore
      formbutton("create", {
        action: "https://formspree.io/f/YOUR_FORM_ID", // Replace with your Formspree form ID
        title: "Contact Me",
        fields: [
          {
            type: "text",
            label: "Name",
            name: "name",
            required: true,
            placeholder: "Your name",
          },
          {
            type: "email",
            label: "Email",
            name: "email",
            required: true,
            placeholder: "Your email address",
          },
          {
            type: "text",
            label: "Subject",
            name: "subject",
            required: true,
            placeholder: "Message subject",
          },
          {
            type: "textarea",
            label: "Message",
            name: "message",
            required: true,
            placeholder: "Your message",
          },
          { type: "submit" },
        ],
        styles: {
          title: {
            backgroundColor: "#9333ea",
          },
          button: {
            backgroundColor: "#9333ea",
          },
        },
      })
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}
