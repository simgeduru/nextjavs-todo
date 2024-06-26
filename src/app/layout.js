import { Inter, Lusitana } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lusitana = Lusitana({subsets:["latin"], weight:["400", "700"]})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} bg-[#FFF3C7]`}>{children}</body>
    </html>
  );
}
