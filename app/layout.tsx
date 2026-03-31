import Navbar from "@/components/common/Navbar";
import "./globals.css";
import Footer from "@/components/common/Footer";


export const metadata = {
  title: "Bharath Smart STEM",
  description: "STEM learning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}