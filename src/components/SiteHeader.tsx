import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="w-full bg-[var(--ec-color-bg)]">
      <div className="mx-auto w-full max-w-[var(--ec-header-max)] px-[var(--ec-container-edge)]">
        <div className="relative flex h-[var(--ec-space-20)] items-center justify-between">
          <Link
            href="/"
            aria-label="Ethnicraft"
            className="text-[length:var(--ec-text-h3)] leading-[var(--ec-leading-snug)] tracking-[var(--ec-tracking-tight)] text-[var(--ec-color-text)]"
          >
            Ethnicraft
          </Link>

          <nav
            aria-label="Primary"
            className="hidden md:flex flex-1 justify-center min-w-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex-none"
          >
            <ul className="flex items-center gap-[var(--ec-space-6)] lg:gap-[var(--ec-space-10)] whitespace-nowrap">
              <li>
                <Link
                  href="#furniture"
                  className="text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
                >
                  All Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="#indoor"
                  className="text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
                >
                  Indoor
                </Link>
              </li>
              <li>
                <Link
                  href="#outdoor"
                  className="text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
                >
                  Outdoor
                </Link>
              </li>
              <li className="hidden lg:block">
                <Link
                  href="#collaborations"
                  className="text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
                >
                  Collaborations
                </Link>
              </li>
              <li className="hidden lg:block">
                <Link
                  href="#inspiration"
                  className="text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
                >
                  Inspiration
                </Link>
              </li>
              <li>
                <Link
                  href="#search"
                  aria-label="Search"
                  className="inline-flex h-[var(--ec-space-12)] w-[var(--ec-space-12)] items-center justify-center rounded-[var(--ec-radius-full)]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[var(--ec-space-6)] w-[var(--ec-space-6)]"
                  >
                    <path
                      d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M16.2 16.2 21 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-[var(--ec-space-4)]">
            <Link
              href="#cart"
              aria-label="Cart"
              className="inline-flex md:hidden h-[var(--ec-space-12)] w-[var(--ec-space-12)] items-center justify-center rounded-[var(--ec-radius-full)] border border-[color:var(--ec-color-border)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-[var(--ec-space-6)] w-[var(--ec-space-6)]"
              >
                <path
                  d="M7 8a5 5 0 0 1 10 0v2h2v11H5V10h2V8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 10V8a3 3 0 0 1 6 0v2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <Link
              href="#cart"
              className="hidden md:inline-flex h-[var(--ec-space-12)] items-center gap-[var(--ec-space-2)] rounded-[var(--ec-radius-full)] border border-[color:var(--ec-color-border)] bg-[var(--ec-color-bg)] px-[var(--ec-space-5)] text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
              aria-label="Cart"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-[var(--ec-space-6)] w-[var(--ec-space-6)]"
              >
                <path
                  d="M7 8a5 5 0 0 1 10 0v2h2v11H5V10h2V8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 10V8a3 3 0 0 1 6 0v2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span
                aria-hidden="true"
                className="h-[var(--ec-space-4)] w-px bg-[var(--ec-color-border)]"
              />
              <span>2</span>
            </Link>
            <Link
              href="#menu"
              className="inline-flex h-[var(--ec-space-12)] items-center rounded-[var(--ec-radius-full)] border border-[color:var(--ec-color-border)] px-[var(--ec-space-5)] text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)] md:hidden"
            >
              Menu
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
