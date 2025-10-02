import CardFlip from "@/components/contact-page/contact-page-address-card";
import CardFlipContactNumber from "@/components/contact-page/contact-page-contactNo-card";
import CardFlipEmailId from "@/components/contact-page/contact-page-email-card";
import {DiscountTag} from "@/components/contact-page/tag";
import { BGGradientContactSection } from "@/components/general/background-contact-page";
import ContactSection from "@/components/home-page/contact-section";
import { Playpen_Sans } from "next/font/google";
import Link from "next/link";



export default function ContactPage() {
    return (
        <>
            <BGGradientContactSection>
                <div className="mt-20 flex flex-col justify-center items-center pb-16">
                    <div className="pb-1 mb-16 flex flex-col items-center">
                        <h1 className="mx-auto mb-2 max-w-4xl text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">Contact Us</h1>
                        <h2><Link href={'/'}>Home</Link> / Contact Us</h2>
                    </div>
                    
                        <div className="flex w-4/5">
                            <div className="pt-12 w-4/5 text-justify border-l pl-20 pb-10 shadow-left flex flex-col gap-10">
                                <div className="flex">
                                    <CardFlip />
                                    <DiscountTag />
                                </div>
                                <CardFlipContactNumber />
                                <CardFlipEmailId />

                            </div>
                            <div className="w-2/3 pt-6">
                                <ContactSection />
                            </div>
                        </div>
                </div>
            </BGGradientContactSection>
        </>
    )
}