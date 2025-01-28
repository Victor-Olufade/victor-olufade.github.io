import image from "../../assets/air-balloon.jpeg";

const Index = () => {
  return (
    <div className="lg:p-20 p-0">
      <div
        className="relative w-full  lg:rounded-[30px] rounded-none overflow-hidden p-4"
        style={{
          backgroundColor: "#581C87BF", // Fallback color for overlay
        }}
      >
        {/* Rotated and Scaled Image */}
        <img
          src={image}
          alt="Air Balloon"
          className="absolute inset-0 w-auto h-full transform rotate-90 scale-y-[8] scale-x-[2] object-cover"
        />

        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-[#581C87BF]"></div>

        {/* Text Content */}
        <div className="relative z-10  text-white flex flex-col  items-end">
          <h2 className="text-[56px] font-extrabold leading-[61.6px] hidden lg:block">
            Streamlined <br /> Staffing, Seamless <br /> Results
          </h2>
          <h2 className="text-[40px] font-bold leading-[44px] lg:hidden block">
            Streamlined Staffing, Seamless Results
          </h2>
          <p className="mt-2 text-lg">
            At Zenix, we simplify complex staffing challenges with <br /> customized
            solutions, ensuring your team operates efficiently <br /> and effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
