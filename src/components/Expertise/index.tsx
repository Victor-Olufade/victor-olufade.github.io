import expertise from "../../assets/expertise.svg";
import sparks from "../../assets/sparks.svg";

const Index = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:p-20 py-[48px] px-4">
      <div className="flex flex-col gap-4 lg:mb-0 mb-4">
        <p className="text-[#0F172A] lg:text-[56px] text-[40px] lg:leading-[61.6px] leading-[44px] lg:font-extrabold font-bold">
          Proven Expertise
        </p>
        <p className="text-[#475569] font-normal lg:leading-[28.8px] text-lg lg:block hidden">
          Our management team has over 5 years of combined experience in the
          <br />
          staffing industry. Our staff includes experienced recruiters,
          trainers, and <br /> account managers who are dedicated to providing
          exceptional service and <br /> support to our clients.
        </p>
        <p className="text-[#475569] font-normal lg:leading-[28.8px] text-lg text-justify lg:hidden block">
          Our management team has over 5 years of combined experience in the
          staffing industry. Our staff includes experienced recruiters,
          trainers, and account managers who are dedicated to providing
          exceptional service and support to our clients.
        </p>
      </div>
      <div className="relative">
        <img src={expertise} alt="" className="relative z-10" />
        <img
          src={sparks}
          alt=""
          className="lg:absolute lg:right-[-50px] lg:bottom-[180px] lg:z-0 hidden"
        />
      </div>
    </div>
  );
};

export default Index;
