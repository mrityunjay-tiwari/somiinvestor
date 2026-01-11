import {BGGradientOtherSections} from "@/components/general/background-other-pages";
import Link from "next/link";
import "../../globals.css";
import {LinkCard} from "@/components/general/link-card";

export default function DetailsOfFamilarizationProgrammesPage() {
  return (
    <>
      <BGGradientOtherSections>
        <div className="mt-20 flex flex-col justify-center items-center pb-16">
          <div className="pb-1 mb-16 flex flex-col items-center">
            <h1 className="mx-auto mb-2 max-w-4xl text-center text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">
              Details of Familiarization Programmes
            </h1>
            <h2>
              <Link href={"/"}>Home</Link> / Details of Familiarization
              Programmes
            </h2>
          </div>
          <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left z-20 bg-white">
            <LinkCard
              href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf"
              text="Familiarization Programmes 2022-23"
            />
            <LinkCard
              href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf"
              text="Familiarization Programmes 2021-22"
            />
          </div>
        </div>
      </BGGradientOtherSections>
    </>
  );
}
