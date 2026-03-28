type PopularCategory = {
  label: string;
  href: string;
  imageSrc: string;
};

const CATEGORIES: PopularCategory[] = [
  {
    label: "Chairs",
    href: "#categories",
    imageSrc: "/images/category-chairs.jpg",
  },
  {
    label: "Tables",
    href: "#categories",
    imageSrc: "/images/category-tables.jpg",
  },
  {
    label: "Sideboards",
    href: "#categories",
    imageSrc: "/images/category-sideboards.jpg",
  },
  {
    label: "Outdoor",
    href: "#categories",
    imageSrc: "/images/category-outdoor.jpg",
  },
];

export function PopularCategories() {
  return (
    <section id="categories" className="w-full bg-[var(--ec-color-surface)]">
      <div className="mx-auto w-full max-w-[var(--ec-container-max)] px-[var(--ec-container-edge)] py-[var(--ec-space-16)] md:py-[var(--ec-space-20)]">
        <div>
          <h2 className="text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text-muted)]">
            Popular Categories
          </h2>
          <div className="mt-[var(--ec-space-5)] h-px w-full bg-[var(--ec-color-border)]" />
        </div>

        <div className="mt-[var(--ec-space-10)] grid grid-cols-1 gap-[var(--ec-space-8)] sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <a key={category.label} href={category.href} className="group">
              <div className="relative aspect-square w-full overflow-hidden rounded-[var(--ec-radius-4)] bg-[var(--ec-color-bg)]">
                <img
                  alt=""
                  src={category.imageSrc}
                  className="absolute inset-0 h-full w-full object-cover md:will-change-transform md:transition-transform md:duration-500 md:ease-out md:group-hover:scale-105"
                />
              </div>
              <div className="mt-[var(--ec-space-6)] text-[length:var(--ec-text-h3)] leading-[var(--ec-leading-snug)] tracking-[var(--ec-tracking-tight)] text-[var(--ec-color-text)]">
                {category.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
