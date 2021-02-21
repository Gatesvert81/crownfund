import React, { useCallback, useContext, useEffect, useState } from 'react'
import Card from './Card'
import '../Styles/Pledge.css'
import PledgeCard from './PledgeCard'
import { OpenInputContext, ShowInputContext } from './PledgeProvider'

function Pledge() {
    

    return (
        <div className="pledge-bg" >
            <Card>
                <div className="pledge">
                    <div className="pledge-title">
                        <h3>
                            Back this project
                        </h3>
                        <p>
                        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                        </p>
                    </div>
                    <div className="pledgecard-section" >
                        {/* <label> */}
                            <PledgeCard head="Pledge with no reward" amount="0"  >
                            Choose to support us without a reward if you simply believe in our project. As a backer, 
                            you will be signed up to receive product updates via email.
                            </PledgeCard>
                            <PledgeCard head="Bamboo Stand"
                            amount="25"
                            remain="101" 
                            >
                            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                            you’ll be added to a special Backer member list.
                            </PledgeCard>
                            <PledgeCard head="Black Edition Stand"
                            amount="75"
                            remain="64" 
                            >
                            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                            member list. Shipping is included.
                            </PledgeCard>
                            <PledgeCard head="Mahogany Special Edition"
                            amount="200"
                            remain="0"  
                            >
                            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                            to our Backer member list. Shipping is included.
                            </PledgeCard>
                        {/* </label> */}
                        
                        
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Pledge
