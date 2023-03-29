import React from "react";
import DammyImg from "../../assets/images/dammy.png";
import Card from "./Card";

export default function HowitWorks({ data }) {
  return (
    <section className="bg-law-gray-100 ">
      <div className="bg-law-blue-100 rounded-md shadow-sm p-10 max-w-5xl mx-auto">
        <div className="flex flex-wrap">
          <div className="w-1/2 pl-4">
            <h3 className="text-[30px] font-semibold">How it Works</h3>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mr p-5 rounded-lg mr-8 bg-white">
              <img className="w-full  " src={DammyImg} />
            </div>
          </div>
          <div className="w-1/2 px-4 flex flex-wrap">
            {data.map((cardData, index) => {
              return (
                <Card
                  key={index}
                  title={cardData.title}
                  description={cardData.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
