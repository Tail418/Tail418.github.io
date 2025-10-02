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
    { id: 1, src: "/korean-university-students-worship-service.jpg", alt: "주일예배", category: "예배" },
    { id: 2, src: "/placeholder-geh0d.png", alt: "성경공부", category: "말씀" },
    { id: 3, src: "/korean-university-ministry-retreat-mountains.jpg", alt: "수양회", category: "수양회" },
    { id: 4, src: "/korean-students-fellowship-meal-together.jpg", alt: "교제식사", category: "교제" },
    { id: 5, src: "/placeholder-f0g0c.png", alt: "기도모임", category: "기도" },
    { id: 6, src: "/korean-university-students-singing-worship.jpg", alt: "찬양시간", category: "찬양" },
    { id: 7, src: "/placeholder-a1u0h.png", alt: "야외활동", category: "활동" },
    { id: 8, src: "/placeholder-8ypmw.png", alt: "크리스마스", category: "행사" },
    { id: 9, src: "/korean-university-ministry-baptism-ceremony.jpg", alt: "세례식", category: "세례" },
    { id: 10, src: "/korean-students-volunteer-service-community.jpg", alt: "봉사활동", category: "봉사" },
    { id: 11, src: "/placeholder-oqy92.png", alt: "졸업식", category: "졸업" },
    { id: 12, src: "/korean-university-students-easter-celebration.jpg", alt: "부활절", category: "행사" },
    { id: 13, src: "/placeholder-gngmm.png", alt: "여름캠프", category: "캠프" },
    { id: 14, src: "/placeholder-jqwe9.png", alt: "선교여행", category: "선교" },
    { id: 15, src: "/korean-students-thanksgiving-service-church.jpg", alt: "추수감사절", category: "행사" },
    { id: 16, src: "/placeholder.svg?height=300&width=300", alt: "신년예배", category: "예배" },
    { id: 17, src: "/placeholder.svg?height=300&width=300", alt: "커피타임", category: "교제" },
    { id: 18, src: "/placeholder.svg?height=300&width=300", alt: "단체사진", category: "기념" },
  ]

  const newsItems = [
    "2025년 신입생 환영회가 3월 첫째 주에 열립니다",
    "겨울 성경학교 참가자 모집 중입니다",
    "새해 첫 수양회가 2월 둘째 주 예정입니다",
    "졸업생 송별회가 2월 마지막 주에 있습니다",
    "선교 헌금 모금이 목표액의 80%에 도달했습니다",
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

      {/* Statistics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">우리의 활동</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <p className="text-muted-foreground">참여 학생 수</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">24</div>
                <p className="text-muted-foreground">연간 행사 수</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">12</div>
                <p className="text-muted-foreground">소그룹 수</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">100+</div>
                <p className="text-muted-foreground">말씀 나눔 횟수</p>
              </CardContent>
            </Card>
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
