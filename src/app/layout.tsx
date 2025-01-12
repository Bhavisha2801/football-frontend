import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="grid grid-cols-[1fr_5fr]">
        <Sidebar />
        {children}
        </div>
      </body>
    </html>
  );
}
