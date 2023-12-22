import AskedQuestions from "../Components/AskedQuestions";
import Banner from "../Components/Banner";
import TargetAudience from "../Components/TargetAudience";
import WhyUs from "../Components/WhyUs";


const Home = () => {
    return (
        <div>
            <Banner/>
            <TargetAudience/>
            <WhyUs/>
            <AskedQuestions/>
        </div>
    );
};

export default Home;