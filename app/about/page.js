import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'About — Ethiq',
  description: 'Why Ethiq exists, and how we work.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />

      <section className="about-hero">
        <div className="container">
          <h1>About Ethiq.</h1>
          <p className="hero-sub">
            We hire for the technical roles that actually matter. Less volume, more focus.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="about-body">
          <p>
            Ethiq was founded in 2025 to do recruitment differently. Most agencies operate on volume.
            They reward spray-and-pray sourcing, generic outreach, and treating candidates as throughput.
            We thought there was a better way.
          </p>
          <p>
            We work with a small number of clients at a time. We hire for AI, Data, and Engineering roles
            across product startups and enterprise teams in the UK and Europe. We tell clients when a
            role is unhireable as written, and we tell candidates what is actually going on.
          </p>
          <p>
            <strong>The team.</strong> A short bio per founder will live here. For now, you can find us
            on LinkedIn or email <a href="mailto:hello@ethiqrec.com">hello@ethiqrec.com</a>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
