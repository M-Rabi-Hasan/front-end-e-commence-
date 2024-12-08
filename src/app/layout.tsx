import Footer from "../../components/Footer-Section";
import Header from "../../components/Header";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Exclusive E-Commerce",
  description: "E-Commerce website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          {/* Header Component */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow px-4 sm:px-6 lg:px-12">
            {children}
          </main>

          {/* Footer */}
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
