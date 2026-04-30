import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo">ETHIQ</Link>
        <div className="nav-links">
          <a href="https://careers.ethiqrec.com" target="_blank" rel="noopener noreferrer">
            Roles
          </a>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <a href="mailto:hello@ethiqrec.com">Contact</a>
        </div>
      </div>
    </nav>
  )
}
