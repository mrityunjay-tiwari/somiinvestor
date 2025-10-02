import { BGGradientOtherSections } from "@/components/general/background-other-pages";
import Link from "next/link";
import '../../globals.css';
import { LinkCard } from "@/components/general/link-card";

export default function FinancialsQuarterlyReportsPage() {
    return (
        <>
            <BGGradientOtherSections>
                <div className="mt-20 flex flex-col justify-center items-center pb-16">
                    <div className="pb-1 mb-16 flex flex-col items-center">
                        <h1 className="mx-auto mb-2 max-w-4xl text-center text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">Related Party Transaction</h1>
                        <h2><Link href={'/'}>Home</Link> / Related Party Transaction</h2>
                    </div>
                    <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left">
                        <h2 className="font-semibold text-lg mb-4">Related Party Transaction</h2>
                        <h3>{`2024-25`}</h3>
                        <LinkCard href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf" text="01/04/2024 - 30/09/2024" />
                        <h3>{`2023-24`}</h3>
                        <LinkCard text="01/10/2023 - 31/03/2024" href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKRAI8q2h4dQBAjrFvKbVZ7iJ15axDE0HN2ghz"/>
                        <LinkCard text="01/04/2023 - 30/09/2023" href="https://somiinvestor.com/public/storage/IEPF-5/Form-IEPF-5.pdf"/>
                        <h3>{`2022-23`}</h3>
                        <LinkCard text="01/10/2022 – 31/03/2023" href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKRAI8q2h4dQBAjrFvKbVZ7iJ15axDE0HN2ghz"/>
                        <LinkCard text="01/04/2022 – 30/09/2022" href="https://somiinvestor.com/public/storage/IEPF-5/Form-IEPF-5.pdf"/>
                     </div>
                </div>
            </BGGradientOtherSections>
        </>
    )
}