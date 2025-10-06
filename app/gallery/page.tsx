"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Heart, Users, BookOpen, Calendar } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Generate 18 gallery images with Korean university ministry themes
  const galleryImages = [
  
  { id: 1, src: "/1.jpeg", alt: "추계수양회", category: "교제" },
  { id: 2, src: "/2.jpeg", alt: "연합발대식", category: "교제" },
  { id: 3, src: "/3.jpeg", alt: "대학부모임", category: "교제" },
  { id: 4, src: "/4.jpeg", alt: "북부연합모임", category: "교제" },
  { id: 5, src: "/5.jpeg", alt: "의정부권역 대학생 수련회", category: "교제" },
  { id: 6, src: "/6.jpeg", alt: "행복한 시간들", category: "교제" },
  { id: 7, src: "/7.jpeg", alt: "행복한 시간들", category: "교제" },
  { id: 8, src: "/8.jpeg", alt: "행복한 시간들", category: "교제" },
  { id: 9, src: "/9.jpeg", alt: "행복한 시간들", category: "교제" },
  { id: 10, src: "/10.jpeg", alt: "행복한 시간들", category: "교제" },
  { id: 11, src: "/11.jpeg", alt: "행복한 시간들", category: "교제" },
  { id: 12, src: "/12.jpeg", alt: "행복한 시간들", category: "교제" },
  { id: 13, src: "/13.jpeg", alt: "행복한 시간들", category: "교제" },
  { id: 14, src: "/14.jpeg", alt: "행복한 시간들", category: "교제" },
  { id: 15, src: "/15.jpeg", alt: "행복한 시간들", category: "교제" },
  { id: 16, src: "/16.jpeg", alt: "행복한 시간들", category: "교제" },
  { id: 17, src: "/17.jpeg", alt: "행복한 시간들", category: "교제" },
  { id: 18, src: "/18.jpeg", alt: "행복한 시간들", category: "교제" },

  ]

  const newsItems = [
    "노방전도로 구원 받는 사람들!",
    "가을 찬양제가 11월 첫째주에 열립니다",
    "내년에 신입생 많다고요?!",
    "새로오신 전도사님이 좋아하시는 찬양 <소풍>",
    "전도인 분들을 위해 항상 기도합시다",
  ]

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)

  // Auto-scroll news ticker
  useState(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length)
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">갤러리</h1>
          <p className="text-xl text-muted-foreground mb-12">함께한 소중한 순간들</p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group overflow-hidden"
                onClick={() => setSelectedImage(image.src)}
              >
                <CardContent className="p-0 relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <Badge variant="secondary" className="mb-2">
                      {image.category}
                    </Badge>
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <section className="py-8 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Badge variant="default" className="flex-shrink-0">
              뉴스
            </Badge>
            <div className="overflow-hidden flex-1">
              <div
                className="whitespace-nowrap text-foreground font-medium transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentNewsIndex * 100}%)` }}
              >
                {newsItems.map((news, index) => (
                  <span key={index} className="inline-block w-full">
                    {news}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 flex justify-center">
            <Image src="/ujbc-logo.jpg" alt="의정부 대학선교부 로고" width={48} height={48} className="rounded-full" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2 font-serif">의정부 대학선교부</h3>
          <p className="text-muted-foreground text-sm">© 2025 의정부 대학선교부. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
