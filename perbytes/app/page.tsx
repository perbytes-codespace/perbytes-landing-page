import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center text-2xl pb-6 pt-8 backdrop-blur-2xl0 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4">
          Perbytes
        </p>
      </div>

      <div className="relative flex flex-col place-items-left my-24">
        {/* Content */}
        <div className="z-10">
          <p className="text-4xl font-semibold">Hello.</p>
          <p className='font-mono'>We&apos;ll be coming soon. Please stay tuned.</p>
        </div>
      </div>
    </main>
  );
}