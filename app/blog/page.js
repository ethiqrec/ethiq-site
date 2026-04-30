import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { BLOG_POSTS, formatPostDate } from '../../lib/data'

export const metadata = {
  title: 'Writing — Ethiq',
  description: 'Notes on hiring, AI, and tech recruitment.',
}

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <>
      <Nav />

      <section className="blog-hero">
        <div className="container">
          <h1>Writing.</h1>
          <p>
            Notes on hiring, AI engineering, building technical teams, and recruitment that doesn&rsquo;t feel awful.
          </p>
        </div>
      </section>

      <section className="container narrow">
        <div className="blog-list">
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <span>
                    <span className="post-title">{post.title}</span>
                    <span className="post-excerpt">{post.excerpt}</span>
                  </span>
                  <span className="post-date">{formatPostDate(post.date)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  )
}
