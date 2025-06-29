"use client";
import {motion } from 'framer-motion';
import { useState } from "react";
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from "@/lib/utils";

const skills = [
  { name: "Java", level: 90, category: "languages"},
  { name: "JavaScript", level: 95, category: "languages"}, 
  { name: "TypeScript", level: 95, category: "languages"},
  { name: "Python", level: 80, category: "languages" },

  { name: "React", level: 85, category: "frontend"},
  { name: "HTML", level: 95, category: "frontend"},
  { name: "CSS", level: 95, category: "frontend"},
  { name: "Tailwind CSS", level: 80, category: "frontend" },

  { name: "MongoDB", level: 80, category: "database" },
  { name: "SQL", level: 95, category: "database" },

  { name: "Selenium", level: 95, category: "testing" },
  { name: "Playwright", level: 95, category: "testing" },
  { name: "TestNG", level: 85, category: "testing" },
  { name: "Cucumber", level: 95, category: "testing" },
  { name: "Appium", level: 75, category: "testing" }, 
  
  { name: "JIRA", level: 95, category: "tools" },
  { name: "Postman", level: 75, category: "tools" },
  { name: "Jenkins", level: 95, category: "tools" },
  { name: "Git", level: 90, category: "tools" }
];

const categories = ["all", "languages", "frontend", "database", "testing", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(skill => 
    activeCategory === "all" || skill.category === activeCategory
  )

  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="h-screen flex items-center"
    > 
      <ScrollArea className="w-full h-[680px]">
          <section
              id="skills"
              className="py-24 px-24 relative border-secondary/30"
            >
              <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl h2 mb-12 text-center">
                  My <span className="text-accent">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {categories.map((category, index) => (
                    <button key={index}
                          onClick={() => setActiveCategory(category)}
                          className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer text-white",
                            activeCategory === category ? "bg-accent" : ""
                          )}
                    > 
                      {category}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => {
                      return (
                        <div key={index} className="bg-tertiary p-6 rounded-lg cursor-pointer hover:bg-tertiary-hover">
                          <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                          </div>
                          <div className="w-full bg-secondary/70 h-2 rounded-full overflow-hidden">
                            <div className="bg-accent h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{width: `${skill.level}%`}}
                            />
                          </div>
                          <div className="text-right mt-1">
                            <span className="text-sm">{skill.level}%</span>
                          </div>
                        </div>
                      )
                    })}
                </div>
              </div>
            </section>
      </ScrollArea>
    </motion.section>
  )
}

export default Skills