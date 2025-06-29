"use client";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import Image from 'next/image';
import { MdArrowOutward} from 'react-icons/md';
import {FaGithub} from 'react-icons/fa';

// data
const projects = [
  {
    id: 1,
    category: "frontend",
    title: "WhatToEat",
    description: "This app helps users decide what to eat either randomly or by searching with ingredients. Users can view nutrition details, cooking instructions, and save favorite dishes. The saved list enables easy meal tracking with an option to mark dishes as done. Powered by the Spoonacular API, it provides users a seamless meal exploration experience.",
    image: "/assets/work/whattoeat.png",
    link: "https://whattoeat-3l7j.vercel.app/",
    github: "https://github.com/antrinh177/whattoeat",
    tech: ["React", "CSS Modules", "Fetch API", "Local Storage"]
  },
  {
    id: 2,
    category: "frontend",
    title: "Portfolio",
    description: "A personal portfolio highlights my projects, skills, and background with smooth animations and a clean, responsive design.",
    image: "/assets/work/portfolio.png",
    link: "",
    github: "",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Shadcn UI"]
  }
]

// categories
const categories = ["frontend"] ;

const Projects = () => {
  return (
    <motion.section initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
    }}
    className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My <span className="text-accent">Projects</span>
        </h2>
        <Tabs 
          defaultValue="frontend" 
          className="w-full flex flex-col gap-6 xl:gap-12">
            {/* tabs list */}
            <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full">
              {categories.map((category) => {
                return (
                  <TabsTrigger key={category} value={category} className="capitalize 
                  border border-white/10 data-[state=active]:bg-accent
                 data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer">
                  {category}
                  </TabsTrigger>
                )
              })}
            </TabsList>
            {/* tabs content */}
            <div className="h-[400px] scrollbar scrollbar-thumb-accent 
            scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
              {categories.map((category) => {
                return (
                  <TabsContent key={category} value={category}>
                    <Swiper modules={[Pagination]} pagination={{clickable:true, 
                      dynamicBullets: true}} className="h-max xl:h-[460px]">
                      {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                {/* title */}
                                <h3 className="h3"> {project.title} </h3>
                                {/* tech */}
                                <div className="xl:mb-3 max-w-[300px] min-h-[130px]">
                                  <p className="mb-4">Technologies Used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item,index) => {
                                      return <li 
                                                key={index} 
                                                className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                      >
                                        {item}
                                      </li>
                                    })}
                                  </ul>
                                </div>
                                {/* btns */}
                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                  <Link href={project.link} target="_blank">
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>

                                  <Link href={project.github} target="_blank">
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      <FaGithub className="text-xl" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* project img */}
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px]
                              relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image 
                                  src={project.image} 
                                  alt={project.image} 
                                  fill 
                                  className="object-cover" />
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  </TabsContent>
                )
              })}
            </div>
        </Tabs>
      </div>
    </motion.section>
  )
}

export default Projects