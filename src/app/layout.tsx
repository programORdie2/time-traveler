import type { Metadata } from "next";
import "./globals.css";

import { auth } from "@/auth";

import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <NextTopLoader />
          <Navbar user={user} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
