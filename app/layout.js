import "./globals.css";
import { Montserrat } from "next/font/google";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap"
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-32 my_12`}>
        <nav>
          <h1>Logo</h1>
          <ul></ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
