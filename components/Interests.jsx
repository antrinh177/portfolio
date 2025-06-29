import React from 'react'
import Places from './Places'
import Books from './Books'

//icons
import {BiWorld, BiBookOpen} from 'react-icons/bi'

const Interests = () => {
  return (
    <div className="flex flex-col">
        <h2 className="h2 mb-8">
            <span className="text-accent">Interests</span>
        </h2>
        
        <div className="flex flex-col md:flex-row md:gap-13 gap-3">
                <div className="flex-1">
                    <div className="w-[280px] flex items-start gap-4">
                        <BiWorld className="text-2xl mt-1 text-accent" />
                        <h5 className="h5 mb-2 flex justify-center md:justify-start">Traveling</h5>
                    </div>
                    <Places />
                </div>

                <div className="flex-1">
                    <div className="w-[280px] flex items-start gap-4">
                        <BiBookOpen className="text-2xl mt-1 text-accent" />
                        <h5 className="h5 mb-2 flex justify-center md:justify-start">Reading</h5>
                    </div>
                    <Books />
                </div>
        </div>
    </div>
  )
}

export default Interests