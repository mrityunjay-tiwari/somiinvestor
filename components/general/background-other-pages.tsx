import React from "react";

export function BGGradientOtherSections({children} : {children : React.ReactNode}) {
    return( 
        <div className="min-h-screen w-full bg-transparent relative ">
  {/* Diagonal Fade Bottom Grid Left Background */}
  <div
    className="absolute inset-0 -z-10"
    style={{
      backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
      backgroundSize: "39px 39px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}
     <div className="relative z-10">
        {children}

     </div>
</div>
    )
}

