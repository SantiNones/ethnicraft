"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    el.muted = true;
    el.playsInline = true;

    const play = async () => {
      try {
        await el.play();
      } catch {
        // Autoplay may be blocked by the browser; keep video as background.
      }
    };

    void play();
    el.addEventListener("loadedmetadata", play);

    return () => {
      el.removeEventListener("loadedmetadata", play);
    };
  }, []);

  return (
    <section className="w-full bg-[var(--ec-color-bg)]">
      <div className="w-full px-[var(--ec-container-edge)] pt-[var(--ec-space-10)] pb-[var(--ec-space-6)] md:px-[var(--ec-space-4)] md:pt-[var(--ec-space-12)] md:pb-0">
        <div className="relative overflow-hidden rounded-[var(--ec-radius-4)]">
          <div className="relative aspect-[5/4] w-full md:aspect-[1880/720]">
            <div aria-hidden="true" className="absolute inset-0">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src="/videos/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[var(--ec-color-overlay)] opacity-60"
            />

            <div className="relative z-10 flex h-full items-center justify-center p-[var(--ec-space-8)] md:p-[var(--ec-space-16)]">
              <div className="flex w-full flex-col items-center gap-[var(--ec-space-6)] text-center md:gap-[var(--ec-space-10)]">
                <h1 className="text-[length:var(--ec-text-h3)] leading-[var(--ec-leading-tight)] tracking-[var(--ec-tracking-tight)] text-[var(--ec-color-bg)] sm:text-[length:var(--ec-text-h2)] md:text-[length:var(--ec-text-hero)]">
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
