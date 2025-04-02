"use client"
import SpaceBackground from "@/components/SpaceBackground"
import StarBackground from "@/components/StarBackground"
import ContactForm from "@/components/ContactForm"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Image from "next/image"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background elements */}
      <SpaceBackground />
      <StarBackground />

      {/* Main content */}
      <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <div className="h-full">
              <ContactForm />
            </div>
            <div className="h-full min-h-[400px] md:min-h-0">
              <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 relative group">
                <Image
                  src="/upes.png"
                  alt="UPES Campus Aerial View"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 flex items-end justify-start p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">UPES Bidholi Campus</h3>
                    <p className="text-white/80">Dehradun, Uttarakhand 248007</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" theme="dark" />
    </main>
  )
}