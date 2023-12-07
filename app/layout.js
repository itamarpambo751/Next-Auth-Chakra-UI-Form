import { Inter } from 'next/font/google'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import NextAuthProvider from '@/providers/nextauthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <ChakraProvider>
          <body className={inter.className}>{children}</body>
        </ChakraProvider>
      </NextAuthProvider>
    </html>
  )
}
