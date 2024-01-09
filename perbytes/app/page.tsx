import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://betterstack.com/assets/v2/homepage/hero-bg-3a1adb9be5d3a524fe6108c9346d27e84707509449529c0e3070909f56bef100.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(6px)',
        }}
      ></div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 text-2xl font-semibold flex w-full justify-center text-2xl pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4">
          Perbytes
        </p>
        {/* <div className="contact">
          <p className="text-lg px-4 border border-1 rounded-lg">Contact</p>
        </div> */}
      </div>

      <div className="relative flex flex-col align-center items-center justify-center my-32 px-[25rem] w-full">
        {/* Content */}
        <div className="z-10 text-center">
          <p className="text-4xl font-semibold">
            Perbytes. Coming Soon.
          </p>
          <p className='text-4xl font-semibold'>
            Please stay tuned.
          </p>
        </div>
      </div>
      <footer className='flex align-center items-center text-white z-0 absolute bottom-0'>
          <p>
            Perbytes Systems, Inc. &copy; 2023 All rights reserved.
          </p>
      </footer>
    </main>
  );
}