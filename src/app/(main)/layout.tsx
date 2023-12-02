import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const Dm_sans = DM_Sans({ subsets: ["latin-ext"] });
export const metadata: Metadata = {
  title: "Twittie",
  description: "Twitter growth tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Dm_sans.className}>
        <div className=" bg-main h-full w-full">{children}</div>
      </body>
    </html>
  );
}
