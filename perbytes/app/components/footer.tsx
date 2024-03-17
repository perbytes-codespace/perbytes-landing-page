'use client'
import Image from 'next/image'
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export const  Footer=() => {
    const year = new Date().getFullYear();
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <footer className="bg-[#E6F0F3] text-[#043A4E] mt-[100px]">
        <div className="sm:flex justify-between px-6  lg:px-[220px] my-10">
        <div className="sm:w-1/2 flex flex-col gap-4">
        <div className="flex justify-between">
            <a href="index.html" className="flex gap-2 items-center">
                <div className="h-8 w-6">
                    <Image className="h-8 w-6" width={50} height={50} src="/footer-logo.png" alt="logo" />
                </div>
                <span className="text-lg">Perbytes <span className=" font-semibold">Systems</span></span>
            </a>
            <div className="flex gap-2 items">
                <div className="h-8 w-6">
                    <FaFacebookF />
                </div>
                <div className="h-8 w-6">
                    <FaXTwitter />
                </div>
                <div className="h-8 w-6">
                    <FaInstagram />
                </div>
            </div>
        </div>
        <p className="text-md">
            PerBytes is a forward-thinking software development company driven by a passion for innovation and a commitment to client success. As architects of digital transformation, we specialize in crafting tailored solutions that empower businesses through cutting-edge technology. Our values of excellence, transparency, innovation, collaboration, and continuous learning are woven into the fabric of our culture, guiding us as we strive to exceed expectations and shape the future of software development. 
        </p>
        </div>
        <div className="flex gap-4 my-4">
        <div className="text-[#076588] text-[18px] flex flex-col gap-2">
            <p className="font-bold">
                Company
            </p>
            <ul className="flex flex-col gap-2">
                <li><a className="" href="about.html">About Us</a></li>
                <li><a className="" href="about.html">Team</a></li>
                <li><a className="" href="about.html">Services</a></li>
                <li><a className="" href="contact.html">Contact Us</a></li>
            </ul>
    
        </div>
        <div className="text-[#076588] text-[18px] flex flex-col gap-2">
            <p className="font-bold">
                Legal
            </p>
            <ul className="flex flex-col gap-2">
                <li><a className="" href="#">Terms of service</a></li>
                <li><a className="" href="#">Privacy policy</a></li>
            </ul>
    
        </div>
        </div>
    </div>
    <div className="flex justify-between py-8 bg-[#043A4E] text-white items-center lg:px-[220px]">
        <p className="sm:text-xl text-sm">PerBytes Technologies © {year}. <span className='hidden md:inline'>All Rights Reserved.</span></p>
        <p className="sm:text-xl text-sm cursor-pointer flex gap-2 items-center" onClick={backToTop}>
        <IoIosArrowRoundUp /> Back to top
        </p>
    </div>
    
    </footer>
    )
}