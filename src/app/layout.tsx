import type { Metadata } from "next";
import "./globals.css";

import { auth } from "@/auth";

import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

// Default meta data in case no metadata is provided
export const metadata: Metadata = {
  title: "Time Traveler",
  description: "Upload time capsules and open them again later.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await auth();

  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <NextTopLoader showSpinner={false} />
          <Navbar user={user} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
