import services from '../../assets/services.svg'

const Index = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:p-20 px-4 py-[48px] lg:justify-between justify-center items-center lg:mt-0 mt-8">
      <div className="flex flex-col gap-4">
        <p className="text-[#0F172A] lg:leading-[61.6px] leading-[44px] lg:text-[56px] text-[40px] lg:font-extrabold font-bold">
          Flexible Staffing, Tailored Solutions
        </p>
        <p className="text-[#0F172A] text-lg leading-[28.8px] font-normal">
          We specialize in providing temporary, temporary-to-permanent, and
          permanent <br /> staffing solutions to a range of industries, that includes
          the Healthcare, Education, <br /> Hospitality and lots more. Our services
          include recruitment, screening, training, <br /> and payroll management.
        </p>
      </div>
      <img src={services} alt="" className='mt-10'/>
    </div>
  );
};

export default Index;
