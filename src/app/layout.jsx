import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingAssistant from "@/components/FloatingAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Avadhut Industrial Solutions",
  description:
    "Electronics PCB Assembly, Transformer Winding, Electronics Rework & Repair, PCB Servicing, Testing & Debugging, and Electronics Consultancy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen bg-white font-sans text-foreground antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>

       {/* <FloatingAssistant />*/}
        <WhatsAppButton />
      </body>
    </html>
  );
}

