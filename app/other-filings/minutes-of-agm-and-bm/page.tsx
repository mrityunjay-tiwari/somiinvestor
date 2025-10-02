import { BGGradientOtherSections } from "@/components/general/background-other-pages";
import Link from "next/link";
import '../../globals.css';
import { LinkCard } from "@/components/general/link-card";

export default function ReconciliationOfShareCapitalAuditReportPage() {
    return (
        <>
            <BGGradientOtherSections>
                <div className="mt-20 flex flex-col justify-center items-center pb-16">
                    <div className="pb-1 mb-16 flex flex-col items-center">
                        <h1 className="mx-auto mb-2 max-w-4xl text-center text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">Minutes of AGM and BM</h1>
                        <h2><Link href={'/'}>Home</Link> / Minutes of AGM and BM</h2>
                    </div>
                    <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left">
                        <h2 className="font-semibold text-lg mb-6 mt-4">Minutes of AGM and BM</h2>
                        
                        <LinkCard href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf" text="Minutes of 21st AGM (2021) held on  30/09/2021" />
                        <LinkCard href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf" text="Minutes of 21st AGM (2021) held on  30/09/2020" />
                        <LinkCard href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf" text="Minutes of 21st AGM (2021) held on  30/09/2019" />
                        
                        <h3 className="my-5">Minutes of 21st AGM (2021) held on  30/09/2018</h3>
                        <h3 className="my-5">Minutes of 21st AGM (2021) held on  30/09/2017</h3>
                        <h3 className="my-5">Minutes of 21st AGM (2021) held on  30/09/2016</h3>
                        
                        <LinkCard href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf" text="Minutes of 21st AGM (2021) held on  30/09/2015" />
                        <LinkCard href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf" text="Minutes of 21st AGM (2021) held on  30/09/2014" />
                        <LinkCard href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf" text="Minutes of 21st AGM (2021) held on  30/09/2013" />
                        </div>
                </div>
            </BGGradientOtherSections>
        </>
    )
}