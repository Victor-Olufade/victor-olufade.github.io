const Index = () => {
  return (
    <div className="lg:p-20 p-0">
      <div className="bg-gradient-to-r from-[#312E81]  via-[#1E3A8A] to-[#701A75] lg:rounded-[30px] rounded-none flex flex-col justify-center items-center p-5 gap-4">
        <p className="text-white font-extrabold lg:text-[56px] text-[40px] text-center leading-[61.6px]">Get Staffing Support</p>
        <p className="text-white text-center font-normal text-lg leading-[28.8px]">Contact us today to learn more about our staffing solutions and how wean support your business needs.</p>
        <button className="bg-[#2563EB] border-2 border-[#2563EB] w-[40%] lg:w-auto  text-white rounded font-normal text-[16px] p-4">Email Us</button>
        <div className="bg-[#65558F] w-[90%] border border-[#CBD5E1] rounded-lg flex lg:flex-row flex-col">
            <div className="lg:border-r border-b p-4 lg:w-[30%] w-full flex justify-center">
                <p className="text-white font-medium">+ 234 902 572 6773</p>
            </div>
            <div className="lg:border-r border-b p-4 lg:w-[30%] w-full flex justify-center">
                <p className="text-white font-medium">+ 234 811 109 7928</p>
            </div>
            <div className="p-4 w-full lg:w-[30%] flex justify-center">
                <p className="text-white font-medium">+ 234 706 949 4728</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
