import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBar from "../components/TopBar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Alliance Demolition Inc",
  description: "Demolition Contractor Services SF Bay Area",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Menu />

        <main className="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
