import {BGGradientOtherSections} from "@/components/general/background-other-pages";
import Link from "next/link";
import "../../globals.css";
import {LinkCard} from "@/components/general/link-card";

export default function FinancialsQuarterlyReportsPage() {
  return (
    <>
      <BGGradientOtherSections>
        <div className="mt-20 flex flex-col justify-center items-center pb-16">
          <div className="pb-1 mb-16 flex flex-col items-center">
            <h1 className="mx-auto mb-2 max-w-4xl text-center text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">
              Regulation 74(5) SEBI (DP) Regu 2018
            </h1>
            <h2>
              <Link href={"/"}>Home</Link> / Regulation 74(5) SEBI (DP) Regu
              2018
            </h2>
          </div>
          <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left z-20 bg-white">
            <h2 className="font-semibold text-lg mb-6 mt-4">{`SEBI (Depositories and Participants) Regulations`}</h2>
            <h3 className="my-10">2025-26</h3>
            <LinkCard
              href="https://somiinvestor.com/public/storage/SOMI_IntimationforNewspaperAdvt_IEPFunderReg30_n_47.pdf"
              text="Q1 - Qtr ending 30/06/2025"
            />

            <h3 className="my-10">{`2024-2025`}</h3>
            <LinkCard
              text="Q4 - Qtr ending 31/03/2025"
              href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKRAI8q2h4dQBAjrFvKbVZ7iJ15axDE0HN2ghz"
            />
            <LinkCard
              text="Q3 - Qtr ending 31/12/2024"
              href="https://somiinvestor.com/public/storage/IEPF-5/Form-IEPF-5.pdf"
            />
            <LinkCard
              text="Q2 - Qtr ending 30/09/2024"
              href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKAN1yAaJ2sYM0GOqH3rcjKQ1mRi5W9UXuZJxI"
            />
            <LinkCard
              text="Q1 - Qtr ending 30/06/2024"
              href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"
            />
            <h3 className="my-10">{`2023-2024`}</h3>
            <LinkCard
              text="Q4 - Qtr ending 31/03/2024"
              href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKRAI8q2h4dQBAjrFvKbVZ7iJ15axDE0HN2ghz"
            />
            <LinkCard
              text="Q3 - Qtr ending 31/12/2023"
              href="https://somiinvestor.com/public/storage/IEPF-5/Form-IEPF-5.pdf"
            />
            <LinkCard
              text="Q2 - Qtr ending 30/09/2023"
              href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKAN1yAaJ2sYM0GOqH3rcjKQ1mRi5W9UXuZJxI"
            />
            <LinkCard
              text="Q1 - Qtr ending 30/06/2023"
              href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"
            />
            <h3 className="my-10">{`2022-2023`}</h3>
            <LinkCard
              text="Q4 - Qtr ending 31/03/2023"
              href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKRAI8q2h4dQBAjrFvKbVZ7iJ15axDE0HN2ghz"
            />
            <LinkCard
              text="Q3 - Qtr ending 31/12/2022"
              href="https://somiinvestor.com/public/storage/IEPF-5/Form-IEPF-5.pdf"
            />
            <LinkCard
              text="Q2 - Qtr ending 30/09/2022"
              href="https://xg9wq6velf.ufs.sh/f/WawiSmjHDLSKAN1yAaJ2sYM0GOqH3rcjKQ1mRi5W9UXuZJxI"
            />
            <LinkCard
              text="Q1 - Qtr ending 30/06/2022"
              href="https://somiinvestor.com/public/storage/IEPF-5/SOMI%20Intimation%20to%20BSE%20for%20Newspaper%20Advt%20for%20IEPF.pdf"
            />
          </div>
        </div>
      </BGGradientOtherSections>
    </>
  );
}
