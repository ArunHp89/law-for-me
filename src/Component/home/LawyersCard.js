import React from "react";
import Layer1 from "../../assets/images/lawyer1.png";
import Layer2 from "../../assets/images/lawyer2.png";
import Layer3 from "../../assets/images/lawyer3.png";
import Layer4 from "../../assets/images/lawyer4.png";
export default function LawyersCard({
  image,
  position,
  description,
  eduction,
  name,
  index,
}) {
  return (
    <div className="w-1/4 flex px-4">
      <div className="bg-white text-center pb-5">
        <div>
          {(() => {
            if (index === 0) {
              return <img src={Layer1} className="rounded-full" />;
            } else if (index === 1) {
              return <img src={Layer2} className="rounded-full" />;
            } else if (index === 2) {
              return <img src={Layer3} className="rounded-full" />;
            } else {
              return <img src={Layer4} className="rounded-full" />;
            }
          })()}
        </div>
        <div className="px-5 pt-4">
          <h3 className="mb-1">{name}</h3>
          <p className="font-semibold mb-1">{position}</p>
          <p>{description}</p>
          <p className="font-semibold">{eduction}</p>
          <a
            className="underline text-law-blue-900 font-semibold mt-2 flex justify-center items-center"
            href=""
          >
            More About Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1 fill-law-blue-900"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
