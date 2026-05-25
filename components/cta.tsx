import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="relative w-full text-white text-center overflow-hidden py-10 bg-[#010304]">
      {/* Background Layers (matches hero section style) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#010304] from-[23%] to-[#1e45d5cc]"></div>
        <div className="absolute bottom-0 w-full h-full bg-[url('/hexagon.png')] bg-[length:69px] opacity-85"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[2rem] bg-[#0ebaf0] blur-[50px]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* TEXT */}
        <h3 className="mx-auto max-w-5xl text-[20px] md:text-[30px] lg:text-[40px] leading-[1.06] font-bold mb-8 md:mb-12">
          Learn more about{" "}
          <span className="bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text">
            Our Solution
          </span>
        </h3>

        {/* IMAGE */}
        <div className="mt-6 md:mt-8 flex justify-center">
          <Image
            src="/body.png"
            alt="body"
            width={525}
            height={525}
            className="w-[255px] md:w-[420px] lg:w-[525px] max-w-none opacity-95"
          />
        </div>

        {/* BUTTON */}
        <div className="my-12">
          <Link href="/contact">
            <Button className="h-[50px] w-[157.406px] cursor-pointer text-[16px] font-normal">
              Request Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}