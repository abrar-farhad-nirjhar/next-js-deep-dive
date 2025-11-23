import { Metadata } from "next";
import "./globals.css";

export const metatadata: Metadata = {
  title: "NextJs Playground",
  description: "Learning the ins and outs of NextJs",
  icons: {
    icon: "/favicon.ico",
  }
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="min-h-screen text-gray-900">
        {children}
      </body>
    </html>
  )
}

