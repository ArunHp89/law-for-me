import React from "react";
import Button from "../DefaultLaout/Button";
import JoinTeamImg from "../../assets/images/jointeam.png";

export default function JoinUs() {
  return (
    <section
      className="py-16 text-white 
    relative before:absolute before:w-full sm:before:h-1/2 before:bg-law-blue-100 before:bottom-0 before:left-0 before:content-[''] before:-z-10 before:h-1/6"
    >
      <div className="max-w-5xl mx-auto bg-law-blue-600  rounded-lg p-16 pb-0 overflow-hidden">
        <div className="flex flex-wrap">
          <div className="w-1/2 px-4">
            <h2 className="text-40 leading-[50px]  font-semibold mb-5">
              Lorem ipsum dolor sit
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              amet ullamcorper condimentum posuere.
            </p>
            <Button className="bg-law-pink-900 mt-5">Join the Team</Button>
          </div>
          <div className="w-1/2 px-4 relative ">
            <img src={JoinTeamImg} className="relative z-10 w-full" />
            <div className="absolute w-[500px] h-[500px] bottom-[-250px] z-0 -right-[9rem] rounded-full bg-law-blue-900"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
