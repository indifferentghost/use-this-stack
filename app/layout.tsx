import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from '@/components/theme-provider';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "What stack should I use?",
  description: "Because choosing is hard",
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
