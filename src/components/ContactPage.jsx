import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

const ContactPage = () => {
  

  

  return (
    <div className="bg-gray-100 mt-36 py-36 flex items-center justify-center bg-fixed" id="contact">
      <div className="rounded-lg  lg:m-10 p-16 bg-white shadow-lg">
        <div>
          <h1 className="text-5xl md:text-6xl">Get in Touch</h1>
          <div className="flex flex-col md:flex-row mt-20">
            <div className="flex flex-row space-x-6 items-center">
             
            </div>
            <div className="bg-white rounded-lg p-8 shadow-base mt-8 lg:mt-0 text-gray-700 lg:text-white">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block">Name</label>
                  <div className="relative">
                    <BsPerson className="absolute top-3 left-3 text-gray-400" />
                    <input type="text" id="name" name="name" placeholder="Your Name" className="pl-10 w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block">Email</label>
                  <div className="relative">
                    <MdOutlineEmail className="absolute top-3 left-3 text-gray-400" />
                    <input type="email" id="email" name="email" placeholder="Your Email" className="pl-10 w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block">Message</label>
                  <textarea id="message" name="message" placeholder="Your Message" rows={6} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 resize-none"></textarea>
                </div>
                <button className="bg-blue-400 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors duration-300 w-full">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
