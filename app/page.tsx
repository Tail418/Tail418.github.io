import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const newsItems = [
    {
      id: 1,
      title: "원민재, 양성빈 입대",
      description:
        "우리 대학부의 소중한 형제들이 군 복무를 위해 입대했습니다. 건강하게 복무하고 돌아오기를 기도합니다.",
      image: "/korean-university-students-military-service-farewe.jpg",
    },
    {
      id: 2,
      title: "추계수양회",
      description: "가을의 은혜 가운데 진행된 추계수양회에서 하나님의 말씀으로 충만한 시간을 보냈습니다.",
      image: "/korean-christian-retreat-autumn-mountains.jpg",
    },
    {
      id: 3,
      title: "외국인 초대의 날",
      description: "다양한 국적의 친구들과 함께 하나님의 사랑을 나누는 특별한 시간을 가졌습니다.",
      image: "/multicultural-christian-gathering-korean-internati.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="mb-6 flex justify-center">
              <Image
                src="/ujbc-logo.jpg"
                alt="의정부 대학선교부 로고"
                width={120}
                height={120}
                className="rounded-full shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance font-serif tracking-wide">
              의정부 대학선교부
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {"혹시 저희가 넘어지면 하나가 그 동무를 붙들어 일으키려니와"}
            </p>
          </div>

          {/* Group Photo */}
          <div className="mb-16">
            <Image
              src="/korean-university-christian-group-photo-students-m.jpg"
              alt="의정부 대학선교부 단체사진"
              width={800}
              height={400}
              className="rounded-2xl mx-auto shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">소식과 뉴스</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card
                key={item.id}
                className="bg-card border-border hover:border-primary/50 transition-colors duration-300"
              >
                <CardContent className="p-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">최근 영상</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/korean-church-worship-service-with-young-adults.jpg"
                    alt="주일예배 영상"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-t-lg">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">주일예배 - 새해 첫 예배</h3>
                  <p className="text-sm text-muted-foreground">2025년 새해를 맞이하는 은혜로운 예배</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/korean-university-students-bible-study-group-discu.jpg"
                    alt="말씀나눔 영상"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-t-lg">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">말씀나눔 - 전도서 4장</h3>
                  <p className="text-sm text-muted-foreground">함께 걸어가는 신앙의 여정</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/korean-christian-youth-fellowship-meal-together.jpg"
                    alt="교제 영상"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-t-lg">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">대학부 교제시간</h3>
                  <p className="text-sm text-muted-foreground">함께 나누는 따뜻한 교제</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">의정부중앙교회 대학부</h3>
              <p className="text-muted-foreground mb-6">
                우리의 예배와 말씀, 그리고 일상의 은혜로운 순간들을 함께 나누어요
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="https://www.youtube.com/@jbchUJB/featured" target="_blank" rel="noopener noreferrer">
                  채널 방문하기
                </a>
              </Button>
            </div>
          </div>
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
