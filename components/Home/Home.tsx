"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Software from './Software/Software'
import Project from './Project/Project'
import Review from './Review/Review'
import Blog from './Blog/Blog'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Experience from './Experience/Experience';
import Skill from './Skills/skills';



const Home = () => {

  useEffect(() => {
    const initAOS = async() => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement : 'top-bottom',
      });
    };

    initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Experience/>
      <Skill />
      <Project />
      <Software />
      <Review />
      <Blog />
    </div>
  )
}

export default Home