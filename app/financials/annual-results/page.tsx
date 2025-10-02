import { BGGradientOtherSections } from "@/components/general/background-other-pages";
import Link from "next/link";
import '../../globals.css';
import { LinkCard } from "@/components/general/link-card";

export default function FinancialsAnnualReportsPage() {
    return (
        <>
            <BGGradientOtherSections>
                <div className="mt-20 flex flex-col justify-center items-center pb-16">
                    <div className="pb-1 mb-16 flex flex-col items-center">
                        <h1 className="mx-auto mb-2 max-w-4xl text-center text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">Annual Results</h1>
                        <h2><Link href={'/'}>Home</Link> / Annual Results</h2>
                    </div>
                    <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left">
                        <LinkCard href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf" text="2023-24 Annual Results" />
                        <LinkCard text="2022-23 Annual Results" href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKRAI8q2h4dQBAjrFvKbVZ7iJ15axDE0HN2ghz"/>
                        <LinkCard text="2021-22 Annual Results" href="https://somiinvestor.com/public/storage/IEPF-5/Form-IEPF-5.pdf"/>
                        <LinkCard text="2020-21 Annual Results" href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKAN1yAaJ2sYM0GOqH3rcjKQ1mRi5W9UXuZJxI"/>
                        <LinkCard text="2019-20 Annual Results" href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"/>
                        <LinkCard text="2018-19 Annual Results" href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"/>
                        <LinkCard text="2014-15 Annual Results" href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"/>
                        <LinkCard text="2013-14 Annual Results" href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"/>
                        <LinkCard text="2012-13 Annual Results" href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"/>
                        <LinkCard text="2011-12 Annual Results" href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"/>
                        <LinkCard text="2010-11 Annual Results" href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"/>
                    </div>
                </div>
            </BGGradientOtherSections>
        </>
    )
}