import HeroBanner from "@/components/heroBanner";
import IconsInfo from "@/components/icons";
import Info from "@/components/info";
import Works from "@/components/works";
import AboutCompany from "@/components/AboutCompany";
import FAQAccordionNoJSX from "@/components/FAQAccordion";
import ContactsNoJSX from "@/components/Contacts";
export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroBanner />
      <IconsInfo />
      <Info />
      <Works />
      <AboutCompany/>
      <FAQAccordionNoJSX/>
      <ContactsNoJSX/>
    </div>
  );
}
