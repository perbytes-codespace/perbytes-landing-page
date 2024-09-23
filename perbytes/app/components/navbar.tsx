import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0  h-[6rem] py-6 px-6 lg:px-[8rem] backdrop-blur-md ">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex gap-2 items-center">
          <div className="h-8 w-6">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
          </div>
          <span className="text-white text-md">
            perbytes <span className=" font-semibold">systems</span>
          </span>
        </Link>
        <div className="gap-4 items-center text-white divide-x divide-white  text-md font-semibold hidden sm:flex">
          {/* <Link href="about.html">About Us</Link> */}
          <Link href="/contact" className="pl-4">
            Contact
          </Link>
        </div>
        {/* Mobile Menu */}
        <div
          className="sm:hidden flex justify-center items-center text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
            {
                open ? <RxCross1 /> : <RxHamburgerMenu />
            }
        </div>
      </nav>
      {/* List */}
      <div
        className={
          open
            ? `flex flex-col  h-screen right-0 backdrop-blur-md px-20 absolute  w-full text-center  my-4"`
            : `hidden`
        }
      >
        <Link href="about" className="text-white text-md font-semibold my-4">
          About Us
        </Link>
        <Link
          href="contact"
          className="text-white text-md font-semibold pl-4"
        >
          Contact
        </Link>
      </div>
      {/* List */}
    </div>
  );
};
