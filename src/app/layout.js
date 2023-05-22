import Footer from './components/Footer'
import Header from './components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icons: {
    icon: '/images/title_icon.png',
    shortcut: '/images/title_icon.png',
    apple: '/images/title_icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/apple-touch-icon-precomposed.png',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
