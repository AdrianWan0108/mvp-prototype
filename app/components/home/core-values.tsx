"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "../container";
import { photos } from "@/app/lib/images";
import { cn } from "@/app/lib/cn";

const values = [
  {
    title: "Collaboration",
    body: "Open, clear communication that builds trust, empathy, and a real community spirit.",
    photo: photos.team,
  },
  {
    title: "Humility",
    body: "A culture of learning, adaptability, and growth — valuing feedback as a chance to get better.",
    photo: photos.privateSession,
  },
  {
    title: "Accountability",
    body: "Ownership and responsibility in delivering every session and addressing issues proactively.",
    photo: photos.dorothyPose,
  },
  {
    title: "Innovation",
    body: "Resourcefulness, creativity, and a forward-thinking mindset to keep moving you forward.",
    photo: photos.gyrotonic,
  },
];

const last = values.length - 1;

export function CoreValues() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative isolate overflow-hidden bg-brand-900 text-white">
      {/* Per-word background photos — dissolve in on hover (inline timing so it
          never hard-cuts) */}
      {values.map((value, i) => (
        <Image
          key={value.title}
          src={value.photo.src}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
          style={{
            opacity: active === i ? 1 : 0,
            transition: "opacity 1000ms ease-in-out",
          }}
        />
      ))}
      <div aria-hidden className="absolute inset-0 bg-brand-900/70" />

      <Container className="relative pt-20 sm:pt-24">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
          What we stand for
        </p>
        <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">
          Our core values
        </h2>
      </Container>

      {/* Interactive row — full-bleed so the words use the whole width */}
      <div className="relative mt-16 h-[26rem] w-full">
        {/* Summaries — all centered in the same spot, mid-section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[14rem] flex justify-center px-6">
          <div className="relative h-36 w-full max-w-2xl">
            {values.map((value, i) => (
              <p
                key={value.title}
                className="absolute inset-0 flex items-center justify-center text-center font-serif text-xl leading-relaxed text-white sm:text-2xl"
                style={{
                  opacity: active === i ? 1 : 0,
                  transition: "opacity 500ms ease",
                }}
              >
                {value.body}
              </p>
            ))}
          </div>
        </div>

        {/* Words */}
        <div className="absolute inset-x-0 bottom-[7.5rem] flex px-4 sm:px-8">
          {values.map((value, i) => (
            <div
              key={value.title}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="flex-1 text-center"
            >
              <span
                className={cn(
                  "cursor-default font-serif text-3xl font-semibold transition-colors duration-300 sm:text-4xl lg:text-5xl",
                  active !== null && active !== i
                    ? "text-white/40"
                    : "text-white",
                )}
              >
                {value.title}
              </span>
            </div>
          ))}
        </div>

        {/* Dots + extending lines, aligned to each word's center */}
        <div className="pointer-events-none absolute inset-x-0 bottom-24 h-3 px-4 sm:px-8">
          <div className="relative h-full w-full">
            {values.map((value, i) => {
              const center = (i + 0.5) * 25; // % across the row
              const isOn = active === i;
              const rightWidth = i === last ? 0 : 100 - center;
              const leftWidth = i === 0 ? 0 : center;
              // The line starts right after the dot has dissolved in, then
              // accelerates out (slow → fast) to the edge over ~2.8s. Retracts
              // quickly on leave.
              const lineTransition = isOn
                ? "width 2800ms cubic-bezier(0.7,0,0.84,0) 0ms"
                : "width 300ms ease-out 0ms";
              return (
                <div key={value.title}>
                  {/* line growing right from the dot */}
                  <span
                    className="absolute top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-brand-200"
                    style={{
                      left: `${center}%`,
                      width: isOn ? `${rightWidth}%` : "0%",
                      transition: lineTransition,
                      boxShadow: "0 0 8px rgba(145,208,175,0.85)",
                    }}
                  />
                  {/* line growing left from the dot */}
                  <span
                    className="absolute top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-brand-200"
                    style={{
                      right: `${100 - center}%`,
                      width: isOn ? `${leftWidth}%` : "0%",
                      transition: lineTransition,
                      boxShadow: "0 0 8px rgba(145,208,175,0.85)",
                    }}
                  />
                  {/* dot under the word — dissolves in first */}
                  <span
                    className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-300 shadow-[0_0_12px_4px_rgba(145,208,175,0.9)]"
                    style={{
                      left: `${center}%`,
                      opacity: isOn ? 1 : 0,
                      transition: "opacity 600ms ease-in-out 0ms",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
