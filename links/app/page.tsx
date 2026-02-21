import { LinksData } from "@/types/links";
import linksData from "@/data/links.json";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const data = linksData as LinksData;

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <main className="mx-auto max-w-2xl px-6 py-12 sm:py-20">
        <Header profile={data.profile} />
        {data.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
        <Footer />
      </main>
    </div>
  );
}
