import { BGGradientOtherSections } from "@/components/general/background-other-pages";
import Link from "next/link";
import '../../globals.css';
import { BriefProfileList1, BriefProfileList2, BriefProfileList3, BriefProfileList4 } from "@/components/corporate-information/board-member-profiles";

export default function HomeAboutPage() {
    return (
        <>
            <BGGradientOtherSections>
                <div className="mt-20 flex flex-col justify-center items-center pb-16">
                    <div className="pb-1 mb-16 flex flex-col items-center">
                        <h1 className="mx-auto mb-2 max-w-4xl text-balance text-3xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[3.25rem]">Brief profile of Board of Directors</h1>
                        <h2><Link href={'/'}>Home</Link> / Brief profile of Board of Directors</h2>
                    </div>
                    <div className="pt-12 w-4/5 text-justify border-l pl-10 pb-10 shadow-left">
                        <h2 className="font-semibold text-lg mb-4">Brief profile of Board of Directors including directorship and full-time positions in body corporates:</h2>
                        
                        <h2 className="font-semibold text-lg mb-4 mt-12">Mr. Om Prakash Bhansali</h2>
                        <h3><span className="font-semibold">Position:</span> Chairman and Managing Director</h3>
                        <h3><span className="font-semibold">Education:</span> Bachelor of Science</h3>
                        <h3><span className="font-semibold">Experience:</span> Over 46 years in the rubber and conveyor belt manufacturing industry </h3>
                        <h3><span className="font-semibold">Board Tenure:</span> Since Incorporation</h3>
                        <h3>Mr. Om Prakash Bhansali has been at the helm of our organization since its inception in 2000, bringing with him an extensive background in the rubber and conveyor belt manufacturing industry. He holds a Bachelor of Science degree and has accumulated over 46 years of invaluable experience in this sector. His profound understanding of the industry dynamics, coupled with his leadership skills, has been instrumental in steering the company towards sustained growth and innovation.</h3>
                        <h3>As the Chairman and Managing Director, Mr. Bhansali is responsible for the overall management and strategic direction of the company. His vision and commitment to excellence have not only shaped the company’s operational framework but have also fostered a culture of integrity and professionalism throughout the organization. Under his leadership, we have successfully navigated various market challenges and established ourselves as a reputable player in the industry.</h3>
                        <h3>Mr. Bhansali’s directorship and full-time positions in other body corporates further reflect his dedication to advancing our industry and contributing to its development. His active engagement and participation in industry forums and initiatives emphasize his commitment to fostering collaboration and innovation within the sector.</h3>
                        <BriefProfileList1 />

                        <h2 className="font-semibold text-lg mb-4 mt-12">Mr. Vimal Bhansalii</h2>
                        <h3><span className="font-semibold">Position:</span> Whole-Time Director</h3>
                        <h3><span className="font-semibold">Education:</span> Bachelor of Business Management with Specialization in Marketing</h3>
                        <h3><span className="font-semibold">Experience:</span> Over 22 years of extensive experience in the manufacturing and marketing sectors </h3>
                        <h3><span className="font-semibold">Board Tenure:</span> Since Incorporation</h3>
                        <h3>{`Mr. Vimal Bhansali holds a Bachelor's degree in Business Management with a specialization in Marketing. With over 22 years of extensive experience in the manufacturing and marketing sectors, Mr. Bhansali brings a wealth of knowledge and expertise to our organization, particularly in the field of conveyor belts.`}</h3>
                        <h3>{`As the Whole-Time Director, Mr. Bhansali is responsible for overseeing the operational and strategic direction of the company. His leadership is instrumental in driving our manufacturing processes and enhancing our marketing strategies, ensuring that we remain competitive in the industry. His deep understanding of market trends and consumer needs allows him to effectively lead initiatives that align with the company’s goals.`}</h3>
                        <h3>{`Mr. Bhansali’s commitment to excellence and his ability to cultivate strong relationships with clients and stakeholders have been pivotal in fostering a culture of collaboration within the organization. He actively participates in shaping the strategic direction of the company, ensuring that we meet our business objectives while adhering to corporate governance standards.`}</h3>
                        <BriefProfileList2 />
                        
                        <h2 className="font-semibold text-lg mb-4 mt-12">Mr. Gaurav Bhansali</h2>
                        <h3><span className="font-semibold">Position:</span> Whole-Time Director</h3>
                        <h3><span className="font-semibold">Education:</span> Post Graduate in Commerce</h3>
                        <h3><span className="font-semibold">Experience:</span> Over 21 years of Experience in manufacturing and marketing of Conveyor Belts & rubber production. </h3>
                        <h3><span className="font-semibold">Board Tenure:</span> Since Incorporation</h3>
                        <h3>{`Mr. Gaurav Bhansali holds a Post Graduate degree in Commerce, which has equipped him with a solid foundation in business and financial management. With over 21 years of experience in the manufacturing and marketing sectors, particularly in the production of conveyor belts and rubber products, he brings a wealth of knowledge and expertise to our organization.`}</h3>
                        <h3>{`In his capacity as Whole-time Director, Mr. Bhansali is responsible for overseeing the day-to-day operations of the company. He plays a critical role in strategic planning, ensuring that our manufacturing processes are efficient and aligned with market demands. His leadership in marketing initiatives has significantly contributed to our brand's growth and market presence.`}</h3>
                        <h3>{`Additionally, Mr. Gaurav Bhansali’s extensive industry experience enables him to navigate challenges effectively and identify opportunities for innovation and improvement within our operations. His commitment to excellence and his ability to foster strong relationships with stakeholders have been instrumental in driving our business forward. He does not hold any other directorships and full-time positions in body corporates.`}</h3>
                        
                        
                        <h2 className="font-semibold text-lg mb-4 mt-12">Mr. Mahendra Rakhecha</h2>
                        <h3><span className="font-semibold">Position:</span> Non-Executive Independent Director</h3>
                        <h3><span className="font-semibold">Education:</span> Master of Commerce (M.Com)</h3>
                        <h3><span className="font-semibold">Experience:</span> Over 24 years of experience in the fields of Computer and Information Technology </h3>
                        <h3><span className="font-semibold">Board Tenure:</span>  Joined the Board in September 2006</h3>
                        <h3>{`Mr. Rakhecha holds a Master of Commerce (M.Com) degree and brings a wealth of expertise to our organization, with over 24 years of experience in the fields of Computer and Information Technology. His extensive background in this rapidly evolving sector has endowed him with a unique perspective on the integration of technology and business strategy, which is invaluable to our board's decision-making processes.`}</h3>
                        <h3>{`Mr. Rakhecha joined our Board of Directors in September 2006 as an Independent Director. Since his appointment, he has been instrumental in guiding the company through various challenges and opportunities, leveraging his deep understanding of technological advancements and their implications for corporate governance and operational efficiency. His insights have proven vital in shaping our strategic initiatives, ensuring that we remain at the forefront of innovation while adhering to best practices in corporate management.`}</h3>
                        <h3>{`His commitment to upholding the principles of independence and integrity in governance aligns with our organization's core values.`}</h3>
                        <h3>{`We are fortunate to have Mr. Rakhecha as a member of our Board of Directors, and we look forward to his continued contributions as we navigate the future.`}</h3>
                        <BriefProfileList3 />

                        <h2 className="font-semibold text-lg mb-4 mt-12">Mr. Yogesh Maheshwari</h2>
                        <h3><span className="font-semibold">Position:</span> Non-Executive Independent Director</h3>
                        <h3><span className="font-semibold">Education:</span> Bachelor of Engineering (Honours) in Mechanical Engineering</h3>
                        <h3><span className="font-semibold">Experience:</span> Over 36 years of Experience in the field of Manufacturing of Heavy Earth Moving Machinery </h3>
                        <h3><span className="font-semibold">Board Tenure:</span> Joined the Board in January 2007</h3>
                        <h3>{`Mr. Maheshwari serves as a Non-Executive Independent Director at our company, a position he has held since January 2007. With a Bachelor of Engineering (Honours) in Mechanical Engineering, he brings a wealth of knowledge and expertise to our board.`}</h3>
                        <h3>{`With over 36 years of experience in the manufacturing sector, particularly in Heavy Earth Moving Machinery, Mr. Maheshwari has developed a deep understanding of the industry dynamics and operational challenges. His extensive background includes significant roles in various reputable organizations, where he has been instrumental in driving innovation and operational excellence. His leadership in the manufacturing domain has not only contributed to the growth of the companies he has been associated with but has also played a pivotal role in shaping industry standards.`}</h3>
                        <h3>{`As a Non-Executive Independent Director, Mr. Maheshwari's insights are invaluable in guiding our strategic direction and ensuring robust governance practices. His independent perspective aids in promoting transparency and accountability within our board, fostering an environment where diverse viewpoints are considered in decision-making processes.`}</h3>
                        <h3>{`Mr. Maheshwari's commitment to excellence and his independent perspective contribute significantly to the overall governance of our organization. We are fortunate to have him as part of our leadership team. He does not hold any other directorships and full-time positions in body corporates.`}</h3>
                        
                        
                        <h2 className="font-semibold text-lg mb-4 mt-12">Mr. Santosh Kumar Joshi</h2>
                        <h3><span className="font-semibold">Position:</span> Non-Executive Independent Director</h3>
                        <h3><span className="font-semibold">Education:</span> Master of Commerce (M.Com) & Bachelor of Education (B.Ed) in Economics</h3>
                        <h3><span className="font-semibold">Experience:</span> 26 years in Accountancy and Economics </h3>
                        <h3><span className="font-semibold">Board Tenure:</span> Joined the Board in February 2021</h3>
                        <h3>{`Mr. Joshi serves as a Non-Executive Independent Director, bringing with him a wealth of knowledge and experience in accountancy and economics. He holds a Master of Commerce (M.Com) and a Bachelor of Education (B.Ed) in Economics, equipping him with a strong academic foundation.`}</h3>
                        <h3>{`With an impressive 26 years of experience in accountancy and economics, Mr. Joshi brings a wealth of knowledge and expertise to our board. His extensive professional background includes various roles in accounting and financial management, equipping him with a deep understanding of fiscal policy, economic trends, and corporate governance. This experience is invaluable as we navigate the complexities of our industry and strive for sustainable growth.`}</h3>
                        <h3>{`Since joining our Board of Directors in February 2021, Mr. Joshi has been instrumental in providing strategic guidance and oversight. His independent perspective and commitment to ethical practices have greatly contributed to the effectiveness of our governance framework. As we continue to evolve as an organization, his insights into financial matters and economic strategies will be critical to our ongoing success.`}</h3>
                        <h3>{`We are confident that Mr. Joshi’s contributions will continue to enhance our board’s effectiveness and the overall performance of the company. He does not hold any other directorships and full-time positions in body corporates.`}</h3>
                        
                        
                        <h2 className="font-semibold text-lg mb-4 mt-12">Mrs. Rekha Bhandari</h2>
                        <h3><span className="font-semibold">Position:</span> Non-Executive Independent Woman Director</h3>
                        <h3><span className="font-semibold">Education:</span> Graduated in Commerce</h3>
                        <h3><span className="font-semibold">Experience:</span> Over 9 Years of Experience in the field of Accountancy & Law </h3>
                        <h3><span className="font-semibold">Board Tenure:</span> Joined the Board in October 2024</h3>
                        <h3>{`Mrs. Bhandari serves as a Non-Executive Independent Woman Director, bringing a wealth of expertise and insight to our organization. She graduated with a degree in Commerce, demonstrating a solid foundation in financial principles and business practices. Over the past nine years, she has cultivated a diverse professional background, accumulating valuable experience in the fields of accountancy and law. Her dual expertise equips her with a unique perspective on regulatory compliance, financial oversight, and strategic governance.`}</h3>
                        <h3>{`As a Non-Executive Independent Director, Mrs. Bhandari brings a unique perspective to our board discussions. Her independence is vital, as it ensures that she can contribute objective insights and challenge the status quo, thereby enhancing our decision-making processes. Her expertise in accountancy provides critical oversight of our financial practices, while her legal knowledge helps navigate the complexities of regulatory compliance.`}</h3>
                        <h3>{`We are confident that Mrs. Bhandari's contributions will significantly enhance our governance practices and strategic direction as we continue to navigate the complexities of the business landscape.`}</h3>
                        <h3>{`Notably, Mrs. Bhandari does not hold any other directorships or full-time positions in body corporates, allowing her to dedicate her full attention and commitment to our organization. This exclusivity in her professional engagements enables her to engage deeply with our strategic initiatives and support our goals without conflicting interests.`}</h3>
                        
                        
                        <h2 className="font-semibold text-lg mb-4 mt-12">Mrs. Payal Daga</h2>
                        <h3><span className="font-semibold">Position:</span> Non-Executive & Non-Independent Director</h3>
                        <h3><span className="font-semibold">Education:</span> Post Graduate in Commerce</h3>
                        <h3><span className="font-semibold">Experience:</span> 12 Years in Administration </h3>
                        <h3><span className="font-semibold">Board Tenure:</span> Joined the Board in September 2022</h3>
                        <h3>{`Mrs. Daga holds a distinguished Post Graduate degree in Commerce, which has equipped her with a strong foundation in financial and business principles. Her academic background, combined with over 12 years of extensive experience in administration, positions her as an asset to our Board.`}</h3>
                        <h3>{`Throughout her career, Mrs. Daga has demonstrated exceptional skills in organizational management, operational efficiency, and strategic planning. Her expertise spans various facets of administration, where she has successfully navigated complex challenges and contributed to the growth and stability of the organizations she has been a part of. Her ability to streamline processes and enhance productivity has been instrumental in achieving organizational objectives.`}</h3>
                        <h3>{`Since joining our Board in September 2022, Mrs. Daga has actively participated in board meetings and discussions, providing valuable insights and perspectives that reflect her commitment to the company's mission and vision. Her role as a Non-Executive and Non-Independent Director allows her to contribute her knowledge and experience while ensuring that the board remains focused on its strategic goals.`}</h3>
                        <h3>{`Mrs. Daga’s collaborative approach and dedication to fostering a positive working environment have made her a respected figure among her peers. She is known for her integrity and professionalism, which are essential qualities in guiding the company towards its future endeavors.`}</h3>
                        <h3>{`In conclusion, we are fortunate to have Mrs. Payal Daga on our Board of Directors. Her background in commerce, coupled with her administrative expertise, enhances our collective capabilities in steering the company toward continued success.`}</h3>
                        <BriefProfileList4 />
                        
                    </div>
                </div>
            </BGGradientOtherSections>
        </>
    )
}