import { BGGradientOtherSections } from "@/components/general/background-other-pages";
import Link from "next/link";
import '../../globals.css';

export default function HomeVisionPage() {
    return (
        <>
            <BGGradientOtherSections>
                <div className="mt-20 flex flex-col justify-center items-center pb-16">
                    <div className="pb-1 mb-16 flex flex-col items-center">
                        <h1 className="mx-auto mb-2 max-w-4xl text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">Vision</h1>
                        <h2><Link href={'/'}>Home</Link> / Vision</h2>
                    </div>
                    <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left z-20 bg-white">
                        
                        <h3>{`I often to use this introduction as a light-hearted chance to talk to you about the changes and progress that we have made in recent months. Over the past several years we have made considerable investments in developing modern technology in various types of conveyor belts. This enables us to satisfy the requirements of our customers quickly and with a high degree of flexibility. We are specialist in the developement and manufacturing of STA, SAR-36 etc.Our scope of supply convers heavy duty, extra ordinary light weighted fabric STA Conveyor Belt for heavy mining industries both above & below ground. Our Products are in use around the World. These successes serve as confirmation of our customer-oriented stance and as a challange for us to hold this line as we move into the future with Powered to Move The World.`}</h3>
                        
                        <h2 className="font-semibold text-xl my-4">Competence and Experience- Innovation is our Tradiion</h2>
                        <h3>{`Aramid is an organic fiber in the aromatic polyamide family. The unique properties in STA Belts is with a combination of high strength, high modulus, toughness and thermal stability. It is INNOVATED & developed for demanding industrial and advance technology applications for the replacement of Steel Cord by STA Conveyor Belts.
                            `}</h3>
                        
                        
                        <h3>{`Quality Management - from the lab through to logistics
                            `}</h3>
                        
                        
                        <h3>{`We develop Customer-specific products that meet the high demands of our Customers through consistent application of our in-depth expertise. A quality management system, built and based upon international standards, that encompasses every single part of our various locations, guarantees the consistent, excellent quality of the goods we manufacture and the service we offer.
                            `}</h3>
                            
                    </div>
                </div>
            </BGGradientOtherSections>
        </>
    )
}