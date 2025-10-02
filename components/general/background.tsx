export default function BGGradient({children} : {children?: React.ReactNode}) {
    return (
        <div className="min-h-screen w-full bg-transparent relative">
  {/* Top Fade Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 0%, transparent 100%)",
    }}
  />
  <div className="z-20">

     {children}
  </div>
</div>
    )
}