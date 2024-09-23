'use client'
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <div className="bg-[#043A4E]">
    <div className="mx-auto max-w-screen-xl text-white py-4 hidden md:block">
    <div className="flex text-center items-center gap-1 justify-between">
        <div className="flex gap-6">
            <p className="font-light text-sm">Ready to transform your ideas into reality?</p>
            <h1 className="text-sm font-semibold text-white">Let&apos;s Get Started</h1>
        </div>
        <div className="flex justify-between gap-6 text-sm">
            <div className="loca">
                <p className="text-sm">Addis Ababa, Ethiopia</p>
            </div>
            <div className="text-sm">
                <p className="text-sm">info@perbytes.com</p>
            </div>
          
        </div>
    </div>
</div>
<Navbar />
</div>
  );
};