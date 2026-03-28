import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full bg-[var(--ec-color-bg)]">
      <div className="w-full px-[var(--ec-container-edge)] pt-[var(--ec-space-10)] pb-[var(--ec-space-6)] md:px-[var(--ec-space-4)] md:pt-[var(--ec-space-12)] md:pb-0">
        <div className="relative overflow-hidden rounded-[var(--ec-radius-4)]">
          <div className="relative aspect-[16/10] w-full md:aspect-[1880/720]">
            <div aria-hidden="true" className="absolute inset-0">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/videos/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[var(--ec-color-overlay)] opacity-60"
            />

            <div className="relative z-10 flex h-full items-center justify-center p-[var(--ec-space-10)] md:p-[var(--ec-space-16)]">
              <div className="flex w-full flex-col items-center gap-[var(--ec-space-10)] text-center">
                <h1 className="text-[length:var(--ec-text-h2)] leading-[var(--ec-leading-tight)] tracking-[var(--ec-tracking-tight)] text-[var(--ec-color-bg)] md:text-[length:var(--ec-text-hero)]">
                  Foundations for the stories of your life.
                </h1>
                <Link
                  href="#furniture"
                  className="inline-flex h-[var(--ec-space-12)] items-center justify-center rounded-[var(--ec-radius-full)] border-2 border-[color:var(--ec-color-bg)] px-[var(--ec-space-6)] text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-bg)]"
                >
                  Explore all products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
