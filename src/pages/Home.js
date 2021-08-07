import React from 'react'
import Email from '../Componets/Email/Email'
import Hero from '../Componets/Hero/Hero'
import Stats from '../Componets/Stats/Stats'
import Testimonials from '../Componets/Testimonials/Testimonials'
import Trips from '../Componets/Trips/Trips'

function Home() {
    return (
        <div>
            <Hero/>
            <Trips/>
            <Testimonials/>
            <Stats/>
            <Email/>
        </div>
    )
}

export default Home
