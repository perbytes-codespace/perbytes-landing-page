import Image from 'next/image';

export default function About() {
  return (
    <main>
            <div className="text-center place-content-center content-center text-[#032B3A] grid grid-cols-1 gap-6 px-[220px]">
                <p className="text-5xl font-bold">
                    Our Story
                </p>
                <p className="px-72">
                    In the dynamic landscape of technology, PerBytes was conceived in 2023 with a vision to be more than just a software development company. We set out to be architects of change, creators of digital experiences that transcend the ordinary. Our journey began with a handful of passionate individuals determined to redefine how businesses interact with technology.
                </p>
                <div className="place-self-center rounded-lg border border-2 px-36 my-10">
                    <Image alt="about" width={1000} height={500} src="/about.png" />
                </div>
                <div className="grid grid-cols-2 gap-6 text-left">
                    <p className="text-[#032B3A] text-5xl font-bold">
                        We are here to help the customers to get their success.
                    </p>
                    <p className="text-[#032B3A] text-xl px-6">
                        We share common trends and strategies for improving your rental income and making sure you stay in high demand of service. 
And at the heart of our philosophy is a relentless pursuit of innovation. We don&apos;t just follow industry trends; we set them. Our commitment to staying at the forefront of technological advancements allows us to provide our clients with solutions that are not only current but also future-proof.
                    </p>

                </div>
                <div className="my-10">
                    <div className="text-[#032B3A] grid grid-cols-1 gap-2">
                        <p className="text-md font-bold text-[#076588]">Our team</p>
                        <p className="lg:text-[34px] text-lg font-bold">Meet the <span className="text-[#076588]">Team.</span></p>
                        <p className="leading-[24.3px] px-24">Behind every line of code and every successful project is a team of dedicated professionals. Meet the faces behind PerBytes – a group of passionate individuals with diverse skills and a shared commitment to excellence.</p>
    
                    </div>
                    <div className="grid grid-cols-3 gap-4"></div>
                </div>
                <div className="w-[700px] place-self-center items-center mb-10">
                    <div className="text-[#032B3A] grid grid-cols-1 gap-2">
                        <p className="text-3xl font-bold">Get latest updates</p>
                        <p className="text-lg">With lots of unique blocks, you can easily build a page without coding. Build your next landing page..</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-10 place-self-center">
                        <input type="email" placeholder="john.doe@example.com" className=" px-2 py-4 rounded-lg bg-white" />
                        <input type="submit" value="Subscribe" className="px-2 py-4 rounded-lg bg-[#076588] text-white" />
                    </div>
                </div>
                </div>


</main>
  );
}