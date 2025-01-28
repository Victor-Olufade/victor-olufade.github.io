import pic1 from "../../assets/pic1.svg";
import pic2 from "../../assets/pic2.svg";
import pic3 from "../../assets/pic3.svg";
import sparks from "../../assets/sparks.svg";

const Index = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:p-20 py-12 px-4 lg:justify-between justify-center lg:gap-0 gap-3 items-center lg:mb-8 mb-0">
      {/* <div className="border border-red-600 bg-green-500">
      </div> */}
      <div className="flex flex-col gap-4 lg:mb-0 mb-[30px]">
        <p className="lg:text-[56px] text-[40px] text-[#0F172A] font-extrabold lg:leading-[61.6px] leading-[44px]">
          Building Careers, <br /> Empowering <br />
          Businesses
        </p>
        <p className="text-[#0F172A] text-base font-normal leading-[28.8px] hidden lg:block">
          Founded in late 2022, Zenix Corporation has established itself as a
          trusted <br /> partner in the staffing industry. Our team of
          experienced professionals has <br /> a deep understanding of the labor
          market and a proven track record of <br /> delivering high-quality
          staffing solutions.
        </p>
        <p className="text-[#0F172A] text-base font-normal lg:hidden block leading-[25.6px] text-justify">
          Founded in late 2022, Zenix Corporation has established itself as a
          trusted partner in the staffing industry. Our team of experienced
          professionals has a deep understanding of the labor market and a
          proven track record of delivering high-quality staffing solutions.
        </p>
      </div>

      <div className="w-full flex flex-row items-center justify-between">
        <div className="w-[32%] md:w-[30%] h-[204px]">
          <img src={pic1} alt="" className="w-full h-hull object-cover" />
        </div>
        <div className="w-[32%] md:w-[30%] h-[204px] mb-20">
          <img src={pic2} alt="" className="w-full h-hull object-cover" />
        </div>
        <div className="w-[32%] md:w-[30%] h-[204px]">
          <img src={pic3} alt="" className="w-full h-hull object-cover" />
        </div>

        {/* <img src={pic1} alt="" className="w-[32%] md:w-[30%] h-[204px]"/>
        <img src={pic2} alt="" className="w-[32%] md:w-[30%] h-[204px]"/>
        <img src={pic3} alt="" className="w-[32%] md:w-[30%] h-[204px]"/> */}
        <img
          src={sparks}
          alt=""
          className="hidden md:flex lg:-left-[100px] -left-[29px] -bottom-[800px] lg:-bottom-[300px] z-0"
        />
      </div>
    </div>
  );
};

export default Index;
