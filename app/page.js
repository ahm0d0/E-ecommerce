
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux'
import LeftMenu from "./components/LeftMenu.jsx";
import Slider from "./components/Slider.jsx";
import HeaderSections from "./components/HeaderSections.jsx";
import FlashSales from "./components/FlashSales.jsx";
import BestSelling from './components/BestSelling.jsx'
import BroseByCategory from "./components/BroseByCategory.jsx";
import MusicExpeineScttion from "./components/MusicExpeineScttion.jsx";
import ExploreOurProducts from "./components/ExploreOurProducts.jsx";
import NewArrival from "./components/NewArrival.jsx";
import LastSection from "./components/LastSection.jsx";
export default function Home() {


  return (
   <>
   <div className="flex">
   <LeftMenu/>
   <Slider/>
   </div>
  <FlashSales/>
   <BroseByCategory/>
   <BestSelling/>
   <MusicExpeineScttion/>
   <ExploreOurProducts/>
   <NewArrival/>
   <LastSection/>
   </>
  );
}
