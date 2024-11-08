import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import React from 'react'
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk} from "next/font/google";
import type { Metadata} from "next";
import {element} from "prop-types";

export const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: '--font-inter'
});

export const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"],
    variable: '--font-spaceGrotesk'
});

export const metadata: Metadata = {
    title: "DevStack",
    description: "Developer Stack",
    icons: {
        icon: '/images/site-logo.svg'
    }
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider
      appearance={{
          elements: {
              formButtomPrimary: 'primary-gradient',
              footerActionLink: 'primary-text-gradient hover:text-primary-500'
          }
      }}
      >
        <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
        </body>
        </html>
      </ClerkProvider>
  )
}