import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import Card from './Card'
import '../Styles/Dashboard.css'
import { PledgeContext, PledgeDonorsContext } from './PledgeProvider';
import { db } from "../Services/firebase"

function Dashboard() {
    // Set States for PledgeAMount Number of Donors and Days Left
    const [newTotalPledgeAmount, setNewTotalPledgeAmount] = useState(0)
    const [donorNumber, setDonorNumber] = useState(0)
    const [Day, setDay] = useState('00');

    // Grabing data from PledgeContext and PledgeDonorContext
    const [state, setState] = useContext(PledgeContext)
    const [donor, setDonor] = useContext(PledgeDonorsContext)

    // Function for making PriceCard
    const priceCard = (title, text) => {
        return (
            <div className="cash" >
                <h3>
                    {title}
                </h3>
                <p>
                    {text}
                </p>
            </div>
        )
    }




    let interval = useRef()

    // Creating CountDown for Number of Days
    const countdownTime = () => {
        const countdownDate = new Date('May 27, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const day = Math.floor(distance / (1000 * 60 * 60 * 24));

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setDay(day);
            }
        }, 1000);

    };

    const progress = () => {
        let progressWidth = (newTotalPledgeAmount * 100) / 100000
        return progressWidth
    }


    // Using UseEffect to manage DOM 

    useEffect(() => {
        setNewTotalPledgeAmount(state)
        setDonorNumber(donor)
        countdownTime()
        progress()
        return () => {
            clearInterval(interval.current);
        }
    }, [state, donor])


    useEffect(() => {
        if (newTotalPledgeAmount !== 0 && donorNumber !== 0) {
            const updateDb = async () => {
                await db.collection("PledgeData").doc("LWKP3XHvYQzG8ULWtzAd").update({
                    PledgeAmount: newTotalPledgeAmount,
                    PledgeDonors: donorNumber
                });
            }
            updateDb()
        } else {
            return null
        }

        // updateDb()
    }, [newTotalPledgeAmount, donorNumber])




    return (
        <Card>
            <div className="dashboard">
                <div className="dashboard-details">
                    <div className="pledge-amount">
                        {priceCard(` $${newTotalPledgeAmount}`, 'of $100,000 backed')}
                        <hr className="line" />
                    </div>
                    <div className="donors" >
                        {priceCard(donorNumber, 'total backers')}
                        <hr className="line" />
                    </div>
                    <div className="days-left" >
                        {priceCard(Day, 'days left')}
                    </div>
                </div>
            </div>
            <div className="my-progress" style={{ width: '100%', background: 'hsla(0, 17%, 88%, 0.873)', border: '1px hidden', borderRadius: '15px', overflow: 'hidden' }}>
                <div className="my-bar" style={{ width: `${progress()}%`, background: 'hsl(163deg 55% 41%)', height: '12px', border: '1px hidden', borderRadius: '15px' }} >

                </div>
            </div>
        </Card>
    )
}

export default Dashboard
