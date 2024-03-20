import { useState } from 'react';

const FaqPage = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        } else {
            setOpen(index);
        }
    };

    const data = [
        {
            title: "How do I know what time the package I shipped will be delivered?",
            desc: "To get an estimated delivery time, you can use your tracking number, to track your package. After you enter your number in the tracking tool, you’ll see your estimated delivery time with a 4-hour window. If you don’t see an estimated delivery time window, that information may not be available for that particular package.",
        },
        {
            title: "How can I track the exact location of my package?",
            desc: "You can track your package to get status information with near real-time tracking and see an estimated delivery time window for eligible shipments. You can also call or text 213 817 5814",
        },
        {
            title: "How do I ship a package internationally?",
            desc: "Shipping internationally isn’t that different from shipping a package within the U.S. The biggest difference is the amount of paperwork you’ll need to complete and your delivery options.Make sure there are no shipping restrictions for the item you want to ship. Determine which customs documents are required. Complete and submit customs documents. Package your item.",
        },
        {
            title: "How do I stop the delivery of my Horizon Express package and have it returned to me?",
            desc: "To request your delivery be cancelled and your package returned to the original shipment address, go to our tracking page, and follow these steps: Enter your tracking number. Select Manage Delivery, then Return to Shipper. Use the Reason for Return dropdown to let us know why the package is being returned (undeliverable address, suspected fraud, the recipient didn’t pay, it’s the wrong item, recipient changed their mind, other). Then click Continue. Enter your contact info, in case we need to reach out to you, then click Submit. Make note of your case number and click Done.",
        },
        {
            title: "How long does it take to ship a package internationally?",
            desc: "It depends on how fast you need it delivered. Depending on your needs, you can get delivery within: 24 hours with Horizon International Next Flight. 1, 2, or 3 business days with Horizon International First® or Horizon International Priority®. 2–5 business days with Horizon International Economy®. 2–7 business days to Canadian businesses with Horizon International Ground®",
        },
        {
            title: "How much does it cost to ship a package internationally?",
            desc: "Shipping costs depend on what you’re shipping, where you’re shipping from, where you’re shipping to, and how fast you need it delivered.",
        },
        {
            title: "Are there additional shipping fees when I ship a package to a customer?",
            desc: "Shipping fees and surcharges vary depending on the service you choose. Find additional shipping fees here for express, ground, and freight services.",
        },
    ];

    return (
        <div className="bg-white pb-16 section text-center">
            <div className="flex justify-center items-center flex-col px-4">
                <div className="mt-36">
                    <h3 className="mb-2 text-black font-bold text-5xl">FAQS</h3>
                    <p className="mb-4 text-orange-400 font-bold section-subtitle">Frequently asked questions</p>
                    <p className="mb-4 section-text">Have questions? We’re here to help</p>
                </div>

                <div>
                    {data.map((item, index) => (
                        <div key={index} className="mb-4 bg-white">
                            <button
                                className="w-full flex justify-between items-center py-4 px-6 bg-white border-b border-gray-300"
                                onClick={() => toggle(index)}
                            >
                                <p className="section-text2">{item.title}</p>
                                <svg
                                    className={`w-6 h-6 transition-transform transform ${open === index ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {open === index && (
                                <p className=" section-text2">{item.desc}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="bg-opacity-7 bg-white mt-8 p-6 items-center">
                    <div className="text-center lg:text-left">
                        <p className="text-orange-400 font-bold">Still have questions?</p>
                        <p className="section-text">If you are unable to locate the answers you seek, we encourage you to reach out to us through our Horizon Express Customer Support platform or by phone: 213 817 5814</p>
                    </div>
                    <a href="/contactpage">
                    <button className="w-full bg-orange-400 py-2 px-6 mt-12 lg:mt-12 items-center">
                        <p className="section-text">Get in touch</p>
                    </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;
