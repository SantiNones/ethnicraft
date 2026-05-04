import { CollectionSplit } from "../../components/CollectionSplit";
import { Hero } from "../../components/Hero";
import { PopularCategories } from "../../components/PopularCategories";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata = {
  title: "ETHNICRAFT",
  description: "ETHNICRAFT - Designer furniture",
};

export default function EthnicraftPage() {
  return (
    <div className="flex flex-1 flex-col bg-[var(--ec-color-bg)]">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <CollectionSplit />
        <PopularCategories />
      </main>
    </div>
  );
}
