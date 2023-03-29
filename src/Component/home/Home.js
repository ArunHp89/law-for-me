import React from "react";
import Banner from "./Banner";
import LegalDocuments from "./LegalDocuments";
import HowitWorks from "./HowitWorks.js";
import LegalServices from "./LegalServices.js";
import homejson from "../../json/Home.json";
import lawyersdata from "../../json/Lawyer.json";
import howtoguides from "../../json/HowToGuides.json";
import SubscriptionPlans from "./SubscriptionPlans";
import PlansTableHead from "./PlansTableHead";
import PlansTableBody from "./PlansTableBody";
import MeetLawyers from "./MeetLawyers";
import HowToGuides from "./HowToGuides";
import JoinUs from "./JoinUs";
import Testimonial from "./Testimonial";
export default function Home() {
  return (
    <>
      <Banner />
      <LegalDocuments />
      <HowitWorks data={homejson.howItWorks} />
      <section className="bg-law-blue-100 py-16">
        <div className="max-w-5xl mx-auto px-4 ">
          <div className="flex flex-wrap">
            <SubscriptionPlans />
            <div className="w-full px-4 text-center text-14">
              <table>
                <PlansTableHead />
                <PlansTableBody />
              </table>
            </div>
          </div>
        </div>
      </section>
      <LegalServices />
      <MeetLawyers data={lawyersdata.lawyer} />
      <HowToGuides data={howtoguides.howtoguide} />
      <JoinUs />
      <Testimonial />
    </>
  );
}
