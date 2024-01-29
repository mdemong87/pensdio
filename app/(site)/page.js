import ClientExperiences from "../componnent/ClientExperiences";
import Expertise from "../componnent/Expertise";
import HeroSlider from "../componnent/HeroSlider";
import LatestArticle from "../componnent/LatestArticle";
import LatestWork from "../componnent/LatestWork";
import Transforming from "../componnent/Transforminging";


export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Transforming />
      <Expertise />
      <LatestWork />
      <ClientExperiences />
      <LatestArticle />
    </main>
  );
}
