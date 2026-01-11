import React from "react";

export function BGGradientAboutSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-transparent relative ">
      {/* Diagonal Fade Bottom Grid Left Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e6e8eb 1px, transparent 1px),
        linear-gradient(to bottom, #e6e8eb 1px, transparent 1px)
      `,
          backgroundSize: "20px 25px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
        }}
      />
      {/* Your Content/Components */}
      <div className="z-20">{children}</div>
    </div>
  );
}
