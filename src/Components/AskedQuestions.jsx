import icon from '../assets/icons/title_vector.webp'


const AskedQuestions = () => {

    const faqData = [
        {
          "question": "What is TaskFlow?",
          "answer": " TaskFlow is a cutting-edge task management platform designed to simplify and enhance your daily workflow. It provides intuitive features, collaboration tools, and insights to help individuals and teams achieve their goals with ease."
        },
        {
          "question": "How can I get started with TaskFlow?",
          "answer": "Getting started with TaskFlow is easy! Simply visit our website, click on the 'Sign Up' button, and follow the on-screen instructions to create your account. Once registered, you can explore the features and start managing your tasks efficiently."
        },
        {
          "question": "Is TaskFlow suitable for teams?",
          "answer": "Absolutely! TaskFlow is designed to cater to both individual users and teams. With collaborative features such as sharing, commenting, and customizable settings, our platform is perfect for enhancing teamwork and communication."
        },
        {
          "question": "Can I customize the settings according to my preferences?",
          "answer": "Yes, you can! TaskFlow offers a range of customization options. Tailor the platform to suit your unique preferences, including personalized settings, themes, and notifications. Make TaskFlow work for you."
        },
        {
          "question": "What kind of insights does TaskFlow provide?",
          "answer": "TaskFlow provides valuable insights into your productivity through advanced analytics and reporting tools. Identify patterns, track progress, and make informed decisions to optimize your workflow for success."
        }
      ]

    return (
        <div data-aos="zoom-in" data-aos-duration="2000" className="my-24 px-4 md:px-10 max-w-[1620px] mx-auto overflow-x-hidden">


            <div className='text-center max-w-[856px] mx-auto px-4'>
                <div className='flex items-center gap-4 justify-center'>
                    <img src={icon} alt="" />
                    <h4 className="text-xl lg:text-2xl font-semibold text-[#074c3e]">Frequently Asked Questions</h4>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 mb-4 md:mb-6 leading-snug text-[#222e48]">Find Answers to Common Questions</h2>
                <p className="md:text-lg mb-6 text-[#404A60]">We have compiled a list of frequently asked questions to provide you with quick and helpful answers. If you have a question that is not addressed below</p>
            </div>


            <div className="mt-16">
                {
                    faqData.map(faq => <details key={faq.question} className="w-full rounded-xl bg-base-200 mb-4">
                        <summary className="px-6 py-10 text-[#222e48] text-xl font-semibold">
                            {faq.question}
                        </summary>
                        <p className="px-6 py-10 pt-0 ml-4 -mt-4 text-[#222e48] text-lg font-medium">
                            {faq.answer}
                        </p>
                    </details>)
                }
            </div>


        </div>
    );
};

export default AskedQuestions;