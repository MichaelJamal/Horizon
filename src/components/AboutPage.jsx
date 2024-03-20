
import React from 'react';
import projectImage5 from "../images/project-5.jpg";

const AboutUs = () => {
    return ( 
        <div className="main px-6 py-12 md:px-14 md:py-14  lg:justify-center lg:items-center md:pt-36 lg:pt-40 lg:items-center">
            <div className="text-center lg:mr-8 ">
                <h2 className="text-3xl mt-36 font-extrabold text-gray-900 sm:text-4xl">About Horizon Express</h2>
                <div className="mx-auto mt-2 h-1 w-20 bg-yellow-600 rounded-full"></div>
            </div>
            <div className=" ">
                <div className="mt-8 lg:mt-14 lg:flex lg:justify-center lg:items-center">
                    <img src={projectImage5} alt="" className="rounded-lg w-full h-full md:w-auto md:max-w-xs lg:w-auto lg:max-w-md" />
                </div>
                <div className='mt-8 lg:ml-8 text-center'>
                    <p className="mt-4 section-text text-gray-600">Founded in 1996 and rejuvenated in 2020, Horizon Express is a distinguished American logistics company committed to delivering unmatched transportation and supply chain solutions. With our steadfast dedication to excellence and customer satisfaction, we've earned a stellar reputation in the industry over the years.</p>
                    <p className="mt-4 section-text text-gray-600">At Horizon Express, we understand the critical role logistics plays in the success of businesses worldwide. That's why we strive to deliver seamless, efficient, and innovative services tailored to meet the diverse needs of our clients. Whether it's navigating complex international regulations or optimizing last-mile delivery, we have the expertise and resources to ensure your cargo reaches its destination safely and on time.</p>
                    <p className="mt-4 section-text text-gray-600">Our comprehensive suite of services covers every aspect of the logistics process, including freight forwarding, warehousing, customs clearance, distribution, and more. Utilizing state-of-the-art technology and a global network of partners, we offer end-to-end solutions designed to streamline your supply chain and drive business growth.</p>
                    <p className="mt-4 section-text text-gray-600">At the heart of Horizon Express is a team of dedicated professionals committed to exceeding client expectations. Our logistics experts, customer service representatives, and operations personnel work tirelessly to deliver superior service at every touchpoint. We believe in building long-term partnerships based on trust, reliability, and mutual success.</p>
                    <p className="mt-4 section-text text-gray-600">As a socially responsible company, we are committed to sustainability and environmental stewardship. We continuously seek ways to minimize our carbon footprint and reduce the environmental impact of our operations. Through initiatives such as energy-efficient transportation and waste reduction strategies, we aim to contribute positively to the communities we serve.</p>
                    <p className="mt-4 section-text text-gray-600">Horizon Express is more than just a logistics provider; we are your strategic partner in navigating the complexities of the global marketplace. Whether you're a small business looking to expand internationally or a multinational corporation seeking to optimize your supply chain, we have the expertise and dedication to help you achieve your goals.</p>
                </div>
            </div>
        </div>
    );
}
 
export default AboutUs;
