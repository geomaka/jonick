import React from "react";
import Navbar from "./navBar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif] shadow-lg rounded-lg">
          <div>
            <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
            <p className="text-sm text-gray-500 mt-4">
              Have some big idea or brand to develop and need help? Then reach out,
              we'd love to hear about your project and provide help.
            </p>

            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#007bff"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                    </svg>
                  </div>
                  <a href="mailto:info@example.com" className="text-[#007bff] text-sm ml-4">
                    <small className="block">Mail</small>
                    <strong>info@example.com</strong>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Socials</h2>
              <ul className="flex mt-4 space-x-4">
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="#">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  </a>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="#">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
            ></textarea>
            <button
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
