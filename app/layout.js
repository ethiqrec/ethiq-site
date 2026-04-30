import './globals.css'

export const metadata = {
  title: 'Ethiq — AI, Data, Engineering recruitment',
  description:
    'Specialist recruitment for product startups and enterprise teams across the UK and Europe.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
