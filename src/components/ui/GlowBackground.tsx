/**
 * Ambient page background: a faint grid that fades out, plus two soft accent
 * glows. Purely decorative, so it's `aria-hidden` and sits behind everything
 * with `pointer-events-none`.
 *
 * Rendered once in the layout rather than per-section — repeating large blurred
 * gradients is the fastest way to tank paint performance on mobile.
 */
export function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="grid-lines absolute inset-0 opacity-[0.35]"
        style={{
          maskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, #000 30%, transparent 75%)",
        }}
      />
      <div
        className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full opacity-25 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)" }}
      />
      <div
        className="absolute top-[45%] -right-40 h-[30rem] w-[30rem] rounded-full opacity-[0.14] blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--accent-partner) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
