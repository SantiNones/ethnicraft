import Link from "next/link";

type CollectionSplitCard = {
  title: string;
  href: string;
};

const CARDS: CollectionSplitCard[] = [
  { title: "Living", href: "#collections" },
  { title: "Dining", href: "#collections" },
];

export function CollectionSplit() {
  return (
    <section id="collections" className="w-full bg-[var(--ec-color-surface)]">
      <div className="mx-auto w-full max-w-[var(--ec-container-max)] px-[var(--ec-container-edge)] py-[var(--ec-space-16)] md:py-[var(--ec-space-20)]">
        <div className="grid gap-[var(--ec-space-8)] md:grid-cols-2 md:gap-[var(--ec-space-10)]">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="relative overflow-hidden rounded-[var(--ec-radius-4)] border border-[color:var(--ec-color-border)]"
            >
              <div className="relative aspect-[5/4] w-full md:aspect-[16/10]">
                <div className="absolute inset-0 bg-[var(--ec-color-surface)]" />
                <div className="absolute inset-0 bg-[var(--ec-color-overlay)] opacity-0" />

                <div className="relative z-10 flex h-full flex-col justify-end p-[var(--ec-space-8)] md:p-[var(--ec-space-10)]">
                  <h2 className="text-[length:var(--ec-text-h3)] leading-[var(--ec-leading-snug)] tracking-[var(--ec-tracking-tight)] text-[var(--ec-color-text)] md:text-[length:var(--ec-text-h2)]">
                    {card.title}
                  </h2>
                  <div className="mt-[var(--ec-space-6)]">
                    <Link
                      href={card.href}
                      className="inline-flex h-[var(--ec-space-12)] items-center justify-center rounded-[var(--ec-radius-full)] bg-[var(--ec-color-text)] px-[var(--ec-space-6)] text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-bg)]"
                    >
                      Shop collection
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
