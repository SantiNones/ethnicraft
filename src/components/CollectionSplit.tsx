import Link from "next/link";

type CollectionSplitCard = {
  title: string;
  href: string;
  imageSrc: string;
};

const CARDS: CollectionSplitCard[] = [
  {
    title: "Indoor Collection",
    href: "#indoor",
    imageSrc: "/images/collection-indoor.jpg",
  },
  {
    title: "Outdoor Collection",
    href: "#outdoor",
    imageSrc: "/images/collection-outdoor.jpg",
  },
];

export function CollectionSplit() {
  return (
    <section
      id="collections"
      className="mt-[var(--ec-space-6)] w-full bg-[var(--ec-color-bg)] md:mt-[var(--ec-space-4)]"
    >
      <div className="w-full px-[var(--ec-container-edge)] pt-0 pb-[var(--ec-space-12)] md:px-[var(--ec-space-4)] md:pb-[var(--ec-space-16)]">
        <div className="grid gap-[var(--ec-space-4)] sm:grid-cols-2 md:gap-[var(--ec-space-5)]">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-[var(--ec-radius-4)]"
            >
              <div className="relative aspect-[5/4] w-full md:aspect-[16/10]">
                <div aria-hidden="true" className="absolute inset-0">
                  <img
                    alt=""
                    src={card.imageSrc}
                    className="absolute inset-0 h-full w-full object-cover md:will-change-transform md:transition-transform md:duration-500 md:ease-out md:group-hover:scale-[1.03]"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[var(--ec-color-overlay)] opacity-40 md:transition-opacity md:duration-500 md:ease-out md:group-hover:opacity-35"
                />

                <div className="relative z-10 flex h-full flex-col justify-end p-[var(--ec-space-8)] md:p-[var(--ec-space-10)]">
                  <div className="flex flex-wrap items-center justify-between gap-[var(--ec-space-5)]">
                    <h2 className="text-[length:var(--ec-text-h2)] leading-[var(--ec-leading-snug)] tracking-[var(--ec-tracking-tight)] text-[var(--ec-color-bg)]">
                      {card.title}
                    </h2>
                    <Link
                      href={card.href}
                      className="inline-flex h-[var(--ec-space-12)] items-center justify-center rounded-[var(--ec-radius-full)] border-2 border-[color:var(--ec-color-bg)] px-[var(--ec-space-6)] text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-bg)]"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
