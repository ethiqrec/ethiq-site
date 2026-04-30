import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import { getPostBySlug, getAllPostSlugs, formatPostDate } from '../../../lib/data'

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Not found' }
  return {
    title: `${post.title} — Ethiq`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <>
      <Nav />

      <section className="container">
        <article className="post-page">
          <Link href="/blog" className="post-back">← all posts</Link>
          <h1>{post.title}</h1>
          <div className="post-meta">{formatPostDate(post.date)}</div>
          <div className="post-body">
            {post.body.map((block, i) => {
              if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
              return <p key={i}>{block.text}</p>
            })}
          </div>
        </article>
      </section>

      <Footer />
    </>
  )
}
