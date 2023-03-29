import React from "react";
import InfoImg from "../../assets/images/info.png";
import GuideImg1 from "../../assets/images/guide1.png";
import GuideImg2 from "../../assets/images/guide2.png";
import BackTicks from "../../assets/images/backtickis.png";
import Button from "../DefaultLaout/Button";
export default function HowToGuides({ data }) {
  return (
    <section className="bg-law-gray-100 py-16">
      <div className="max-w-5xl mx-auto ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-wrap items-center even:flex-row-reverse"
            >
              <div className="w-1/2 px-4">
                {index == 0 ? (
                  <img src={InfoImg} alt="ing" />
                ) : (
                  <>
                    <div className="flex items-end relative">
                      <div className=" pr-4">
                        <img
                          src={GuideImg1}
                          alt="ing"
                          className="rounded-tr-full rounded-tl-full"
                        />
                      </div>
                      <div className="pl-4">
                        <img
                          src={GuideImg2}
                          alt="ing"
                          className="rounded-tr-full rounded-tl-full"
                        />
                      </div>
                      <div className="absolute -bottom-9 right-0 w-[95%] border-2 rounded-tr-full border-white bg-[#ffffffc7] p-4 flex">
                        <div className="flex mr-2 items-start w-[100px]">
                          <img
                            src={BackTicks}
                            className="w-15 mr-[2px]"
                            alt="ing"
                          />
                          <img src={BackTicks} className="w-15" alt="ing" />
                        </div>
                        <div>
                          <h4>Quam ut viverra porttitor sed.</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Metus, dolor viverra sed adipiscing posuere
                            duis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="w-1/2 px-4">
                <h2 className="text-40 leading-[50px] text-law-black-900  font-semibold mb-5">
                  {item.title}
                </h2>
                <p>{item.description}</p>
                <Button className="bg-law-pink-900 mt-10 font-semibold">
                  {item.linkText}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
