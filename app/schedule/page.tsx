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
      title: "주일예배",
      date: "2025-02-02",
      time: "14:00",
      location: "의정부중앙교회 대학부실",
      type: "정기모임",
      description: "매주 일요일 정기 예배",
    },
    {
      id: 2,
      title: "겨울 수양회",
      date: "2025-02-14",
      time: "09:00",
      location: "양평 수양관",
      type: "특별행사",
      description: "1박 2일 겨울 수양회",
    },
    {
      id: 3,
      title: "신입생 환영회",
      date: "2025-03-01",
      time: "18:00",
      location: "교회 친교실",
      type: "특별행사",
      description: "새 학기 신입생 환영 모임",
    },
    {
      id: 4,
      title: "수요예배",
      date: "2025-02-05",
      time: "19:00",
      location: "의정부중앙교회 대학부실",
      type: "정기모임",
      description: "매주 수요일 정기 예배",
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
      case "정기모임":
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
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">정기 모임 안내</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  주일예배
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>매주 일요일 오후 2시</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>의정부중앙교회 대학부실</span>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    매주 일요일 함께 모여 예배하며 하나님의 말씀을 나누는 시간입니다.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  수요예배
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>매주 수요일 오후 7시</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>의정부중앙교회 대학부실</span>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    주중에 함께 모여 기도하고 말씀을 나누는 소중한 시간입니다.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  소그룹 모임
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>매주 토요일 오후 6시</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>각 소그룹별 장소</span>
                  </div>
                  <p className="text-muted-foreground mt-4">소그룹별로 더 깊은 교제와 말씀 나눔을 하는 시간입니다.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  특별 모임
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>매월 셋째 토요일</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>교회 친교실</span>
                  </div>
                  <p className="text-muted-foreground mt-4">특별한 주제로 함께 모이는 월례 모임입니다.</p>
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
                일정에 대한 문의사항이나 참석 관련 질문이 있으시면 언제든 연락해 주세요.
              </p>
              <div className="space-y-2">
                <p className="text-foreground font-medium">안정호 전도사</p>
                <p className="text-muted-foreground">담당: 대학부 사역 전반</p>
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
