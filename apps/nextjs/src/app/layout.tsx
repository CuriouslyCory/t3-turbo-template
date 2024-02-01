import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";

import { cn } from "@sudoswap/ui";
import { ThemeProvider, ThemeToggle } from "@sudoswap/ui/theme";
import { Toaster } from "@sudoswap/ui/toast";

import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

import "~/app/globals.css";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://react-components.sudoswap.xyz"
      : "http://localhost:3000",
  ),
  title: "Sudoswap React Components",
  description: "The fastest way to integrate sudoswap into your app",
  openGraph: {
    title: "Sudoswap React Components",
    description: "Simple monorepo with shared backend for web & mobile apps",
    url: "https://create-t3-turbo.vercel.app",
    siteName: "Sudoswap React Components",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sudoswap",
    creator: "@sudoswap",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          rubik.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TRPCReactProvider>{props.children}</TRPCReactProvider>
          <div className="absolute bottom-4 right-4">
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
