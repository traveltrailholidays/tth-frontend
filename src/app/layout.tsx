import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/stylesheets/globals.css";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import ThemeDataProvider from "@/context/theme-data-provider";

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
        <NextThemesProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeDataProvider>{children}</ThemeDataProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
