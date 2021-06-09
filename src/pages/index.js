import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Features from '../components/Features'
import {Leaderboard} from '../components/Leaderboard'
import Testimonials from '../components/Impact'
import Demo from '../components/FAQs'
import Contact from '../components/Contact'
import DonationMatch from '../components/DonationMatch'
import CardSection from '../components/CardSection'
import SearchSection from '../components/SearchSection';
import Blog from '../components/Blog'
const Home = () => {
   
    return (
       <>
       <HeroSection />
       <About />
       <Features />
       <Leaderboard />
       <Testimonials />
       <Demo />
       <Contact />
       <DonationMatch />
       <SearchSection/>
       <CardSection/>
       <Blog/>
       </>
    )
}

export default Home