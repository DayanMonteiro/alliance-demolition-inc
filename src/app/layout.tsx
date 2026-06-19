import type { Metadata } from "next";
import "./globals.css";
import TopBar from "../components/TopBar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";



export const metadata: Metadata = {
  title: "Alliance Demolition Inc",
  description: "Demolition Contractor Services SF Bay Area",
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
