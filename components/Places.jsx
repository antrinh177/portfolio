"use client"
import Image from 'next/image';
// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';
//import swiper required modules
import {Autoplay} from 'swiper/modules';
// import swiper styles
import 'swiper/css';
import "swiper/css/pagination";

// data
const places = [
  {
    name: "Da Lat, Vietnam",
    year: 2018,
    image: "/assets/places/dalat.png"
  },
  {
    name: "Bangkok, Thailand",
    year: 2018,
    image: "/assets/places/bangkok.png"
  },
  {
    name: "Da Nang, Vietnam",
    year: 2019,
    image: "/assets/places/danang.png"
  },
  {
    name: "Vung Tau, Vietnam",
    year: 2020,
    image: "/assets/places/vungtau.png"
  },
  {
    name: "Phu Quoc, Vietnam",
    year: 2023,
    image: "/assets/places/phuquoc.png"
  },
  {
    name: "Ha Noi, Vietnam",
    year: 2023,
    image: "/assets/places/hanoi.png"
  },
  {
    name: "Sa Pa, Vietnam",
    year: 2023,
    image: "/assets/places/sapa.png"
  },
  {
    name: "Toronto, Canada",
    year: 2024,
    image: "/assets/places/toronto.png"
  },
  {
    name: "Quebec, Canada",
    year: 2024,
    image: "/assets/places/quebec.png"
  }
]

const Places = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{delay: 4000, disableOnInteraction: false}}
      className="md:w-full w-[200px] max-w-[250px] max-h-[400px] rounded-lg"
    >
      {places.map((place, index) => {
        return <SwiperSlide key={index}>
                  <div className="w-[200px] h-[250px] md:w-[250px] md:h-[300px] relative">
                    <Image 
                      src={place.image}
                      alt=""
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="flex items-center justify-center text-white/70">
                    {place.name}
                  </p>
                  <p className="flex items-center justify-center text-white/50">
                    {place.year}
                  </p>
                </SwiperSlide>
      })}
    </Swiper>
  )
}

export default Places