"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { BookOpen, MessageCircle, Plus, Heart, User } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface Comment {
  id: number
  author: string
  content: string
  date: string
}

interface Post {
  id: number
  title: string
  author: string
  content: string
  date: string
  category: string
  likes: number
  comments: Comment[]
}

export default function WordPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "하나님의 사랑에 대한 묵상",
      author: "안정호 전도사",
      content:
        "요한복음 3:16을 묵상하며... 하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라. 이 말씀을 통해 하나님의 무조건적인 사랑을 다시 한번 깨닫게 됩니다.",
      date: "2025-01-15",
      category: "묵상",
      likes: 12,
      comments: [
        { id: 1, author: "양진영", content: "은혜로운 말씀 감사합니다!", date: "2025-01-15" },
        { id: 2, author: "유하나", content: "저도 이 말씀으로 큰 위로를 받았어요", date: "2025-01-16" },
      ],
    },
    {
      id: 2,
      title: "새해 결심과 하나님의 계획",
      author: "박중혁",
      content:
        '잠언 16:9 "사람이 마음으로 자기의 길을 계획할지라도 그의 걸음을 인도하시는 이는 여호와시니라" 새해를 맞아 우리의 계획보다 하나님의 뜻을 구하는 한 해가 되기를 소망합니다.',
      date: "2025-01-10",
      category: "나눔",
      likes: 8,
      comments: [
        { id: 3, author: "김경일", content: "아멘! 하나님의 뜻을 구하는 한 해가 되길 기도해요", date: "2025-01-11" },
      ],
    },
    {
      id: 3,
      title: "시편 23편 묵상",
      author: "유하나",
      content:
        "여호와는 나의 목자시니 내게 부족함이 없으리로다... 이 말씀이 요즘 힘든 시기를 보내는 저에게 큰 위로가 됩니다. 하나님께서 우리의 목자가 되어주신다는 것이 얼마나 감사한지요.",
      date: "2025-01-08",
      category: "묵상",
      likes: 15,
      comments: [],
    },
  ])

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "묵상",
  })

  const [newComment, setNewComment] = useState<{ [key: number]: string }>({})
  const [showNewPostForm, setShowNewPostForm] = useState(false)

  const handleSubmitPost = () => {
    if (newPost.title && newPost.content) {
      const post: Post = {
        id: posts.length + 1,
        title: newPost.title,
        author: "익명", // In a real app, this would be the logged-in user
        content: newPost.content,
        date: new Date().toISOString().split("T")[0],
        category: newPost.category,
        likes: 0,
        comments: [],
      }
      setPosts([post, ...posts])
      setNewPost({ title: "", content: "", category: "묵상" })
      setShowNewPostForm(false)
    }
  }

  const handleSubmitComment = (postId: number) => {
    const commentContent = newComment[postId]
    if (commentContent) {
      const comment: Comment = {
        id: Date.now(),
        author: "익명", // In a real app, this would be the logged-in user
        content: commentContent,
        date: new Date().toISOString().split("T")[0],
      }

      setPosts(posts.map((post) => (post.id === postId ? { ...post, comments: [...post.comments, comment] } : post)))

      setNewComment({ ...newComment, [postId]: "" })
    }
  }

  const handleLike = (postId: number) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">말씀</h1>
          <p className="text-xl text-muted-foreground mb-8">하나님의 말씀을 나누고 은혜를 함께해요</p>

          <Button onClick={() => setShowNewPostForm(!showNewPostForm)} className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />새 글 작성
          </Button>
        </div>
      </section>

      {/* New Post Form */}
      {showNewPostForm && (
        <section className="pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />새 글 작성
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">제목</label>
                  <Input
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    placeholder="제목을 입력하세요"
                    className="bg-input border-border"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">카테고리</label>
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    className="w-full p-2 bg-input border border-border rounded-md text-foreground"
                  >
                    <option value="묵상">묵상</option>
                    <option value="나눔">나눔</option>
                    <option value="기도제목">기도제목</option>
                    <option value="간증">간증</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">내용</label>
                  <Textarea
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    placeholder="말씀이나 은혜받은 내용을 나누어 주세요"
                    className="bg-input border-border min-h-32"
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={handleSubmitPost} className="bg-primary hover:bg-primary/90">
                    게시하기
                  </Button>
                  <Button variant="outline" onClick={() => setShowNewPostForm(false)}>
                    취소
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Posts List */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="bg-card border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-foreground leading-relaxed mb-6 whitespace-pre-wrap">{post.content}</p>

                {/* Post Actions */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    {post.likes}
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    <MessageCircle className="h-4 w-4 inline mr-1" />
                    댓글 {post.comments.length}개
                  </span>
                </div>

                {/* Comments */}
                <div className="space-y-4">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="bg-secondary/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-foreground text-sm">{comment.author}</span>
                        <span className="text-xs text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-foreground text-sm">{comment.content}</p>
                    </div>
                  ))}

                  {/* New Comment Form */}
                  <div className="flex gap-2">
                    <Textarea
                      value={newComment[post.id] || ""}
                      onChange={(e) => setNewComment({ ...newComment, [post.id]: e.target.value })}
                      placeholder="댓글을 작성하세요"
                      className="bg-input border-border text-sm"
                      rows={2}
                    />
                    <Button
                      onClick={() => handleSubmitComment(post.id)}
                      size="sm"
                      className="bg-primary hover:bg-primary/90 self-end"
                    >
                      댓글
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
