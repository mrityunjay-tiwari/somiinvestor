import {BGGradientOtherSections} from "@/components/general/background-other-pages";
import Link from "next/link";
import "../../globals.css";
import {LinkCard} from "@/components/general/link-card";

export default function ReconciliationOfShareCapitalAuditReportPage() {
  return (
    <>
      <BGGradientOtherSections>
        <div className="mt-20 flex flex-col justify-center items-center pb-16">
          <div className="pb-1 mb-16 flex flex-col items-center">
            <h1 className="mx-auto mb-2 max-w-4xl text-center text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">
              SEBI Substantial Acquistion Of Shares Takeovers Regulations 2011
            </h1>
            <h2>
              <Link href={"/"}>Home</Link> / SEBI Substantial Acquistion Of
              Shares Takeovers Regulations 2011
            </h2>
          </div>
          <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left z-20 bg-white">
            <h3 className="my-5">
              SEBI (Prohibition of Insider Trading )Regulations, 2015
            </h3>
            <h3 className="my-5">CLOSURE OF TRADING WINDOW</h3>

            <LinkCard
              href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf"
              text="June, 2024"
            />

            <h3 className="my-5">March, 2024</h3>
            <h3 className="my-5">December, 2023</h3>
            <h3 className="my-5">September, 2023</h3>
            <h3 className="my-5">June. 2023</h3>

            <LinkCard
              href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf"
              text="March, 2023"
            />
            <LinkCard
              href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf"
              text="December, 2022"
            />
            <LinkCard
              href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf"
              text="September, 2022"
            />

            <h3 className="my-5">June, 2022</h3>
            <h3 className="my-5">March, 2022</h3>
            <h3 className="my-5">December, 2021</h3>
            <h3 className="my-5">September, 2021</h3>
            <h3 className="my-5">June, 2021</h3>
            <h3 className="my-5">SDD Compliance</h3>
            <h3 className="my-5">September, 2022</h3>
            <h3 className="my-5">June, 2022</h3>
          </div>
        </div>
      </BGGradientOtherSections>
    </>
  );
}
