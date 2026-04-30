import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <section className="container">
        <div className="post-page">
          <h1>Not found.</h1>
          <p className="post-meta">404</p>
          <div className="post-body">
            <p>That page doesn&rsquo;t exist.</p>
            <p>
              <Link href="/">Back to home →</Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
