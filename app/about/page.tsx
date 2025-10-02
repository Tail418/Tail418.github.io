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
          <p className="text-xl text-muted-foreground mb-12">2025년 함께 의정부 지역 복음화를 위해 힘쓰는 대학선교부</p>
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
                    src="/my-photo/안정호.png"
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
                    하나님의 말씀을 전해주시는 분
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
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">방향성</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">전도</h3>
                <p className="text-muted-foreground leading-relaxed">
                  많은 잃어진 영혼들을 주님 앞으로 인도하는 그리스도인
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">교제</h3>
                <p className="text-muted-foreground leading-relaxed">
                  모이기를 힘쓰라는 말씀을 따라 형제자매님들 모여서 교제하기 힘씁니다.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <Pray className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">말씀 중심</h3>
                <p className="text-muted-foreground leading-relaxed">
                  하나님의 말씀을 중심으로, 하나님 말씀을 앞세워서, 하나님 말씀을 기준으로 살아가려 합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">붙잡고 싶은 말씀</h2>

          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">초심</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">피투성이라도 살라</h3>
                    <p className="text-muted-foreground">
                      (겔 16:6) 내가 네 곁으로 지나갈 때에 네가 피투성이가 되어 발짓하는 것을 보고 네게 이르기를 너는 피투성이라도 살라 다시 이르기를 너는 피투성이라도 살라 하고
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
                    <h3 className="text-xl font-semibold text-foreground mb-2">여호와는 나의 전부이시니</h3>
                    <p className="text-muted-foreground">
                      (시 119:57) 여호와는 나의 분깃이시니 나는 주의 말씀을 지키리라 하였나이다 
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
          <h2 className="text-3xl font-bold text-foreground mb-8">수련회</h2>
          <p className="text-xl text-muted-foreground mb-8">
            수련회를 통해 마음의 결단과 다시 일어서는 힘을 얻고 하나님을 향한 마음을 새롭게 합니다.
          </p>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">일정</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>동계수련회 : 25/12/31 ~ 25/01/02</p>
                <p>전국 대학생 여름수련회 : 25/06/29 ~ 25/07/02</p>
                <p>의정부권역 대학생 수련회 : 25/08/29 ~ 25/08/30</p>
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
