import React from 'react';
const blogImage22 = require("../images/blog-2.jpg");

const BlogPage2 = () => {
    return ( 
        <div className="main px-6 py-12 md:px-14 md:py-14 lg:justify-center lg:items-center md:pt-36 lg:pt-40 lg:items-center">
            <div className="text-center lg:mr-8">
                <h2 className="text-3xl mt-36 font-extrabold text-gray-900 sm:text-4xl">Blog Article</h2>
                <img src={blogImage22} alt="News Subject" className="mt-8 rounded-lg w-full h-full md:w-auto md:max-w-xs lg:w-auto lg:max-w-md mx-auto" />
                <div className="mt-8 text-left">
                    <p className="text-gray-600 text-sm">Notices / JAN-21-2024</p>
                    <p className="mt-4 text-gray-600">21, JANUARY 2024</p>
                    <p className="mt-4 text-gray-600">Dear Valued Customers,</p>
                    <p className="mt-4 text-gray-600">Recent attacks on merchant shipping in the Red Sea region have posed serious threats to vessels transiting these waters. In light of the escalating risks, Horizon Express is taking preventive measures and enacting contingency plans to ensure navigational safety.</p>
                    <p className="mt-4 text-gray-600">For the safety of cargo, Horizon Express regional services to Red Sea ports will sail to safe waters nearby and wait for further notification. Horizon Express will evaluate developments in the situation and then decide whether to adjust the ports of call on the services.</p>
                    <p className="mt-4 text-gray-600">As for long-haul routes connecting Asia to the Mediterranean, Europe and the East Coast of the United States, containerships that are scheduled to pass through the Red Sea will be rerouted around the Cape of Good Hope to continue their voyages to destination ports.</p>
                    <p className="mt-4 text-gray-600">We appreciate your understanding under these serious circumstances.</p>
                </div>
            </div>
        </div>
    );
}
 
export default BlogPage2;
