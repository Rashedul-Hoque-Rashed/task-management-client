import AskedQuestions from "../Components/AskedQuestions";
import WhyUs from "../Components/WhyUs";


const About = () => {
    return (
        <div>
            <div className='bg-[#03211b] overflow-x-hidden'>
                <div className="px-4 md:px-10 pt-32 pb-28 gap-10 max-w-[1620px] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">About Us</h2>
                        <p className="text-lg lg:text-xl font-semibold mb-6 text-white">Home &gt; <span className="text-[#fcb650]">About</span></p>
                    </div>
                </div>
            </div>
            <WhyUs/>
            <AskedQuestions/>
        </div>
    );
};

export default About;