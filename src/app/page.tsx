import { auth } from "@/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";

import Header from '@/components/home/header';
import Features from '@/components/home/features';
import HowItWorks from '@/components/home/how-it-works';
import Testimonials from '@/components/home/testimonials';
import Footer from '@/components/home/footer';

export const metadata: Metadata = {
  title: "Time Traveler",
  description: "Upload time capsules and open them again later.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Time Capsules",
    description: "Upload time capsules and open them again later."
  },
  twitter: {
    card: "summary_large_image",
    title: "Time Capsules",
    description: "Upload time capsules and open them again later."
  }
}

export default async function Home() {
  const user = await auth();

  if (user?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}
