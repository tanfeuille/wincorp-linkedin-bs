import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "LinkedIn Bullshit Translator | SPINEX Edition",
  description:
    "Transformez vos pensees normales en posts LinkedIn viraux. 17 personas, 4 niveaux de bullshit, 100% de disruption.",
  openGraph: {
    title: "LinkedIn Bullshit Translator",
    description:
      "Transformez vos pensees normales en posts LinkedIn viraux. Powered by l'ego et les anglicismes.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Bullshit Translator",
    description: "Le traducteur definitif de langage normal en bullshit LinkedIn.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased linkedin-bg min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
