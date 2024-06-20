import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NextTopLoader from 'nextjs-toploader';

import "@/stylesheets/globals.css";

import ThemeDataProvider from "@/context/theme-data-provider";
import ClientOnly from "@/components/util/ClientOnly";
import Header from "@/components/Header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Travel Trail Holidays",
    template: "%s",
  },
  description:
    "Crafting unforgettable travel experiences. We take care of the details, so you can focus on making memories.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className}`}>
        <NextTopLoader color="#FF5956" height={3} showSpinner={false}/>
        <NextThemesProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeDataProvider>
            <ClientOnly>
              <Header />
            </ClientOnly>
            {children}
          </ThemeDataProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
