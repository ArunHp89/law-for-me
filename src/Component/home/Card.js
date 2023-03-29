import Button from "../DefaultLaout/Button";
import React from "react";

export default function Card({ title, description }) {
  return (
    <div className="w-1/2 odd:pr-4 even:pl-4 mb-4 text-14">
      <div className="bg-white p-5 rounded-lg">
        <div className="flex items-center mb-2">
          <svg
            className="w-4 h-4 fill-law-blue-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            {/*! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
            <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
          </svg>
          <p className="text-law-blue-900 font-semibold ml-1">{title}</p>
        </div>
        <p>
          <strong>{description}</strong>
        </p>
        <div className="flex pt-5">
          <div className="w-1/2 mr-1">
            <Button className="text-14 w-full text-center bg-gray-100  pt-1 pb-1 pl-1 pr-1 text-law-black-900">
              £125 + VAT
            </Button>
          </div>
          <div className="w-1/2 ml-1">
            <Button className="text-14 w-full bg-law-blue-900 ml-1  pb-1 pl-1 pr-1 pt-1">
              £125 + VAT
            </Button>
          </div>
        </div>
        <p className="relative text-center before:absolute before:h-[1px] before:w-full before:bg-gray-400 before:top-[11px] before:left-0">
          or
        </p>
        <Button className="w-full text-center bg-law-pink-900 pt-2 pb-2 mt-2">
          Access for Free
        </Button>
      </div>
    </div>
  );
}
