import SinglePagePortfolio from "@/components/single-page-portfolio"
import { ThreeDBackground } from "@/components/three-d-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ThreeDBackground />
      </div>
      <div className="relative z-10">
        <SinglePagePortfolio />
      </div>
    </main>
  )
}
