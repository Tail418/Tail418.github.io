"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Upload, Download } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function SchedulePage() {
  const [selectedMonth, setSelectedMonth] = useState("2025-02")

  const upcomingEvents = [
    {
      id: 1,
      title: "대학부 모임",
      date: "2025-00-00",
      time: "14:00",
      location: "청년회실",
      type: "모임",
      description: "매달 1번 진행되는 대학부모임",
    },
    {
      id: 2,
      title: "겨울 동계수련회",
      date: "2025-00-00",
      time: "00:00",
      location: "갈릴리수양관",
      type: "수양회",
      description: "2박 3일간 진행되는 동계수련회",
    },
    {
      id: 3,
      title: "고3 형제자매님들과 교제",
      date: "2025-00-00",
      time: "00:00",
      location: "교제 1실",
      type: "주일일정",
      description: "고3 형제자매님들과 교제하는 시간입니다.",
    },
    {
      id: 4,
      title: "찬양연습",
      date: "2025-00-00",
      time: "00:00",
      location: "중강당",
      type: "찬양연습",
      description: "얼마 남지않은 가을찬양제 준비를 위한 찬양연습입니다.",
    },
  ]

  const monthlyCalendars = [
    {
      month: "2025-02",
      title: "2월 일정표",
      image: "/placeholder.svg?key=cal-feb",
    },
    {
      month: "2025-03",
      title: "3월 일정표",
      image: "/placeholder.svg?key=cal-mar",
    },
    {
      month: "2025-04",
      title: "4월 일정표",
      image: "/placeholder.svg?key=cal-apr",
    },
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "대학부모임":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "특별행사":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ko-KR", {
      month: "long",
      day: "numeric",
      weekday: "short",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">일정</h1>
          <p className="text-xl text-muted-foreground mb-12">함께하는 모든 순간들을 확인하세요</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">다가오는 일정</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="bg-card border-border hover:border-primary/50 transition-colors duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <Badge className={`${getEventTypeColor(event.type)} border`}>{event.type}</Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>

                    <p className="text-foreground mt-4">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Calendar Images */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">월별 일정표</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                업로드
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                다운로드
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyCalendars.map((calendar) => (
              <Card key={calendar.month} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{calendar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Image
                      src={calendar.image || "/placeholder.svg"}
                      alt={calendar.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => setSelectedMonth(calendar.month)}
                  >
                    자세히 보기
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Schedule */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">모임 안내</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  주일일정
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>매주 일요일 오전 11시</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>의정부교회 대강당</span>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    매주 일요일 함께 모여 말씀 들으며 하나님의 말씀을 배우는 시간입니다.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  수요말씀
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>매주 수요일 오후 7시 20분</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>의정부교회 대강당</span>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    수요일 저녁 함께 모여 말씀 듣고 힘을 받는 시간입니다.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  대학부모임
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>매달 1~2번 토요일 오후 2시</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>장소 추후 공지</span>
                  </div>
                  <p className="text-muted-foreground mt-4">말씀과 교제로 주님을 향한 마음이 커져가는 시간</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  청년회교제
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>매주 토요일 7시</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>때마다 다른 장소</span>
                  </div>
                  <p className="text-muted-foreground mt-4">토요일 저녁을 이기는 청년 그리스도인들</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">문의사항</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-4">
                문의사항이나 질문이 있으시면 언제든 연락해 주세요.
              </p>
              <div className="space-y-2">
                <p className="text-foreground font-medium">양진영</p>
                <p className="text-muted-foreground">담당: 의정부교회 대학부장</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

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
