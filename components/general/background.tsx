export default function BGGradient({children} : {children?: React.ReactNode}) {
    return (
        <div className="min-h-screen w-full bg-transparent relative">
  {/* Top Fade Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #d5d9dd 1px, transparent 1px),
        linear-gradient(to bottom, #d5d9dd 1px, transparent 1px)
      `,
      backgroundSize: "20px 25px",
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