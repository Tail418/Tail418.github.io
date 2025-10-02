import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, BookOpen, Play as Pray } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">소개</h1>
          <p className="text-xl text-muted-foreground mb-12">하나님의 사랑 안에서 함께 성장하는 공동체</p>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/pastor-ahn-jungho.jpg"
                    alt="안정호 전도사님"
                    width={160}
                    height={160}
                    className="rounded-full shadow-lg object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <Badge variant="secondary" className="mb-4">
                    담당 전도사
                  </Badge>
                  <h2 className="text-3xl font-bold text-foreground mb-4">안정호 전도사님</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    하나님의 말씀으로 청년들을 섬기며, 각자가 하나님 안에서 자신의 소명을 발견하고 성장할 수 있도록 돕고
                    있습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bible Verse Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <Badge variant="outline" className="mb-6">
              푯대말씀
            </Badge>
          </div>

          <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 leading-relaxed text-balance">
            "혹시 저희가 넘어지면 하나가 그 동무를 붙들어 일으키려니와 홀로 있어 넘어지고 붙들어 일으킬 자가 없는
            자에게는 화가 있으리라"
          </blockquote>

          <cite className="text-lg text-muted-foreground">전도서 4:10</cite>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">우리의 사명</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">사랑의 공동체</h3>
                <p className="text-muted-foreground leading-relaxed">
                  하나님의 사랑을 바탕으로 서로를 아끼고 돌보는 따뜻한 공동체를 만들어갑니다.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">함께 성장</h3>
                <p className="text-muted-foreground leading-relaxed">
                  혼자가 아닌 함께 걸어가며, 서로의 신앙과 삶에서 성장할 수 있도록 돕습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <Pray className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">말씀 중심</h3>
                <p className="text-muted-foreground leading-relaxed">
                  하나님의 말씀을 중심으로 한 예배와 교제를 통해 영적으로 성숙해갑니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">우리의 이야기</h2>

          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">2025</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">새로운 시작</h3>
                    <p className="text-muted-foreground">
                      의정부 대학선교부가 새롭게 출발하며, 더 많은 대학생들과 함께 하나님의 사랑을 나누고자 합니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">공동체의 가치</h3>
                    <p className="text-muted-foreground">
                      '혼자가 아닌 함께'라는 가치 아래, 서로를 붙들어 일으키는 진정한 형제자매의 관계를 추구합니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">함께해요</h2>
          <p className="text-xl text-muted-foreground mb-8">
            의정부 대학선교부에서 함께 신앙의 여정을 걸어가실 분들을 기다립니다
          </p>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">모임 안내</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>매주 일요일 오후 2시 - 주일예배</p>
                <p>매주 수요일 오후 7시 - 수요예배</p>
                <p>매월 셋째 토요일 - 특별모임</p>
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
