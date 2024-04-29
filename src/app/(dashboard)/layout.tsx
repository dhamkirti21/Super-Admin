import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Dashboard/header/Header";
import SideBar from "@/components/Shared/sidebars/SideBar";
import styles from "./dashboard/dashboard.module.css";

const inter = Inter({ subsets: ["latin"] });

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
        <html lang="en">
            <body className={inter.className}>
                <main className={styles.main}>
                    <Header />
                    <section className={styles.container} >
                        <SideBar />
                        <section className={styles.Right}>
                            {children}
                        </section>
                    </section>
                </main>
            </body>
        </html>
    );
}