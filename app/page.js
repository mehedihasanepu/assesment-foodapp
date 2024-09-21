
import BestSeller from "./component/bestSeller";
import ChooseUs from "./component/chooseUs";
import GetStartAndAboutUs from "./component/getStart&aboutUs"
import Slider from "./component/slider";


export default function Home() {
  return (
    <div>
      <main>
        <Slider />
        < GetStartAndAboutUs/>
        <ChooseUs/>
        <BestSeller/>
      </main>
    </div>
  );
}
