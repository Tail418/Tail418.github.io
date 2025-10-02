import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Users, User, Heart, Calculator, FileText } from "lucide-react"
import Image from "next/image"

export default function ServantsPage() {
  const servants = [
    {
      name: "양진영b",
      role: "대학부장",
      description: "대학부 전체를 이끌며 모든 사역을 총괄합니다",
      icon: Crown,
      color: "text-yellow-400",
      image: "/servant-yang-jinyoung.jpg",
    },
    {
      name: "박중혁b",
      role: "형제총무",
      description: "형제들의 교제와 활동을 담당합니다",
      icon: Users,
      color: "text-blue-400",
      image: "/servant-park-junghyuk.jpg",
    },
    {
      name: "김경일b",
      role: "형제차장",
      description: "형제총무를 보조하며 형제 사역을 돕습니다",
      icon: User,
      color: "text-blue-300",
      image: "/servant-kim-kyungil.jpg",
    },
    {
      name: "유하나s",
      role: "자매부장",
      description: "자매들의 교제와 활동을 이끌어갑니다",
      icon: Heart,
      color: "text-pink-400",
      image: "/servant-yu-hana.jpg",
    },
    {
      name: "배지연s",
      role: "회계",
      description: "대학부의 재정 관리를 담당합니다",
      icon: Calculator,
      color: "text-green-400",
      image: "/servant-bae-jiyeon.jpg",
    },
    {
      name: "최리나s",
      role: "서기",
      description: "모임의 기록과 공지사항을 관리합니다",
      icon: FileText,
      color: "text-purple-400",
      image: "/servant-choi-rina.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">섬김이</h1>
          <p className="text-xl text-muted-foreground mb-12">하나님의 사랑으로 공동체를 섬기는 사람들</p>
        </div>
      </section>

      {/* Servants Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servants.map((servant, index) => {
              const IconComponent = servant.icon
              return (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="relative mb-4">
                        <Image
                          src={servant.image || "/placeholder.svg"}
                          alt={servant.name}
                          width={120}
                          height={120}
                          className="rounded-full mx-auto object-cover shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center border-2 border-background">
                          <IconComponent className={`h-4 w-4 ${servant.color}`} />
                        </div>
                      </div>
                      <Badge variant="secondary" className="mb-2">
                        {servant.role}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4">{servant.name}</h3>

                    <p className="text-muted-foreground leading-relaxed">{servant.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">함께 섬겨요</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">새로운 섬김이</h3>
                <p className="text-muted-foreground">하나님께서 주신 은사로 공동체를 섬기고 싶으신 분들을 기다립니다</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">기도 후원</h3>
                <p className="text-muted-foreground">섬김이들과 대학부 사역을 위해 기도로 함께해 주세요</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
            <Image
              src="/ujbc-logo.jpg"
              alt="의정부 대학선교부"
              width={48}
              height={48}
              className="rounded-lg object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">의정부 대학선교부</h3>
          <p className="text-muted-foreground text-sm">© 2025 의정부 대학선교부. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
