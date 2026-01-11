import { BGGradientOtherSections } from "@/components/general/background-other-pages";
import Link from "next/link";
import '../../globals.css';
import { LinkCard } from "@/components/general/link-card";

export default function GovernancePoliciesPage() {
    return (
        <>
            <BGGradientOtherSections>
                <div className="mt-20 flex flex-col justify-center items-center pb-16">
                    <div className="pb-1 mb-16 flex flex-col items-center">
                        <h1 className="mx-auto mb-2 max-w-4xl text-center text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">Policies</h1>
                        <h2><Link href={'/'}>Home</Link> / Policies</h2>
                    </div>
                    <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left z-20 bg-white">
                        <h2 className="font-semibold text-lg mb-4">Policies</h2>
                       
                        <LinkCard href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf" text="CSR Policy" />
                        <LinkCard href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf" text="Issue of Duplicate Share Certificate Policy" />
                        
                        <LinkCard text="Nomination & Remuneration Policy" href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKRAI8q2h4dQBAjrFvKbVZ7iJ15axDE0HN2ghz"/>
                        <LinkCard text="Related Party Transaction Policy" href="https://somiinvestor.com/public/storage/IEPF-5/Form-IEPF-5.pdf"/>
                        <LinkCard text="Whistle Bowler Policy" href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKAN1yAaJ2sYM0GOqH3rcjKQ1mRi5W9UXuZJxI"/>
                        <LinkCard text="Familiarization Programme for Independent Directors Policy" href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"/>
                        <LinkCard text="Determination of Materiality Policy" href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"/>
                        <div className="mt-10 ml-7">
                            <h3 className="mb-4"> Details of KMP authorised for determining Materiality pursuant to Regulation 30(5) of SEBI(LODR) Regulations, 2015:</h3>
                            <h3> <span className="font-semibold">Mr. Om Prakash Bhansali</span> , Managing Director</h3>
                            <h3> <span className="font-semibold">Contact Number:</span> +91 9414129472</h3>
                            <h3> <span className="font-semibold">Email id:</span> md@somiconveyor.com</h3>
                        </div>
                        <h2 className="font-semibold text-lg my-6">CRITERIA OF MAKING PAYMENTS TO NON-EXECUTIVE DIRECTORS </h2>
                        <LinkCard text="Criteria of making payments to Non-Executive Directors" href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"/>
                    </div>
                </div>
            </BGGradientOtherSections>
        </>
    )
}