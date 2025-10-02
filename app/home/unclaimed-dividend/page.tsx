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
                        <h1 className="mx-auto mb-2 max-w-4xl text-balance text-center text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">Unclaimed Dividend</h1>
                        <h2><Link href={'/'}>Home</Link> / Unclaimed Dividend</h2>
                    </div>
                    <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left">
                        <LinkCard href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf" text="06-08-2025 Intimation to Stock Exchange for transfer of Unclaimed Dividend/Equity Shares to IEPF" />
                        <LinkCard text="IEPF Unclaimed Dividend FY 2017-18" href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKRAI8q2h4dQBAjrFvKbVZ7iJ15axDE0HN2ghz"/>
                        <LinkCard text="Form-IEPF-5" href="https://somiinvestor.com/public/storage/IEPF-5/Form-IEPF-5.pdf"/>
                        <LinkCard text="IEPF Unclaimed Dividend FY 2015-16" href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKAN1yAaJ2sYM0GOqH3rcjKQ1mRi5W9UXuZJxI"/>
                        <LinkCard text="10-08-2023 Intimation to Stock Exchange for transfer of Unclaimed Dividend/Equity Shares to IEPF" href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"/>
                    </div>
                </div>
            </BGGradientOtherSections>
        </>
    )
}