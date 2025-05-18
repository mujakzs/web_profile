
import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Provider from "@/components/Hoc/Provider";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

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
          <Footer/>
          <ScrollToTop />
        </Provider>
        
      </body>
    </html>
  );
}
