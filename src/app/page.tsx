import HeroBanner from "@/components/heroBanner";
import IconsInfo from "@/components/icons";
export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col">
      <HeroBanner/>
      <IconsInfo/>
    </div>
  );
}