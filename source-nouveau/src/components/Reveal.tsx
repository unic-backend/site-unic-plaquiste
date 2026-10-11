import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({
  to,
  suffix = "",
  duration = 1.8,
  className = "",
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {val.toLocaleString("fr-FR").replace(/\u202f/g, " ")}
      {suffix}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  desc,
  dark = false,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-condensed text-[13px] font-bold uppercase tracking-[0.22em] ${
          dark
            ? "bg-gold-500/15 text-gold-400 ring-1 ring-gold-500/40"
            : "bg-royal-800 text-gold-400 shadow-[0_8px_24px_-8px_rgba(7,26,125,.6)]"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-gold-400" : "bg-gold-400"} animate-pulse`} />
        {eyebrow}
      </span>
      <h2
        className={`mt-5 font-display text-3xl leading-[1.05] tracking-wide uppercase sm:text-4xl lg:text-[2.9rem] ${
          dark ? "text-white" : "text-royal-950"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 text-[17px] leading-relaxed ${dark ? "text-royal-100/85" : "text-slate-600"}`}>
          {desc}
        </p>
      )}
    </Reveal>
  );
}
