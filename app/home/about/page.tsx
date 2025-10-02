import { BGGradientOtherSections } from "@/components/general/background-other-pages";
import Link from "next/link";
import '../../globals.css';

export default function HomeAboutPage() {
    return (
        <>
            <BGGradientOtherSections>
                <div className="mt-20 flex flex-col justify-center items-center pb-16">
                    <div className="pb-1 mb-16 flex flex-col items-center">
                        <h1 className="mx-auto mb-2 max-w-4xl text-center text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">About</h1>
                        <h2><Link href={'/'}>Home</Link> / About</h2>
                    </div>
                    <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left">
                        <h2 className="font-semibold text-lg mb-6 mt-4">About Us</h2>
                        <h3>{`SOMI CONVEYOR BELTINGS LTD is a BSE Listed Public Ltd company having two manufacturing plants located at Jodhpur India, well connected by air, rail & road. The plants are equipped by 100% PLC based fully automatic & computerized machineries. Company is capable to produce New Generatio (Somiflex) Conveyor Belts upto 2000mm Width with Installed capacity of 9,00,000 meters per annum. Company manufactures the World-class Quality Conveyr Belts equivalent to Fenner, Yokohama, Dunlop, Continetal.

                        The plants are located in Jodhpur and is well connected by excellent Rail, Road & Air Line facilities. This place possesses adequate infrastructure and healthy industrial climate. The Company's product is well accepted by the big industrial groups like Cement, Sponge Iron, Power and Mining Sector. Company has introduced the latest technology Conveyor Belts with innovative ideas.
                        Our company is lead under the excellent leadership of our mentor, Mr. O.P.Bhansali. His rich industry experience along with the ethical business policies, have been our great help to achieve a reputed position for ourselves in the domestic market as well as International market. Due to his zest to excel in this business domain, our team has inspired to work with more perfection. Therefore, our team interacts with our esteemed clients in order to understand their specific requirements and provide them with the same products.

                        The Innovation is the key factor behind our incredible success in this competitive market. Our research and development unit is consistently engaged in conducting extensive research to keep us updated with the changing technology and to overcome the drawbacks of existing product range and engineer new products. Customization is our another strength that we offer our clients with the help of our team of well-qualified professionals. Besides, the strict quality guidelines we follow, has also been acclaimed by our clients. We follow client oriented policies to value our customers and therefore, we always strive hard to maintain the high level of client satisfaction

                        We have highly qualified and well trained professionals that include engineers, quality analysts, management & administration personals and other skilled workmen. We are always highly focusing on the quality compliance of our products and to ensure the superior quality stringent checks and tests are performed.Recently, We had 5th Mega Expansion of our plants and now our Co. is India's Biggest & Largest Conveyor Belts manufacturing plants, equipped with fully PLC & Computerized machineries, ensuring World-class Best Quality Conveyor Belts.`}</h3>
                        
                        <h2 className="font-semibold text-xl my-4">Our Team</h2>
                        <h3>{`We have a team of extremely hard working and dedicated professionals, which is engaged in providing excellent quality products to the customers. Selected strictly on the basis of their competence and qualification, these professionals are assets of our organization. Our professionals maintain a strong communication channel between themselves and customers in order to understand their preferences and manufacture the products accordingly.
                            `}</h3>
                        
                        <h2 className="font-semibold text-xl my-4">Quality Assurance</h2>
                        <h3>{`In the journey of excellence, we have never compromised with the quality standards of our products. With years of experience in the field we have grown far and wide with quality being our ultimate objective. Supported by our able professionals, we manufacture our products using finest quality of raw material. These products are stringently checked by our quality inspectors, where defective products are immediately removed from the lot.
                            `}</h3>
                        
                        <h2 className="font-semibold text-xl my-4">Why Us?</h2>
                        <h3>{`Some of the factors that have enabled us to garner a huge client base are :
                            `}</h3>
                            <ol className="list-decimal my-2 gap-1 flex flex-col">
                                <li>Constant improvement in the work process</li>
                                <li>Constant improvement in the products</li>
                                <li>Skilled and efficient man power</li>
                                <li>Strong market network</li>
                                <li>Prompt delivery of the products</li>
                                <li>Ability to offer customized products</li>
                                <li>Competitive prices</li>  
                            </ol>
                    </div>
                </div>
            </BGGradientOtherSections>
        </>
    )
}