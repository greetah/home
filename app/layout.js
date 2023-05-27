import { Analytics } from "@vercel/analytics/react";
import { Space_Grotesk } from "@next/font/google";
import "../styles/globals.css";

const space = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    default: "Greta Workman",
    template: "%s | Greta Workman",
  },
  description: "Director of Product Marketing at Vercel",
  openGraph: {
    title: "Greta Workman",
    description: "Director of Product Marketing at Vercel",
    url: "https://gretaworkman.com",
    siteName: "Greta Workman",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Greta Workman",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};
