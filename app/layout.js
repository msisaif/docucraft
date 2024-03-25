import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "./globals.css";

export const metadata = {
  title: "DocuCraft",
  description: "DocuCraft - A dcumentation website by Protocol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="h-full lg:ml-72 xl:ml-80">
          <Header />

          <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
