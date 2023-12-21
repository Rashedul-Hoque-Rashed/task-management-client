import icon from '../assets/icons/title_vector.webp'
import whyUsImg from "../assets/images/why-us.png"
import { FiCheckCircle } from "react-icons/fi";



const WhyUs = () => {
    return (
        <div className='my-12 overflow-x-hidden'>
            <div className="px-4 md:px-10 py-28 flex items-center justify-center gap-20 flex-col-reverse lg:flex-row max-w-[1620px] mx-auto">
                <div data-aos="fade-right" data-aos-duration="2000" className="flex-1">
                    <img src={whyUsImg} alt="" />
                </div>


                <div data-aos="fade-left" data-aos-duration="2000" className="flex-1">
                    <div className='max-w-[856px] mx-auto px-4'>
                        <div className='flex items-center gap-4 justify-start'>
                            <img src={icon} alt="" />
                            <h4 className="text-lg md:text-xl font-semibold text-[#074c3e]">Why Choose Us</h4>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4 mb-4 md:mb-6 leading-snug text-[#222e48]">Elevate Your Productivity Journey with TaskFlow</h2>
                        <p className="mb-6 text-[#404A60]">At TaskFlow, we stand out in the crowded landscape of task management platforms for several compelling reasons.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#404A60] text-base font-semibold my-8 px-4">
                        <div className="flex items-center gap-2">
                            <FiCheckCircle className="w-6 h-6 text-[#074c3e]" />
                            <h6>Intuitive Design for Effortless Workflow</h6>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiCheckCircle className="w-6 h-6 text-[#074c3e]" />
                            <h6>Collaboration at its Best</h6>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiCheckCircle className="w-6 h-6 text-[#074c3e]" />
                            <h6>Tailored to Your Preferences</h6>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiCheckCircle className="w-6 h-6 text-[#074c3e]" />
                            <h6>Insights that Drive Success</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;