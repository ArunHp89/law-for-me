import React from "react";
import Button from "./Button";
import Logo from "../../assets/images/white-logo.png";
export default function Footer() {
  return (
    <>
      <footer className="bg-law-blue-600 pt-16  text-white">
        <div className="max-w-5xl mx-auto ">
          <div className="flex flex-wrap pb-20 border-b border-gray-400">
            <div className="w-[60%] px-4">
              <div className="max-w-[90%]">
                <h2 className="text-40 leading-[50px]  font-semibold mb-5">
                  Sign Up For Legal Updates
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  facilisis eget at semper tellus, nunc venenatis a commodo.
                </p>
              </div>
            </div>
            <div className="w-[40%] px-4 ">
              <div className="flex items-end">
                <input
                  type="search"
                  placeholder="Your email address"
                  className="w-full border-b outline-none border-white placeholder:font-semibold placeholder:text-white pb-4 bg-transparent"
                />
                <Button className="bg-law-pink-900 ml-5 w-[200px]">
                  Sumbit
                </Button>
              </div>
              <div
                className="flex items-start pt-5
              "
              >
                <input type="checkbox" className="  mt-1 mr-2" />
                <p>
                  By checking this box, I agree to the privacy policy,
                  subscribing to updates, newsletters and marketing information
                  by e-mail from Law For Me
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap pb-20 pt-10 border-b-[1px] border-gray-400">
            <div className="w-1/2 px-4">
              <img src={Logo} />
              <p className="py-8 max-w-[300px]">
                Provide you with legal and HR documents, how to guides, and
                legal advice from qualified Solicitors and Barristers
              </p>
              <div className="flex">
                <div className="w-10 h-10 flex justify-center items-center border border-white rounded-full">
                  <svg
                    className="w-4 h-4 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </div>
                <div className="w-10 h-10 flex justify-center items-center border border-white rounded-full ml-5">
                  <svg
                    className="w-4 h-4 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-4 flex justify-between">
              <div>
                <h3 className="text-24 mb-5">Products</h3>
                <ul>
                  <li className="block mb-2">
                    <a
                      href="/"
                      title="menu"
                      className="hover:underline hover:text-law-pink-900"
                    >
                      Commercial Law
                    </a>
                  </li>
                  <li className="block mb-2">
                    <a
                      href="/"
                      title="menu"
                      className="hover:underline hover:text-law-pink-900"
                    >
                      Employment Law
                    </a>
                  </li>
                  <li className="block mb-2">
                    <a
                      href="/"
                      title="menu"
                      className="hover:underline hover:text-law-pink-900"
                    >
                      GDPR Templates
                    </a>
                  </li>
                  <li className="block mb-2">
                    <a
                      href="/"
                      title="menu"
                      className="hover:underline hover:text-law-pink-900"
                    >
                      Making a Claim
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-24 mb-5">Legal Documents</h3>
                <ul>
                  <li className="block mb-2">
                    <a
                      href="/"
                      title="menu"
                      className="hover:underline hover:text-law-pink-900"
                    >
                      Mus purus nulla lorem.
                    </a>
                  </li>
                  <li className="block mb-2">
                    <a
                      href="/"
                      title="menu"
                      className="hover:underline hover:text-law-pink-900"
                    >
                      Mi a urna ultricies nisi.
                    </a>
                  </li>
                  <li className="block mb-2">
                    <a
                      href="/"
                      title="menu"
                      className="hover:underline hover:text-law-pink-900"
                    >
                      Risus cursus pretium vel.
                    </a>
                  </li>
                  <li className="block mb-2">
                    <a
                      href="/"
                      title="menu"
                      className="hover:underline hover:text-law-pink-900"
                    >
                      Pretium convallis cursus.
                    </a>
                  </li>
                  <li className="block mb-2">
                    <a
                      href="/"
                      title="menu"
                      className="hover:underline hover:text-law-pink-900"
                    >
                      Gravida id et vulputate.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-center py-5 text-gray-400">
            Terms And Conditions | Terms Of Use | Privacy Policy | Cookie Policy
          </p>
        </div>
        <div className="px-4 py-5 text-center bg-[#423959] text-14 text-gray-400">
          <p>Copyright 2022 KB and Co Ltd t/a Law For Me.</p>
          <p>
            KB and Co Ltd t/a Law For Me is not a regulated entity and is not
            authorised by the Solicitors Regulation Authority, the Bar Standards
            Board or CILEX
          </p>
        </div>
      </footer>
    </>
  );
}
