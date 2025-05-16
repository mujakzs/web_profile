
import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Provider from "@/components/Hoc/Provider";

const font = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "RSE",
  description: "Rapid Signal Electronics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <Provider>
          <ResponsiveNav />
          {children}
        </Provider>
        
      </body>
    </html>
  );
}
