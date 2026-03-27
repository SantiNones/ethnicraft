import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="w-full bg-[var(--ec-color-bg)]">
      <div className="mx-auto w-full max-w-[var(--ec-header-max)] px-[var(--ec-container-edge)]">
        <div className="flex h-[var(--ec-space-20)] items-center justify-between">
          <Link
            href="/"
            className="text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
          >
            ETHNICRAFT
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-[var(--ec-space-10)]">
              <li>
                <Link
                  href="#collections"
                  className="text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="#categories"
                  className="text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-[var(--ec-space-4)]">
            <Link
              href="#search"
              className="hidden sm:inline-flex h-[var(--ec-space-12)] items-center rounded-[var(--ec-radius-full)] border border-[color:var(--ec-color-border)] px-[var(--ec-space-5)] text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
            >
              Search
            </Link>
            <Link
              href="#menu"
              className="inline-flex h-[var(--ec-space-12)] items-center rounded-[var(--ec-radius-full)] border border-[color:var(--ec-color-border)] px-[var(--ec-space-5)] text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
            >
              Menu
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
