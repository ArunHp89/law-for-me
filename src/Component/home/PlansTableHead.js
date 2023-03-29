import React from "react";
import Button from "../DefaultLaout/Button";
export default function PlansTableHead() {
  return (
    <thead>
      <tr>
        <th className="p-2">
          <div className="bg-white p-3 rounded-lg">
            <strong>Want a bespoke or outsourced plan?</strong>
            <Button className="bg-law-pink-900 w-full mt-2">
              Explore Bespoke Plan
            </Button>
          </div>
        </th>
        <th className="px-1">
          <div className="bg-law-blue-900 text-white rounded-lg px-3 py-5 ">
            <p>Access Plan</p>
            <h3 className="text-28">£99</h3>
            <p>+ VAT</p>
          </div>
        </th>
        <th className="px-1">
          <div className="bg-law-pink-900 text-white rounded-lg px-3 py-5 ">
            <p>Growth Plan</p>
            <h3 className="text-28">£250</h3>
            <p>+ VAT</p>
          </div>
        </th>
        <th className="px-1">
          <div className="bg-law-blue-900 text-white rounded-lg px-3 pt-10 pb-1 overflow-hidden relative">
            <p>Professional Plan</p>
            <h3 className="text-28">£650</h3>
            <p>+ VAT</p>
            <div className="flex absolute bg-black text-white top-0 left-0 justify-center w-full py-2">
              <svg
                className="w-4 h-4 fill-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
              </svg>
              <p>Most Popular</p>
            </div>
          </div>
        </th>
        <th className="px-1">
          <div className="bg-law-pink-900 text-white rounded-lg px-3 py-5 ">
            <p>Enterprise Plan</p>
            <h3 className="text-28">£1250</h3>
            <p>+ VAT</p>
          </div>
        </th>
      </tr>
    </thead>
  );
}
