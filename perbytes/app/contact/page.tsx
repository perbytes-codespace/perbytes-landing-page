'use client'

import { useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const apiEndpoint = "/api/email";
    try {
      setLoading(true);
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      setError(true);
      setLoading(false);
      setTimeout(() => {
        setError(false);  
      }, 5000);
    }
  }

  return (
    <main className="bg-[#E6F0F3] syne mx-4">
      <div className="text-center lg:px-[8rem] grid grid-cols-1 gap-10 py-[6rem]">
        <div className=" text-center">
          <p className="text-md font-semibold">Let’s start a conversation. </p>
          <p className="lg:text-[34px] text-lg font-bold">
            Get in Touch with PerBytes.
          </p>
          <p>
            Have a project in mind or just want to learn more about how PerBytes
            can elevate your business? We&apos;re here to help. Reach out to us, and
            let&apos;s start a conversation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[80px] my-10">
          <div className="flex gap-4">
            <div className="h-20 w-20 p-10 rounded-full bg-[#FFDD1F] flex justify-center items-center">
              <span>
                 <FiPhone />
              </span>
            </div>
            <div className="flex flex-col text-left">
              <p className="font-semibold text-[24px]">Call us</p>
              <p className="text-[18px] font-light">+251 91 338 3713</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-20 w-20 p-10 rounded-full bg-[#FFDD1F] flex justify-center items-center">
              <span>
                 <IoMailOutline />
              </span>
            </div>
            <div className="flex flex-col text-left ">
              <p className="font-semibold text-[24px]">Email us</p>
              <p className="text-[18px] text-emerald-800">
                <a href="mailto:info@perbytes.com">
                info@perbytes.com
                </a>
              </p>
              <a href="mailto:perbytescontact@gmail.com">perbytescontact@gmail.com</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-20 w-20 p-10 rounded-full bg-[#FFDD1F] flex justify-center items-center">
              <span>
                 <LuMapPin />
              </span>
            </div>
            <div className="flex flex-col text-left">
              <p className="font-semibold text-[24px]">Visit us</p>
              <p className="text-[18px] font-light">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 rounded-lg text-left bg-white shadow-lg">
          <form onSubmit={(e) => sendEmail(e)}>
            <p>
              Submit the form, and a member of our team will get back to you as
              soon as possible.
            </p>
          <div className="my-4">
          {error && <p className="text-red-500">An error occurred. Please try again.</p>}
            {success && <p>Your message has been sent.</p>}
          </div>
            <div className="flex gap-2 flex-col items-left mt-4">
              <div className="grid sm:grid-cols-3 gap-2">
                <div className="">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-0 sm:text-sm sm:leading-6"
                  id="name"

                />
                </div>
                <div className="w-full">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-0 sm:text-sm sm:leading-6"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                </div>
                <div className="">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-0 sm:text-sm sm:leading-6"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                  name=""
                  id="message"
                  cols={30}
                  rows={10}
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-none rounded-lg "
                  placeholder="Write text here ..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <div className="grid grid-cols-2 ">
                {
                  loading ? (
                    <input
                    type="submit"
                    value="Loading..."
                    disabled = {true}
                    style={{cursor: "not-allowed"}}
                    className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-none rounded-lg bg-[#076588] text-white"
                  />
                  ) :                 <input
                  type="submit"
                  value="Submit"
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-none rounded-lg bg-[#076588] text-white"
                />
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

