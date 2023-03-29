import React from "react";
import Button from "../DefaultLaout/Button";
import LawyersCard from "./LawyersCard";
export default function MeetLawyers({ data }) {
  return (
    <section className="bg-law-gray-100 pb-16">
      <div className="max-w-5xl mx-auto ">
        <div className="flex flex-wrap">
          <div className="w-4/6 px-4 mb-10 ">
            <h2 className="text-48 leading-[68px] text-law-black-900  font-semibold mb-5">
              Meet the Lawyers
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, non
              massa commodo.
            </p>
          </div>
          <div className="w-2/6 text-right">
            <Button className="bg-law-pink-900">View All</Button>
          </div>
          {data.map((item, index) => {
            return (
              <LawyersCard
                key={index}
                index={index}
                image={item.image}
                eduction={item.eduction}
                description={item.description}
                name={item.name}
                position={item.position}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
