import { BGGradientOtherSections } from "@/components/general/background-other-pages";
import Link from "next/link";
import '../../globals.css';
import { BoardCommitteeList1, BoardCommitteeList2, BoardCommitteeList3, BoardCommitteeList4 } from "@/components/corporate-information/board-committees";

export default function HomeAboutPage() {
    return (
        <>
            <BGGradientOtherSections>
                <div className="mt-20 flex flex-col justify-center items-center pb-16">
                    <div className="pb-1 mb-16 flex flex-col items-center">
                        <h1 className="mx-auto mb-2 max-w-4xl text-center text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">Board Committees</h1>
                        <h2><Link href={'/'}>Home</Link> / Board Committees</h2>
                    </div>
                    <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left">
                        
                        <h3>{`The Company’s Board has the following Sub-Committees:`}</h3>
                        
                        <h2 className="font-semibold text-lg mt-6 mb-2">1. Audit Committee:</h2>
                        <BoardCommitteeList1/>
                        
                        <h2 className="font-semibold text-lg mt-6 mb-2">2. Nomination and Remuneration Committee:</h2>
                        <BoardCommitteeList2 />
                        
                        <h2 className="font-semibold text-lg mt-6 mb-2">3. Stakeholders Relationship Committee:  </h2>
                        <BoardCommitteeList3 />

                        <h2 className="font-semibold text-lg mt-6 mb-2">4. Corporate Social Responsibility (CSR) Committee: </h2>
                        <BoardCommitteeList4 />
                    </div>
                </div>
            </BGGradientOtherSections>
        </>
    )
}