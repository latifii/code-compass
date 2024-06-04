import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
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
