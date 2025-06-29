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
const books = [
  {
    name: "Harry Potter",
    author: "J.K.Rowling",
    image: "/assets/books/harrypotter.png"
  },
  {
    name: "Game of Thrones",
    author: "George R. R. Martin",
    image: "/assets/books/gameofthrones.png"
  },
  {
    name: "Anne of Green Gables",
    author: "Lucy Maud Montgomery",
    image: "/assets/books/anne.png"
  },
  {
    name: "The Hunger Games",
    author: "Suzanne Collins",
    image: "/assets/books/thehungergames.png"
  },
  {
    name: "The Kite Runner",
    author: "Khaled Hosseini",
    image: "/assets/books/kiterunner.png"
  },
  {
    name: "Little Women",
    author: "Louisa May Alcott",
    image: "/assets/books/littlewomen.png"
  },
  {
    name: "Ke Di Tru Di Tim Chat Xam",
    author: "Nguyen Phuoc Thao",
    image: "/assets/books/keditru.png"
  }
]

const Books = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{delay: 4000, disableOnInteraction: false}}
      className="md:w-full w-[200px] max-w-[250px] max-h-[400px] rounded-lg"
    >
      {books.map((book, index) => {
        return <SwiperSlide key={index}>
                  <div className="w-[200px] h-[250px] md:w-[250px] md:h-[300px] relative">
                    <Image 
                      src={book.image}
                      alt=""
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="flex items-center justify-center text-white/70">
                    {book.name}
                  </p>
                  <p className="flex items-center justify-center text-white/50">
                    {book.author}
                  </p>
                </SwiperSlide>
      })}
    </Swiper>
  )
}

export default Books