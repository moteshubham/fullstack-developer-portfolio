import React from 'react'
import './testimonials.css'
// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, doloribus? At iste dolore ducimus quam, explicabo aspernatur dicta fuga sint! Culpa, adipisci. Minima at sed, minus voluptates aut vero quidem!'
  },
  {
    avatar: AVTR2,
    name: 'Diablo',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, doloribus? At iste dolore ducimus quam, explicabo aspernatur dicta fuga sint! Culpa, adipisci. Minima at sed, minus voluptates aut vero quidem!'
  },
  {
    avatar: AVTR3,
    name: 'Guy',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, doloribus? At iste dolore ducimus quam, explicabo aspernatur dicta fuga sint! Culpa, adipisci. Minima at sed, minus voluptates aut vero quidem!'
  },
  {
    avatar: AVTR4,
    name: 'Rimuru',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, doloribus? At iste dolore ducimus quam, explicabo aspernatur dicta fuga sint! Culpa, adipisci. Minima at sed, minus voluptates aut vero quidem!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true}}
        >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />            
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials