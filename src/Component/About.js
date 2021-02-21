import React from 'react'
import Card from './Card'
import '../Styles/About.css'
import Reward from './Reward'

function About() {
   
    return (
        <div >
            <Card>
                <div className="about" >
                <h3>
                    About this project
                </h3>
                <p>
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                </p>
                <p>
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                    to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>
            </div>
            <div className="reward-cards" >
                <Reward rewardText="Bamboo Stand" 
                pledgeText="Pledge $25 or more"
                leftText="101"
                btnStyle="btn-default1" 
                btnText="Select Reward" >
                You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                you’ll be added to a special Backer member list.
                </Reward>
                <Reward rewardText="Black Edition Stand"
                pledgeText="Pledge $75 or more"
                leftText="64"
                btnStyle="btn-default1"
                btnText="Select Reward" >
                You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                member list. Shipping is included.
                </Reward>
                <Reward rewardText="Mahogany Special Edition"
                pledgeText="Pledge $200 or more"
                leftText="0"
                btnStyle="btn-inactive" btnText="Out of stock" >
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                to our Backer member list. Shipping is included.
                </Reward>
            </div>

            </Card>
        </div>
    )
}

export default About
