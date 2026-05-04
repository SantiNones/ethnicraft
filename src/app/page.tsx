import Link from "next/link";

export const metadata = {
  title: "GoodOdds Studio",
  description: "Digital products, websites and automation systems.",
};

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-[var(--ec-color-bg)] px-[var(--ec-container-edge)]">
      <div className="w-full max-w-xl py-[var(--ec-space-20)] text-center">
        <div className="text-[length:var(--ec-text-h2)] leading-[var(--ec-leading-tight)] tracking-[var(--ec-tracking-tight)]">
          GoodOdds Studio
        </div>
        <div className="mt-[var(--ec-space-4)] text-[length:var(--ec-text-body-lg)] leading-[var(--ec-leading-normal)] text-[var(--ec-color-text-muted)]">
          Digital products, websites and automation systems.
        </div>
        <div className="mt-[var(--ec-space-8)]">
          <Link
            href="/ethnicraft"
            className="inline-flex h-[var(--ec-space-12)] items-center justify-center rounded-[var(--ec-radius-full)] border border-[color:var(--ec-color-border)] bg-[var(--ec-color-bg)] px-[var(--ec-space-6)] text-[length:var(--ec-text-body)] leading-[var(--ec-leading-normal)] tracking-[var(--ec-tracking-normal)] text-[var(--ec-color-text)]"
          >
            View Ethnicraft project
          </Link>
        </div>
      </div>
    </main>
  );
}
