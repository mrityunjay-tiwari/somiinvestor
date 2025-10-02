export default function DiscountTag() {
  return (
    <div className="relative w-28 h-52 flex items-center justify-center bg-white">
      {/* Curved arrow */}
      <svg
  className="absolute left-0 top-1/2 w-24 h-24 text-zinc-400"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 100 100"
>
  {/* Flipped curved path */}
  <path d="M80 20 Q40 80 20 40" stroke="currentColor" fill="none" />
  
  {/* Arrowhead */}
  <path
    d="M20 40 l-5 10 l15 -5 l-10 -5 z"
    fill="currentColor"
  />
</svg>

      {/* Rotated Text */}
      <span className="absolute rotate-[-15deg] text-zinc-600 translate-x-6 -translate-y-6">
        Hover on the cards to flip
      </span>
    </div>
  );
}
