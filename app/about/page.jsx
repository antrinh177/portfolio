"use client";
import {motion } from 'framer-motion';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import Info from '@/components/Info';
import Journey from '@/components/Journey';
import Blob from '@/components/Blob';
import Socials from '@/components/Socials';
import Interests from '@/components/Interests';


const About = () => {
  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="h-screen flex items-center"
    > 
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* img & social icons */}
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative">
            <Image 
              src="/assets/avatar.png" 
              width={320} 
              height={496} 
              alt=""
              className="z-20 relative" 
            />
            {/* overlay */}
            <div className="w-full h-[75px] absolute left-0 top-[350px] right-0 bg-gradient-to-t 
            from-primary via-primary/95 z-30"></div>

            {/* blob */}
            <div className="absolute top-[80px] -left-[50px] z-10">
              <Blob containerStyles="w-[360px] h-[360px]"/>
            </div>

            <Socials containerStyles="flex gap-4 z-40 w-max transform translate-x-[75px]" 
            iconStyles="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover
            transition-all flex items-center justify-center rounded-full cursor-pointer" />
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="mt-15 xl:mt-0 flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">An</span> Trinh
              </h2>
              <div className="flex flex-col items-start gap-16">
                <Info />
                <Journey />
                <Interests />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  )
}

export default About