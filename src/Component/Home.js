import React from 'react'
import About from './About'
import Dashboard from './Dashboard'
import '../Styles/Home.css'
import HomeCard from './HomeCard'
import PledgeProvider from './PledgeProvider'

function Home() {
    return (
        <PledgeProvider>
            <div className="home">
                <HomeCard />
                <Dashboard />
                <About />
            </div>
        </PledgeProvider> 
    )
}

export default Home
