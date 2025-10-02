import { BGGradientOtherSections } from "@/components/general/background-other-pages";
import Link from "next/link";
import '../../globals.css';
import { LinkCard } from "@/components/general/link-card";

export default function HomeAboutPage() {
    return (
        <>
            <BGGradientOtherSections>
                <div className="mt-20 flex flex-col justify-center items-center pb-16">
                    <div className="pb-1 mb-16 flex flex-col items-center">
                        <h1 className="mx-auto mb-2 max-w-4xl text-center text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">Integrated Filing Financial</h1>
                        <h2><Link href={'/'}>Home</Link> / Integrated Filing Financial</h2>
                    </div>
                    <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left">
                        <h2 className="font-semibold text-lg mb-4">Integrated Filing (Financial)</h2>
                        <h3>{`2025-2026`}</h3>
                        <LinkCard href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf" text="Q1 - Qtr ending 30/06/2025" />
                        <h3>{`2024-2025`}</h3>
                        <LinkCard text="Q4 - Qtr ending 31/03/2025" href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKRAI8q2h4dQBAjrFvKbVZ7iJ15axDE0HN2ghz"/>
                        <LinkCard text="Q3 - Qtr ending 31/12/2024" href="https://somiinvestor.com/public/storage/IEPF-5/Form-IEPF-5.pdf"/>
                    </div>
                </div>
            </BGGradientOtherSections>
        </>
    )
}