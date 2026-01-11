import {Link2} from "lucide-react";
import {Button} from "../ui/button";
import ContactSection from "./contact-section";
import {BGGradientAboutSection} from "../general/background-about-section";
import {MotionDiv, MotionSpan} from "../general/motion-exports";

export function AboutPage() {
  return (
    <>
      <BGGradientAboutSection>
        <div className="flex flex-col items-center w-full justify-center text-center pb-16">
          <MotionDiv
            initial={{y: 40, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, ease: "easeOut"}}
            className="mx-auto mb-2 max-w-4xl text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]"
          >
            About Us
          </MotionDiv>
          <MotionDiv
            initial={{y: 40, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, ease: "easeOut"}}
            className="mb-10"
          >
            <Button variant={"link"} className="">
              Check Somi Conveyor Beltings Ltd. Share Price on BSE <Link2 />
            </Button>
          </MotionDiv>
          <MotionDiv
            initial={{y: 40, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, ease: "easeOut"}}
            className="w-4/5 text-justify flex gap-12 bg-zinc-100/70 p-8 rounded-2xl"
          >
            <MotionDiv
              initial={{y: 40, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.5, ease: "easeOut"}}
              className="border shadow-xl p-5 rounded-2xl bg-white"
            >
              <MotionSpan
                initial={{x: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, ease: "easeOut"}}
                className="font-semibold text-xl"
              >
                SOMI CONVEYOR BELTINGS LTD
              </MotionSpan>
              {` is a BSE Listed Public Ltd company having two manufacturing plants located at Jodhpur India, well connected by air, rail & road. The plants are equipped by${<span className="font-medium"> 100% PLC based fully automatic & computerized machineries</span>}  . Company is capable to produce New Generatio (Somiflex) Conveyor Belts upto 2000mm Width with Installed capacity of 9,00,000 meters per annum. Company manufactures the World-class Quality Conveyr Belts equivalent to Fenner, Yokohama, Dunlop, Continetal.
                    The plants are located in Jodhpur and is well connected by excellent Rail, Road & Air Line facilities. This place possesses adequate infrastructure and healthy industrial climate. The Company's product is well accepted by the big industrial groups like Cement, Sponge Iron, Power and Mining Sector. Company has introduced the latest technology Conveyor Belts with innovative ideas.
                    Our company is lead under the excellent leadership of our mentor, Mr. O.P.Bhansali. His rich industry experience along with the ethical business policies, have been our great help to achieve a reputed position for ourselves in the domestic market as well as International market. Due to his zest to excel in this business domain, our team has inspired to work with more perfection. Therefore, our team interacts with our esteemed clients in order to understand their specific requirements and provide them with the same products.

                    Somi Conveyor Beltings Limited (SCBL) is a public limited company and is in the business of manufacturing rubber conveyor belts. The Company was incorporated on 16th day of June, 2000 as Omi Conveyor Beltings Limited under the Companies Act, 1956 as a public company limited by shares with the Registrar of Companies, Rajasthan at Jaipur. It commenced its business from 12th July, 2000. Subsequently, the name of the company was changed from Omi Conveyor Beltings Limited to Somi Conveyor Beltings Limited w.e.f. 31st day of October, 2000.`}
            </MotionDiv>
            <div className="flex flex-col">
              <MotionDiv
                initial={{y: 40, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, ease: "easeOut"}}
                className="rounded-2xl shadow-xl"
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/7lrE6iQyZtU?si=gW0h-QQ72aclA4OA&amp;controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </MotionDiv>
              <ContactSection />
            </div>
          </MotionDiv>
        </div>
      </BGGradientAboutSection>
    </>
  );
}
