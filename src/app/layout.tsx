import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shyam Prasad | Angular & Full-Stack Developer",
  description:
    "Portfolio of Shyamprasad C V - Angular Developer with 4+ years of experience building scalable, responsive enterprise web applications.",
  keywords: [
    "Shyam Prasad",
    "Angular Developer",
    "Full-Stack Developer",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: "Shyamprasad C V" }],
  openGraph: {
    title: "Shyam Prasad | Angular & Full-Stack Developer",
    description:
      "Angular & Full-Stack Developer with 4+ years of experience delivering scalable enterprise applications.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23121212'/><text x='50' y='65' fill='%23D2F825' font-size='42' font-family='sans-serif' font-weight='900' text-anchor='middle'>SP</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-canvas text-brand-dark antialiased min-h-screen flex flex-col selection:bg-brand-lime selection:text-brand-dark">
        {children}
      </body>
    </html>
  );
}
