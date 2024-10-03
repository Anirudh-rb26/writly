import "./globals.css";
// Tutorial uses Outfit
// import { Outfit } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";

const roboto = Roboto_Condensed({
  // const roboto = Outfit({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Writly",
  description: "Write your Next Blog",
  icons: [
    {
      rel: "Web Icon",
      url: "./assets/logo-light.png",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
