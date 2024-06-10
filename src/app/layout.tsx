import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const yekanweb = localFont({
  src: [
    {
      path: "../../public/fonts/yekan/IRANSansWeb_UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekan/IRANSansWeb_Light.woff2",
      weight: "300",
      style: "normal",
    },

    {
      path: "../../public/fonts/yekan/IRANSansWeb_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekan/IRANSansWeb.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekan/IRANSansWeb_Bold.woff2",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--font-yekanweb",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`${yekanweb.variable} ${figtree.variable}`}>
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-200 flex items-center justify-center">
          Header
        </header>
        <div className="flex-1 flex container mx-10">{children}</div>
        <footer className="bg-gray-200 flex items-center justify-center">
          footer
        </footer>
      </body>
    </html>
  );
}
