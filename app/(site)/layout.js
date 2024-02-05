import localFont from 'next/font/local';
import Footer from "../componnent/Footer";
import Header from "../componnent/Header";
import "../globals.css";
const myFontOne = localFont({
  src: "../../public/Font/RAKIBY.ttf",
  variable: "--rakiby"
});

const myFontTwo = localFont({
  src: "../../public/Font/BeausiteFitWebTrial-Regular.woff2",
  variable: "--beaust"
});

export const metadata = {
  title: "Pensdio",
  description: "Make Brands That Are Human-Centered And Compelling. Join our vibrant global digital consultancy. Discover cutting-edge solutions and tap into unparalleled expertise for success in the dynamic and ever-evolving digital landscape. Let's collaborate for excellence and growth in your digital endeavor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${myFontOne.variable} ${myFontTwo.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
