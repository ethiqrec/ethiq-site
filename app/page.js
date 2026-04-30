import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { CLIENTS, BLOG_POSTS, formatPostDate } from '../lib/data'

export default function HomePage() {
  const recentPosts = BLOG_POSTS.slice(0, 3)

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>AI, Data, Engineering.</h1>
          <p className="hero-sub">
            Specialist recruitment for product startups and enterprise teams across the UK and Europe.
          </p>
          <p className="hero-meta">
            <span className="live-beacon" />
            Founded 2025 &middot; UK and Europe
          </p>
          <div className="hero-cta">
            <a
              href="https://careers.ethiqrec.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              See open roles →
            </a>
          </div>
        </div>
      </section>

      {/* What we hire for */}
      <section className="section">
        <div className="container">
          <div className="section-label">what we hire for</div>
          <div className="three-col">
            <div>
              <h3>AI</h3>
              <p>ML engineers, AI engineers, applied research, voice and LLM specialists.</p>
            </div>
            <div>
              <h3>Data</h3>
              <p>Databricks engineers, data engineering, analytics engineering, data science.</p>
            </div>
            <div>
              <h3>Engineering</h3>
              <p>Product engineers, full-stack, platform and infra, founding engineers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="section section-bordered">
        <div className="container">
          <div className="section-label">who we work with</div>
          <p className="section-lead">
            Product startups and enterprise teams in AI, Data, and Engineering.
          </p>
          <div className="logo-wall">
            {CLIENTS.map((c) => (
              <div key={c.name} className="logo-item">{c.name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section section-bordered">
        <div className="container narrow">
          <div className="section-label">how we work</div>
          <ul className="manifesto">
            <li>
              We hire for technical work that actually matters. Not seat-filling, not contractor churn.
            </li>
            <li>
              We work with a small number of clients at a time. If we can&rsquo;t focus on you, we&rsquo;ll say so.
            </li>
            <li>
              We tell you what we think. If a role isn&rsquo;t hireable as written, you&rsquo;ll hear it before we start.
            </li>
            <li>
              We treat candidates like adults. Real updates, no ghosting, no fake &ldquo;we&rsquo;ll be in touch.&rdquo;
            </li>
          </ul>
        </div>
      </section>

      {/* Latest writing */}
      <section className="section section-bordered">
        <div className="container narrow">
          <div className="section-label">writing</div>
          <ul className="post-list">
            {recentPosts.map((post) => (
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
          <Link href="/blog" className="all-posts">All posts →</Link>
        </div>
      </section>

      {/* Get in touch */}
      <section className="section section-bordered">
        <div className="container narrow">
          <div className="section-label">get in touch</div>
          <p className="contact-line">
            For hiring: <a href="mailto:hello@ethiqrec.com">hello@ethiqrec.com</a>
          </p>
          <p className="contact-line">
            For roles:{' '}
            <a href="https://careers.ethiqrec.com" target="_blank" rel="noopener noreferrer">
              see open positions →
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
