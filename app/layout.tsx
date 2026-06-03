import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MenuWatch — Track Competitor Restaurant Menu Price Changes',
  description: 'Monitor competitor restaurant menus and prices. Get instant alerts when prices change or new items are added. Built for restaurant owners and food service managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="02f9c666-a7ec-417c-afc2-65a98fb632ba"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
