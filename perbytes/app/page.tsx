"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Navbar } from "./components/navbar";
import { PiGearFineLight } from "react-icons/pi";
import { RiUser5Line } from "react-icons/ri";
import { SlPuzzle } from "react-icons/sl";
import { RiCustomerService2Fill } from "react-icons/ri";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen">
      {/* Hero Section */}
      <div className="bg-[url('/bg-sm.png')] sm:bg-[url('/hero.png')] h-screen flex justify-center align-center text-center">
        <div className=" flex flex-col mt-[10rem]  lg:mt-[15rem] lg:px-[120px] gap-4 text-white px-6">
          <p className="heading text-4xl font-bold tracking-tight lg:text-8xl text-6xl font-display">
            Providing
            <span className="text-[#FFDD1F]"> innovative solutions</span> to
            various problems in the country.
          </p>
          <p className="font-thin text-gray-300 text-xl md:text-4xl sm:text-5xl  lg:px-[120px]">
            At the core of Perbytes&apos; ethos is the belief that modern
            technology, when guided responsibly, can uplift communities and
            bring positive transformation.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {/* About Us Section */}
        <div className="my-32">
          <div className="flex flex-col justify-center text-center items-center gap-2 mx-auto px-6 md:px-[80px] sm:px-[220px]">
            <p className="text-[#032B3A] text-3xl font-semibold">
              Welcome to PerBytes
            </p>
            <p className="sm:text-2xl text-lg font-light">
              At PerBytes, we&apos;re not just developers; we&apos;re architects
              of digital experiences. We breathe life into ideas, turning
              concepts into cutting-edge software solutions. Whether you&apos;re
              a startup looking to disrupt the market or an enterprise seeking
              digital transformation, we&apos;ve got the expertise to make it
              happen.
            </p>
          </div>
          <div className="flex flex-col text-center mt-[140px] mx-auto gap-[84px] px-6">
            <div className="">
              <p className="text-[#032B3A] text-md font-semibold">
                Why Choose Us?
              </p>
              <p className="text-[#032B3A] lg:text-[34px] text-lg font-bold">
                People choose us because we serve the best for everyone.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] mt-4 lg:px-[193px]">
              <div className="flex gap-[24px]">
                <div className="h-20 w-20 p-10 rounded-lg bg-[#FFDD1F] flex justify-center items-center text-2xl">
                  <span>
                    <PiGearFineLight />
                  </span>
                </div>
                <div className="flex flex-col text-left">
                  <p className="font-semibold text-[24px]">
                    Cutting-Edge Technologies
                  </p>
                  <p className="text-[18px] leading-[24.3px] font-light">
                    Whether you need to streamline operations, boost customer
                    experiences or gain new efficiencies, our experts bring a
                    collaborative, solutions-oriented approach. We take the time
                    to understand your specific goals and pain points, then
                    leverage our technical expertise to develop custom
                    strategies that directly address your priorities.
                  </p>
                </div>
              </div>
              <div className="flex gap-[24px]">
                <div className="h-20 w-20 p-10 rounded-lg bg-[#FFDD1F] flex justify-center items-center  text-2xl">
                  <span>
                    <RiUser5Line />
                  </span>
                </div>
                <div className="flex flex-col text-left">
                  <p className="font-semibold text-[24px]">
                    Customer-Centric Approach
                  </p>
                  <p className="text-[18px] leading-[24.3px] font-light">
                    Every business has a unique DNA, which is why we never take
                    a one-size-fits-all approach. We believe deep understanding
                    is key to building impactful solutions.
                  </p>
                </div>
              </div>
              <div className="flex gap-[24px]">
                <div className="h-20 w-20 p-10 rounded-lg bg-[#FFDD1F] flex justify-center items-center text-2xl">
                  <span>
                    <SlPuzzle />
                  </span>
                </div>
                <div className="flex flex-col text-left">
                  <p className="font-semibold text-[24px]">
                    End-to-End Solutions
                  </p>
                  <p className="text-[18px] leading-[24.3px] font-light">
                    With our full-spectrum services, you can rest assured that
                    every stage of your project is handled with the utmost
                    professionalism and expertise. Partner with us and
                    experience the peace of mind that comes from having a
                    single, trusted provider overseeing your project from start
                    to finish, leaving no stone unturned in pursuit of your
                    success.
                  </p>
                </div>
              </div>
              <div className="flex gap-[24px]">
                <div className="h-20 w-20 p-10 rounded-lg bg-[#FFDD1F] flex justify-center items-center text-2xl">
                  <span>
                    <RiCustomerService2Fill />
                  </span>
                </div>
                <div className="flex flex-col text-left">
                  <p className="font-semibold text-[24px]">
                    Transparent Communication and Collaboration
                  </p>
                  <p className="text-[18px] leading-[24.3px] font-light">
                    We believe in open and transparent communication throughout
                    the project lifecycle. We keep you involved and informed at
                    every stage, seeking your input and feedback to ensure that
                    the final solution aligns with your vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 align-center items-center md:mb-32 md:mt-20">
          <div className="flex flex-col gap-1 justify-center text-center">
            <p className="text-[#032B3A] text-4xl font-bold leading-[39.78px]">
              Discover our unique products!
            </p>
            <p className="text-[#032B3A] text-2xl font-semibold leading-[24.3px]">
              We present three flagship products, each addressing highly
              specific challenges within the ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[84px] gap-4 py-6 px-6  align-center lg:px-[193px]">
            <div className="flex flex-col gap-6 px-6 text-left E6F0F3">
              <p className="text-xl md:text-lg  font-bold">
                <span className="text-[#076588] mr-2">Aqmada:</span>
                Beyond Stocks
              </p>
              <div className="lg:w-[25rem] md:w-[20rem] h-[120px] shadow-sm lg:h-[165px]  text-[#076588] font-bold bg-[#FEFEFE] rounded-lg flex">
                <div className="text-left m-auto pb-4 pl-6">
                  <Image
                    width={200}
                    height={100}
                    alt="/aqmada logo"
                    src="/aqmada-01.png"
                  />
                </div>
              </div>
              <p>
                Aqmada provides a comprehensive inventory marketplace solution
                optimized for commercial businesses,
                small-sized-and-micro-enterprises, and large institutions and
                industries.
              </p>
              <Link href="https://aqmada.com/" target="_blank" rel="noreferrer" className="text-[#076588] text-lg font-bold">
                Learn More &gt;
              </Link>
            </div>
            <div className="flex flex-col gap-6 px-6 text-left">
              <p className="text-xl md:text-lg font-bold">
                <span className="text-[#076588] mr-2">Medeb:</span>
                Investment Reimagined.
              </p>
              <div className="lg:w-[25rem] md:w-[20rem] h-[120px] lg:h-[165px]   shadow-sm text-[#076588] font-bold bg-[#FEFEFE] rounded-lg flex">
                <div className="text-left mt-auto pb-4 pl-6">
                  <p>We are</p>
                  <p>Coming Soon</p>
                </div>
              </div>
              <p>
                Medeb seeks to facilitate the retail for investment offering
                commission-free trading in Ethiopian-listed stocks and
                securities.
              </p>
              <a href="" className="text-[#076588] text-lg font-bold">
                Coming Soon...
              </a>
            </div>
            <div className="flex flex-col gap-6 px-6 text-left">
              <p className="text-xl md:text-lg  font-bold">
                <span className="text-[#076588] mr-2">Agar:</span>
                Roadside Service.
              </p>
              <div className="lg:w-[25rem] md:w-[20rem] h-[120px] lg:h-[165px]   shadow-sm text-[#076588] font-bold bg-[#FEFEFE] rounded-lg flex">
                <div className="text-left mt-auto pb-4 pl-6">
                  <p>We are</p>
                  <p>Coming Soon</p>
                </div>
              </div>
              <p>
                Agar roadside assistance services provide the reliable help you
                need during vehicle emergencies and breakdowns.
              </p>
              <a href="" className="text-[#076588] text-lg font-bold">
                Coming Soon...
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-6 lg:px-[193px] px-6 gap-2 sm:text-center ">
          <div className="text-[#032B3A] mb-4">
            <p className="lg:text-[48px] lg:leading-[57.6px] text-2xl font-bold">
              Frequently Asked Questions
            </p>
            <p className="text-[18px] leading-[24.3px] font-light"></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[80px] mt-4 mb-10">
            <div className="flex lg:gap-[24px] gap-[12px]">
              <div className="h-20 w-20 p-10 rounded-full bg-[#076588]/[10%] flex justify-center items-center">
                <span className="text-[#076588]">?</span>
              </div>
              <div className="flex flex-col gap-2 text-left">
                <p className="font-semibold lg:text-[24px] text-[18px] text-[#076588]">
                  What services does Aqmada offer?
                </p>
                <p className="lg:text-[18px] text-[15px] lg:leading-[24.3px] font-light">
                  Aqmada offers a comprehensive inventory marketplace solution
                  for commercial businesses, small-sized-and-micro-enterprises,
                  and large institutions and industries.
                </p>
              </div>
            </div>
            <div className="flex lg:gap-[24px] gap-[12px]">
              <div className="h-20 w-20 p-10 rounded-full bg-[#076588]/[10%] flex justify-center items-center">
                <span className="text-[#076588]  font-bold">?</span>
              </div>
              <div className="flex flex-col gap-2 text-left">
                <p className="font-semibold lg:text-[24px] text-[18px]  text-[#076588]">
                  What makes Medeb stand out from other investment platforms?
                </p>
                <p className="lg:text-[18px] text-[15px] lg:leading-[24.3px] font-light">
                  Medeb is unique in offering commission-free trading for
                  Ethiopian-listed stocks and securities, improving the
                  accessibility of investment opportunities for retail
                  investors. This helps more people to engage with the local
                  stock market in Ethiopia.
                </p>
              </div>
            </div>
            <div className="flex lg:gap-[24px] gap-[12px]">
              <div className="h-20 w-20 p-10 rounded-full bg-[#076588]/[10%] flex justify-center items-center">
                <span className="text-[#076588]  font-bold">?</span>
              </div>
              <div className="flex flex-col gap-2 text-left">
                <p className="font-semibold lg:text-[24px] text-[18px] text-[#076588]">
                  Do you handle the entire project lifecycle?
                </p>
                <p className="lg:text-[18px] text-[15px] lg:leading-[24.3px] font-light">
                  Absolutely. As a comprehensive tech company and agency, we
                  have the capabilities to handle the entire project lifecycle.
                  From the initial ideation and planning stages to development,
                  implementation, and ongoing support, we ensure a seamless and
                  integrated solution.
                </p>
              </div>
            </div>
            <div className="flex lg:gap-[24px] gap-[12px]">
              <div className="h-20 w-20 p-10 rounded-full bg-[#076588]/[10%] flex justify-center items-center">
                <span className="text-[#076588] font-bold">?</span>
              </div>
              <div className="flex flex-col gap-2 text-left">
                <p className="font-semibold lg:text-[24px] text-[18px] text-[#076588]">
                  Will you provide support?
                </p>
                <p className="lg:text-[18px] text-[15px] lg:leading-[24.3px] font-light">
                  Our team consists of seasoned professionals with diverse skill
                  sets, allowing us to tackle a wide range of projects with
                  precision and expertise.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 font-semibold my-20">
            <p>
              Haven’t got your answer?
              <Link
                href="/contact"
                className="text-[#076588] text-lg font-bold ml-2"
              >
                Contact our support now
              </Link>
            </p>
          </div>
        </div>
        <div className="px-6 lg:px-[220px] py-10 md:flex justify-between items-center">
          <div className="">
            <p className="text-[#032B3A] lg:text-[34px] text-lg font-bold mb-2">
              Ready to launch your next project?
            </p>
            <p className="text-[#032B3A] text-md">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <Link href="/contact">
              <button className="px-6 py-3 bg-[#076588] text-white rounded-lg text-md font-bold">
                Get started &gt;
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
