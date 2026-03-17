import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ViewProvider } from "./context/ViewContext";
import { ToastProvider } from "./context/ToastContext";
import ToastContainer from "./components/ToastContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Modern admin dashboard built with Next.js",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <ViewProvider>
          <ToastProvider>
            {children}
            <ToastContainer />
          </ToastProvider>
        </ViewProvider>
      </body>
    </html>
  );
}