import { CollectionSplit } from "../components/CollectionSplit";
import { Hero } from "../components/Hero";
import { SiteHeader } from "../components/SiteHeader";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[var(--ec-color-bg)]">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <CollectionSplit />
      </main>
    </div>
  );
}
