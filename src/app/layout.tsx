import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next - Zustand",
    description: "Create app in next JS with zustand for statemanagement",
};

interface RootLayoutProps {
    readonly children: React.ReactNode
};

export default function RootLayout({ children }: RootLayoutProps) {

    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <div className="min-h-[100vh] pt-[50px] bg-white">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
