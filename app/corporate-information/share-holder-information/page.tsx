import {BGGradientOtherSections} from "@/components/general/background-other-pages";
import Link from "next/link";
import "../../globals.css";
import {LinkCard} from "@/components/general/link-card";
import BoardOfDirectorsTableComponent from "@/components/corporate-information/board-of-directors";

export default function ShareHolderInformationPage() {
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
            <h2 className="font-semibold text-lg mt-6">
              REGISTERED & CORPORATE OFFICE
            </h2>
            <h2 className="font-semibold text-lg mt-6 mb-2">
              SOMI CONVEYOR BELTING LIMITED
            </h2>
            <h3>{`4 F - 15, "Oliver House", New Power House Road,`}</h3>
            <h3>{`Jodhpur - 342001`}</h3>
            <h2 className="font-semibold text-lg mt-6 mb-2">
              COMPLIANCE OFFICER
            </h2>
            <h3>Mr. Amit Baxi</h3>
            <h3>Company Secretary</h3>
            <h2 className="font-semibold text-lg mt-6 mb-2">
              REGISTRAR & SHARE TRANSFER AGENTS (RTA)
            </h2>
            <h3>MUFG Intime India Private Limited</h3>
            <h3>(Formerly known as Link Intime India Private Limited)</h3>
            <h3>CIN: U67190MH1999PTC118368</h3>
            <h3>C 101, 247 Park, L.B.S. Marg,</h3>
            <h3>Vikhroli (West), Mumbai 400 083</h3>
            <h3>Ph.: +91 22 4918 6000</h3>
            <h3>Fax: +91 22 4918 6060</h3>
            <h3>Email id: rnt.helpdesk@in.mpms.mufg.com</h3>
            <h3>Website: www.in.mpms.mufg.corn</h3>
            <h2 className="font-semibold text-lg mt-6 mb-2">
              STOCK INFORMATION
            </h2>
            <h3>
              International Securities Identification Number (ISIN):
              INE323J01019
            </h3>
            <h2 className="font-semibold text-lg mt-6 mb-2">
              Exchange(s) Listed on:
            </h2>
            <h2 className="font-semibold text-lg mt-6 mb-2">
              Bombay Stock Exchange Ltd. (BSE)
            </h2>
            <h3>Phiroze Jeejeebhoy Towers,</h3>
            <h3>Dalal Street, Mumbai 400001</h3>
            <h3>Tel. No.: (022) 2272 1233/4</h3>
            <h3>Fax No.: (022) 2272 1919</h3>
            <h3>
              Website:{" "}
              <Link href={"https://www.bseindia.com/"}>www.bseindia.com</Link>{" "}
            </h3>
            <h2 className="font-semibold text-lg mt-6 mb-2">
              NSE Symbol: SOMICONVEY
            </h2>
          </div>
        </div>
      </BGGradientOtherSections>
    </>
  );
}
