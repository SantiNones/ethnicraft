import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full bg-[var(--ec-color-surface)]">
      <div className="mx-auto w-full max-w-[var(--ec-container-max)] px-[var(--ec-container-edge)] py-[var(--ec-space-16)] md:py-[var(--ec-space-20)]">
        <div className="rounded-[var(--ec-radius-4)] bg-[var(--ec-color-bg)] p-[var(--ec-space-10)] md:p-[var(--ec-space-16)]">
          <div className="grid gap-[var(--ec-space-12)] md:grid-cols-[1fr_1.15fr] md:items-center md:gap-[var(--ec-space-16)]">
            <div>
              <p className="text-[length:var(--ec-text-caption)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text-muted)]">
                Solid wood furniture
              </p>
              <h1 className="mt-[var(--ec-space-3)] text-[length:var(--ec-text-h1)] leading-[var(--ec-leading-tight)] tracking-[var(--ec-tracking-tight)] text-[var(--ec-color-text)] md:text-[length:var(--ec-text-hero)]">
                Timeless design for everyday living
              </h1>
              <p className="mt-[var(--ec-space-6)] text-[length:var(--ec-text-body-lg)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text-muted)]">
                Crafted in solid wood. Built to last. Made to feel at home.
              </p>

              <div className="mt-[var(--ec-space-10)] flex flex-wrap gap-[var(--ec-space-4)]">
                <Link
                  href="#collections"
                  className="inline-flex h-[var(--ec-space-12)] items-center justify-center rounded-[var(--ec-radius-full)] bg-[var(--ec-color-text)] px-[var(--ec-space-6)] text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-bg)]"
                >
                  Explore collections
                </Link>
                <Link
                  href="#about"
                  className="inline-flex h-[var(--ec-space-12)] items-center justify-center rounded-[var(--ec-radius-full)] border border-[color:var(--ec-color-border)] px-[var(--ec-space-6)] text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[var(--ec-radius-4)] border border-[color:var(--ec-color-border)] bg-[var(--ec-color-surface)]">
              <div className="aspect-[5/4] w-full md:aspect-[16/10]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
