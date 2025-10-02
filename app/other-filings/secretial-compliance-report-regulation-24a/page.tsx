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
                        <h1 className="mx-auto mb-2 max-w-4xl text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">{`Secretarial Compliance Report-Regulation 24A`}</h1>
                        <h2><Link href={'/'}>Home</Link> / {`Secretarial Compliance Report-Regulation 24A`}</h2>
                    </div>
                    <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left">
                        
                        <LinkCard href="Secretarial Compliance Report-Regulation 24A - 2024-25" text="Appointment of Independent Director and Secretarial Auditor-01.10.2025" />
                        <LinkCard href="Secretarial Compliance Report-Regulation 24A - 2023-24" text="Tenure Completion of Independent Director-30.09.2025" />
                        <LinkCard href="Secretarial Compliance Report-Regulation 24A - 2022-23" text="INTIMATION REGARDING ORDERS SECURED BY COMPANY" />
                        <LinkCard href="Secretarial Compliance Report-Regulation 24A - 2021-22" text="Change in Website and Email Id of Registrar and Share Transfer Agent (“RTA”) of the Company" />
                        <LinkCard href="Secretarial Compliance Report-Regulation 24A - 2020-21" text="Resignation of Mrs. Saraswati Choudhary as Independent Director" />
                      </div>
                </div>
            </BGGradientOtherSections>
        </>
    )
}