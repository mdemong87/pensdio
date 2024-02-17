import ClientExperiences from "../componnent/ClientExperiences";
import Expertise from "../componnent/Expertise";
import HeroSlider from "../componnent/HeroSlider";
import LatestArticle from "../componnent/LatestArticle";
import LatestWork from "../componnent/LatestWork";
import Transforming from "../componnent/Transforminging";
import getData from "./blog/helper/getData";




export const revalidate = 10;

export default async function Home() {

  const data = await getData();
  console.log(data);

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
