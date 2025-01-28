
const Index = () => {
  return (
    <footer className="lg:p-20 px-4">
        <div className="flex lg:flex-row flex-col lg:justify-between justify-start lg:items-center items-start lg:gap-0 gap-7">
            <div className="flex lg:flex-row flex-col justify-start gap-2 py-2 lg:py-0">
                <p className="text-[#0F172A] font-medium">Zenix</p>
                <p className="text-[#475569] font-normal text-base">@ 2024. All rights reserved.</p>
            </div>
            <div className="flex gap-4 lg:items-center items-start">
                <p className="text-[#475569] font-normal text-base">Terms</p>
                <p className="text-[#475569] font-normal text-base">Privacy</p>
                <p className="text-[#475569] font-normal text-base">Support</p>
                <p className="text-[#475569] font-normal text-base">About</p>
                <p className="text-[#475569] font-normal text-base hidden lg:block">Resources</p>
                <p className="text-[#475569] font-normal text-base">Contact</p>
            </div>
        </div>

    </footer>
  )
}

export default Index