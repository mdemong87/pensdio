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
  description: "Make Brands That Are Human-Centered And Compelling. Join our vibrant global digital consultancy. Discover cutting-edge solutions and tap into unparalleled expertise for success in the dynamic and ever-evolving digital landscape. Let's collaborate for excellence and growth in your digital endeavor.digital branding agency ,creative graphic design service,motion graphics company ,UX/UI product design, web development agency, social media advertising solutions, copywriting services, branding design, graphic design firm,user experience design.affordable branding design for USA businesses,explainer video production for UAE companies ,custom website design for Canadian startup,e-commerce website development for UK businesses,social media advertising for German companies in English,logo design for international startups,content writing services for international websites,best digital marketing agencies for international businesses,hire a branding agency for international expansion,create an animated explainer video for a global audience,design a high-converting website for international markets,increase website traffic internationally with SEO,manage social media accounts for international businesses in multiple languages,write website content that ranks globally,create Google Ads campaigns targeting international audiences,affordable digital marketing solutions for international businesses,design a logo for a global brand,the best copywriter for international website content"
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
