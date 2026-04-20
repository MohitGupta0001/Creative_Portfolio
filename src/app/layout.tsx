import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mohit Gupta | Python Full Stack Developer",
  description: "Portfolio of Mohit Gupta — Python Full Stack Developer, building digital experiences that bridge design and engineering.",
  keywords: ["Mohit Gupta", "Python Developer", "Full Stack", "Web Developer", "Portfolio"],
  authors: [{ name: "Mohit Gupta" }],
  openGraph: {
    title: "Mohit Gupta | Python Full Stack Developer",
    description: "Portfolio of Mohit Gupta — Python Full Stack Developer, building digital experiences that bridge design and engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Gupta | Python Full Stack Developer",
    description: "Portfolio of Mohit Gupta — Python Full Stack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
