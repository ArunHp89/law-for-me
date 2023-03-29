import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg1 from "../../assets/images/slider1.png";
import SliderImg2 from "../../assets/images/slider2.png";
import SliderImg3 from "../../assets/images/slider3.png";
import "./legalServices.css";
export default function LegalServices() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 fill-white"
          viewBox="0 0 320 512"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </div>
    ),
    prevArrow: (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 fill-white"
          viewBox="0 0 384 512"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </div>
    ),
  };
  return (
    <section className="bg-law-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4 mb-10 ">
        <h2 className="text-48 leading-[68px] text-law-black-900  font-semibold mb-5">
          Legal Services & Advisory
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, non
          massa commodo.
        </p>
      </div>
      <Slider {...settings}>
        {/* {legalslider.map((item, index) => {
        return (
          <div key={index}>
            <div>DFDFDDFDFD</div>
          </div>
        );
        
      })} */}
        <div className=" flex justify-center">
          <div className="flex justify-center relative">
            <div>
              <img src={SliderImg2} />
            </div>
            <div className="bg-white absolute bottom-20 rounded-lg p-5 ">
              <h4>Commercial Law</h4>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="flex justify-center relative">
            <div>
              <img src={SliderImg1} />
            </div>
            <div className="bg-white absolute bottom-16 rounded-lg p-5 ">
              <h4>Business Health Check</h4>
            </div>
          </div>
        </div>

        <div className=" flex justify-center">
          <div className="flex justify-center relative">
            <div>
              <img src={SliderImg3} />
            </div>
            <div className="bg-white absolute bottom-20 rounded-lg p-5 ">
              <h4>Employment Law</h4>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="flex justify-center relative">
            <div>
              <img src={SliderImg2} />
            </div>
            <div className="bg-white absolute bottom-20 rounded-lg p-5 ">
              <h4>Property Law</h4>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="flex justify-center relative">
            <div>
              <img src={SliderImg3} />
            </div>
            <div className="bg-white absolute bottom-20 rounded-lg p-5 ">
              <h4>Corporate Law</h4>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="flex justify-center relative">
            <div>
              <img src={SliderImg1} />
            </div>
            <div className="bg-white absolute bottom-20 rounded-lg p-5 ">
              <h4>Business Health Check</h4>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}
