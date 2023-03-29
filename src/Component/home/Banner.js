import React from "react";
import Button from "../DefaultLaout/Button";
import BannerImg from "../../assets/images/banner.png";
import BannerLeft from "../../assets/images/bannerbefore.png";
import WorkLogo from "../../assets/images/workwith.png";
import EyLogo from "../../assets/images/ey.png";
import IsumLight from "../../assets/images/logoplus.png";
import IsumBold from "../../assets/images/logoisum.png";
export default function Banner() {
  return (
    <section className="bg-law-gray-100 py-16 relative">
      <div className="absolute left-0 top-0 z-0 bottom-0">
        <img src={BannerLeft} className="h-full w-auto" />
      </div>
      <div className="mx-auto max-w-[1400px] relative z-10">
        <div className="flex flex-wrap items-end">
          <div className="w-1/2 px-4">
            <img src={BannerImg} />
          </div>
          <div className="w-1/2 px-4">
            <h1 className="text-[80px] leading-[90px] font-semibold text-law-black-900 mb-5">
              Law For Me helps you
              <span className="text-law-blue-900">understand</span> the law
            </h1>
            <p className="text-18 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              scelerisque faucibus nunc, turpis metus volutpat ac tristique non.
              Ultricies faucibus amet,
            </p>
            <div className="relative flex items-center">
              <input
                className="h-16 rounded-md bg-law-blue-400 text-black w-full px-5 outline-none"
                type="search"
                placeholder="Search documents and topics..."
              />
              <Button className="absolute right-3 bg-law-pink-900">
                <svg
                  className="fill-white h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  {/*! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                </svg>
              </Button>
            </div>
            <div className="flex items-center pt-5">
              <img className="pr-4" src={WorkLogo} />
              <img className="px-4" src={EyLogo} />
              <img className="px-4" src={IsumLight} />
              <img className="pl-4" src={IsumBold} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
