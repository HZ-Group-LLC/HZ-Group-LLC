import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HZ Group LLC",
  description:
    "HZ Group LLC delivers end-to-end technology services including database, infrastructure, middleware, cloud, DevOps, secure software development, AI, web, app, and game development.",
  keywords: [
    "HZ Group LLC",
    "Tech Services",
    "Database Services",
    "Cloud Services",
    "Middleware Services",
    "DevOps",
    "AI Solutions",
    "Secure Software Development",
    "Web Development",
    "App Development",
    "Game Development",
    "Corporate Trainings",
  ],
  verification: {
    google: "google6ede5e98a4318505.html",
  },
  authors: [{ name: "HZ Group LLC" }],
  openGraph: {
    title: "HZ Group LLC",
    description:
      "Your trusted partner for managed IT services, cloud solutions, AI integration, DevOps, and custom software development.",
    url: "https://hzgroupllc.com/",
    siteName: "HZ Group LLC",
    images: [
      {
        url: "/images/logo.png", // upload a company/branding image here
        width: 1200,
        height: 630,
        alt: "HZ Group LLC Technology Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider
          options={{ key: 'css' }}>
          <Navbar />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
