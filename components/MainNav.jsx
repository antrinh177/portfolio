import React from 'react'
import NavLinks from './NavLinks'
import Logo from './Logo'
import { MdFileDownload } from 'react-icons/md'

const MainNav = () => {
  return (
    <nav className="w-full pt-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6" />
        <button className="btn btn-lg btn-tertiary mb-16">
          <a 
            className="flex items-center gap-3"
            href="/assets/AnTrinh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span>Download CV</span>
            <MdFileDownload className="text-xl" />
          </a>
        </button>
      </div>
      
    </nav>
  )
}

export default MainNav