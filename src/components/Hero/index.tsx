import phone from "../../assets/phone.svg";
import kilimanjaro from "../../assets/kilimanjaro.svg";
import heroImage from "../../assets/zenix-hero-image.png";
import sparks from "../../assets/sparks.svg";
import { sendEmail } from "../../utils";

const Index = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center lg:p-20 py-12 px-4 border-b border-b-[#E2E8F0]">
      <div className="gap-6 flex flex-col lg:mb-0 mb-5">
        <p className="text-[#0F172A] lg:text-7xl text-[40px] lg:leading-[79.2px] leading-[44px] font-extrabold">
          Smart Staffing, <br />
          Simplified
        </p>
        <p className="text-[#475569] font-normal leading-[28.8px] hidden lg:block">
          Zenix Corporation is a leading provider of staffing solutions,
          dedicated to <br /> delivering exceptional service and support to our
          clients. Our mission is to <br /> provide innovative staffing
          solutions that meet the evolving needs of our <br /> clients.
        </p>
        <p className="text-[#475569] font-normal leading-[25.6px] lg:hidden block text-justify">
          Zenix Corporation is a leading provider of staffing solutions,
          dedicated to delivering exceptional service and support to our
          clients. Our mission is to provide innovative staffing solutions that
          meet the evolving needs of our clients.
        </p>
        <div className="flex gap-4">
          <button
            className="bg-[#2563EB] border-2 border-[#2563EB] p-3 text-white rounded font-normal text-[16px]"
            onClick={() => sendEmail()}
          >
            Email Us
          </button>
          <div className="flex gap-2 items-center">
            <a href="tel:09025726773">
              <img src={phone} alt="" />
            </a>
            <a href="tel:09025726773">
              <p className="text-[#2563EB] text-base font-medium">
                + 234 902 572 6773
              </p>
            </a>
          </div>
        </div>
        <div className="bg-[#F1F5F9] rounded-lg p-4">
          <img src={kilimanjaro} alt="" />
        </div>
      </div>

      <div className="lg:relative static">
        <img src={heroImage} alt="" className="lg:relative lg:z-10 static" />
        <img
          src={sparks}
          alt=""
          className="lg:absolute lg:right-[-50px] lg:bottom-[-70px] lg:z-0 hidden"
        />
      </div>
    </div>
  );
};

export default Index;
