import React from "react";

export function BGGradientContactSection({children} : {children : React.ReactNode}) {
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
      backgroundSize: "40px 40px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
    }}
  />
     {/* Your Content/Components */}
     <div className="z-20">
        {children}

     </div>
</div>
    )
}

