import React, { useContext, useState, useEffect } from 'react'
import {db}  from "../Services/firebase";

export const PledgeContext = React.createContext([{}, () => {}])
export const PledgeDonorsContext = React.createContext([{}, () => {}])
export const OpenInputContext = React.createContext([{}, () => {}])
export const ShowInputContext = React.createContext([{}, () => {}])




function PledgeProvider({children}) {
    
   
    const [ state, setState ] = useState(0)
    const [ donor, setDonor ] = useState(0)
    const [index, setIndex] = useState(null)
    const [show, setShow] = useState(false)
    

    useEffect(()=>{
        const hospitals = []
        const fetchData = async () => {
            await db.collection('PledgeData').get()
            .then(snapshot => {
                snapshot.docs.forEach(hospital => {
                    let currentID = hospital.id
                    let appObj = { ...hospital.data(), ['id']: currentID }
                    hospitals.push(appObj)

                    
                    setDonor(hospitals[0].PledgeDonors)
                    setState(hospitals[0].PledgeAmount)
            })
        })
        }
        fetchData()
    },[])

    return (
        <PledgeContext.Provider value={[state, setState]} >
            <PledgeDonorsContext.Provider value={[donor, setDonor]} >
                
                    {children}
                    
            </PledgeDonorsContext.Provider>
        </PledgeContext.Provider>
    )
}

export default PledgeProvider
