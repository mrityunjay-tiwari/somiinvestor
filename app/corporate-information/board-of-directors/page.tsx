import {BGGradientOtherSections} from "@/components/general/background-other-pages";
import Link from "next/link";
import "../../globals.css";
import {LinkCard} from "@/components/general/link-card";
import BoardOfDirectorsTableComponent from "@/components/corporate-information/board-of-directors";

export default function HomeAboutPage() {
  return (
    <>
      <BGGradientOtherSections>
        <div className="mt-20 flex flex-col justify-center items-center pb-16">
          <div className="pb-1 mb-16 flex flex-col items-center">
            <h1 className="mx-auto mb-2 max-w-4xl text-center text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">
              Board Of Directors
            </h1>
            <h2>
              <Link href={"/"}>Home</Link> / Board Of Directors
            </h2>
          </div>
          <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left z-20 bg-white">
            <BoardOfDirectorsTableComponent />
            <h2 className="font-semibold text-lg mt-6 mb-2">
              COMPANY SECRETARY & COMPLIANCE OFFICER
            </h2>
            <h3>Mr. Amit Baxi</h3>
            <h2 className="font-semibold text-lg mt-6 mb-2">
              CHIEF FINANCIAL OFFICER
            </h2>
            <h3>Mr. Manish Bohra</h3>
          </div>
        </div>
      </BGGradientOtherSections>
    </>
  );
}
