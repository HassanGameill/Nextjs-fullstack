import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server"; // Ensure this is the correct import
import { ReactNode } from "react";
import UserHeader from "@/components/common/UserHeader/UserHeader";
import { ProvidersTheme } from "../Providers/ThemeProvider";

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
  title: "Fullstack Learning",
  description: "Fullstack - Nextjs - typescript - Prisma - vecel - Free hosting",
};

type Props = {
  children: ReactNode;
  params: { locale: string }; // Ensure locale is a string
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = params; // Destructure locale from params
  const messages = await getMessages({ locale }); // Pass locale as an object
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProvidersTheme>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <UserHeader />
          <main className="">{children}</main>
        </NextIntlClientProvider>
        </ProvidersTheme>
      </body>
    </html>
  );
}



