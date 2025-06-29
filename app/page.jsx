"use client"
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

// Components
import Blob from '@/components/Blob';
import Image from 'next/image';
import avatarImg from '@/public/assets/avatar.png';
import Socials from '@/components/Socials';
import Pattern from '@/components/Pattern';


const Home = () => {
  return (
  <motion.section 
    initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
    }}
    className="h-screen flex items-center"
    >
      {/* pattern */}
      <Pattern />

      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* text */}
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start
        text-center xl:text-left">
          <h1 className="h3 flex-1 mb-[28px]">Hi! I'm An, <br />
          <TypeAnimation  
          sequence={["Computer Programming Student", 2000, "Software Testing Engineer", 2000]}
          wrapper="span" 
          speed={40} 
          className="text-accent" 
          repeat={Infinity} 
          cursor={false} />
          </h1>
          <p className="max-w-[500px] mb-[44px]">I'm a programming student with hands-on testing 
            experience. I love building functional, user-friendly applications and making sure 
            everything works smoothly from the inside out. My background in testing helps me spot 
            problems early, and my passion for coding keeps me growing every day.
          </p>
          {/* contact info */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8
          xl:mb-0">
            {/* phone */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone className="text-xl" />
              </span>
              <span>+1 647 870 1707</span>
            </div>

            {/* mail */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>an.minh.1707@gmail.com</span>
            </div>

          </div>
          {/* socials*/}
          <Socials 
          containerStyles="flex mt-12 gap-6 xl:flex-col xl:flex xl:absolute
          xl:top-4/10 xl:right-2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2"
          iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[43px] h-[43px]
          text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />

        </div>

        {/* blob & image */}
        <div className="hidden xl:block flex-1 relative z-20">
          {/* blob */}
          <Blob containerStyles="w-[560px] h-[560px]" />
          {/* avatar image */}
          <Image 
            src={avatarImg} 
            alt="" 
            width={460} 
            height={630}
            quality={100} 
            className="absolute -top-3 left-[80px]"
          />
          {/* overlay gradient */}
          <div className="w-full h-[130px] absolute
          bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/100
          to-primary/90"></div>
        </div>
      </div> 
    </motion.section>
  );
};

export default Home