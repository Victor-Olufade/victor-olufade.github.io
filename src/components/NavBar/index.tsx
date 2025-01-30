import { sendEmail } from "../../utils"

const Index = () => {
  return (
    <div className='flex flex-row justify-between items-center lg:py-6 lg:px-11 border-b border-b-[#E2E8F0] p-4'>
        <p className="text-[#0F172A] font-bold text-[32px]">Zenix</p>
        <button className="bg-[#2563EB] border-2 border-[#2563EB] p-3 text-white rounded font-normal text-[16px]" onClick={()=>sendEmail()}>Email Us</button>
    </div>
  )
}

export default Index