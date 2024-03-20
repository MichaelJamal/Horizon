import React from 'react';

const blogImage1 = require("../images/blog-10.jpg");


const ArticleList = () => {
  return (
    <div className="container mx-auto py-12 pt-56">
      <h1 className="text-3xl font-bold mb-4">Stories by Horizon Express</h1>
    
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-2/3 ">
          <div className="">
            <img className="w-full rounded-lg" src={blogImage1} alt="some good alt text" />
          </div>
        </div>
        <div className="w-full sm:w-1/3 p-4">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">New EU Customs Security and Safety Program Effective June 3, 2024</h2>
      <p className="mb-4">March 13, 2024</p>
      <p className="mb-4">Dear Valued Customer,</p>
      <p className="mb-4">Effective June 3, 2024, the European Union will be implementing a new Customs pre-arrival security and safety program: Import Control System 2 (ICS 2). Under ICS 2, all cargo transported on maritime and inland waterways, roads, and railways, to or through the EU, Norway, Switzerland and Northern Ireland must comply with new filing requirements.</p>
      <p className="mb-4">The phased implementation of Release 3 is outlined as follows:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Step 1 (Jun 3 – Dec 4, 2024): Maritime and inland waterway carriers</li>
        <li>Step 2 (Dec 4, 2024 – Apr 1, 2025): Maritime and inland water way house level filers**</li>
        <li>Step 3 (Apr 1, 2025 – Sept 1, 2025): Road and rail carriers</li>
      </ul>
      <p className="mb-4">** House level filer = freight forwarder, consolidator, importer, etc.</p>
      <p className="mb-4">To ensure compliance with the new system, advanced filing of Entry Summary Declarations (ENS) must include the following mandatory and supplementary detailed data elements. Accordingly, please provide below additional information as part of the shipping instructions.</p>
      <ul className="list-disc pl-6 mb-4">
        <li>A complete and accurate commercial description of goods.</li>
        <li>The 6-digit Harmonized commodity code.</li>
        <li>The EORI number of the consignee (EU shipment only).</li>
        <li>Full address of consignee including P.O. Box Number, Postal Code, Sub-division Code.</li>
        <li>House level information as well as “buyer” and “seller” information or Identification (EORI number) of supplementary declarant.</li>
      </ul>
      <p className="mb-4">You may visit the EU’s website for more details <a href="https://taxation-customs.ec.europa.eu/customs-4/customs-security/import-control-system-2-ics2-0_en" target="_blank" rel="noopener noreferrer" className="text-blue-500">here</a>.</p>
      <p className="mb-4">Should you have any questions, please feel free to contact your local Evergreen representatives.</p>
      <p>Thank you for your attention and understanding.</p>
    </div>
        </div>
      </div>



      <h2 className="text-2xl font-bold mt-8">Latest articles</h2>
      <div className="border-t border-gray-200 mt-4"></div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <img className="w-full rounded-lg mb-2" src={blogImage1} alt="some text" />
         
          <h3 className="text-lg font-bold mt-1">New EU Customs Security and Safety Program Effective June 3, 2024</h3>
          <p className="text-gray-700 mt-1">Effective June 3, 2024, the European Union will be implementing a new Customs pre-arrival security and safety program: Import Control System 2 (ICS 2)....</p>
          
        </div>
      </div>
      
    </div>
  );
};

export default ArticleList;
