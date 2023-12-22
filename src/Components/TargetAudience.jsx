import icon from '../assets/icons/title_vector.webp'

const TargetAudience = () => {
    const targetAudience = [
        {
            category: 'Developers',
            description: 'Empowering developers with a seamless experience. Access a range of tools, documentation, and collaborative features designed to streamline development processes.',
        },
        {
            category: 'Corporate Professionals',
            description: 'Tailored solutions for corporate professionals. Enhance productivity, collaboration, and communication within your organization with our suite of business-oriented features.',
        },
        {
            category: 'Bankers',
            description: 'For the financial industry, our platform offers secure and efficient solutions. Manage transactions, data analytics, and financial workflows with confidence.',
        },
        {
            category: 'Small Business Owners',
            description: 'Perfect for entrepreneurs and small business owners. Simplify your operations, manage tasks, and stay organized to drive the success of your venture.',
        },
        {
            category: 'Students and Educators',
            description: 'A valuable resource for students and educators alike. Access educational materials, collaboration tools, and project management features to support learning and teaching.',
        },
        {
            category: 'Freelancers',
            description: 'Designed for freelancers seeking efficiency and organization. Manage projects, track time, and collaborate with clients seamlessly.',
        }
    ];

    return (
        <div className="p-8 mt-28 max-w-[1620px] mx-auto">
            <div className='flex items-center gap-4 justify-center mb-12'>
                <img src={icon} alt="" />
                <h4 className="text-xl md:text-2xl font-bold text-[#074c3e]">Who Benefits from Our Website?</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {targetAudience.map((audience, index) => (
                    <div key={index} className="text-center p-4 border rounded-lg">
                        <p className="text-2xl font-semibold mb-4">{audience.category}</p>
                        <p className="text-gray-700">{audience.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TargetAudience;
