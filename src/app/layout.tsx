import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next With Redux",
    description: "Create app in next JS with redux for statemanagement",
};

interface RootLayoutProps {
    readonly children: React.ReactNode
};

export default function RootLayout({ children }: RootLayoutProps) {

    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <div className="min-h-[calc(100vh-90px)]">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
