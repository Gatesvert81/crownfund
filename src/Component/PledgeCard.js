import React, { useContext, useState } from 'react'
import Popup from 'reactjs-popup'
import Card from './Card'
import HomeCard from './HomeCard'
import '../Styles/PledgeCard.css'
import Popupcomp from './Popupcomp'
import Button from './Button'
import check from '../images/icon-check.svg'
import { PledgeContext, PledgeDonorsContext, ShowInputContext } from './PledgeProvider'

function PledgeCard({
    onclick,
    head,
    amount,
    children,
    remain
}) {

    const [change, setChange] = useState('')
    const [open, setOpen] = useState(false)


    const [state, setState] = useContext(PledgeContext)
    const [donor, setDonor] = useContext(PledgeDonorsContext)
    const [show, setShow] = useContext(ShowInputContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (change < amount) {
            alert(`Please donate $${amount} or more`)
        } else {
            setDonor(donor + 1)
            setState(state + parseInt(change))
            console.log(`I am from PledgeCard ${state}`)
            setOpen(true)
        }
    }

    const closeModal = () => setOpen(false)

    const amountCheck = (amount) => {
        if (amount == 0) {
            return null
        } else {
            return (
                <p>
                    Pledge ${amount} or more
                </p>
            )

        }
    }



    return (
        // <Button btnStyle="btn-pledgecard" >
        <Card>
            <div className="pledge-card" >
                <div className="card-show">
                    <div className="pledgecard-title" >
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" className="checkb" />
                            </label>
                        </div>
                        <div className="title-detail">
                            <h3>{head}</h3>
                            {amountCheck(amount)}
                        </div>
                    </div>
                    <p>
                        {children}bvhkh
                    </p>
                    <span>
                        {remain} left
                    </span>
                </div>
                <hr/>
                <div className="pledge-hide">
                    <div className="title" >
                        Enter Your pledge
                    </div>
                    <div className="pledge">
                        <div className="label">
                            <h4>$</h4>
                            <label>
                                <input type="number" placeholder={amount} min="2" value={change} onChange={(e) => setChange(e.target.value)} />
                            </label>
                        </div>
                        <Button btnStyle="btn-default" onClick={handleSubmit} >
                            Continue
                        </Button>
                        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                            <div className="thank-card">
                                <Card>
                                    <div className="check" >
                                        <img src={check} alt="check" />
                                    </div>
                                    <div className="thank-title" >
                                        <h3> Thanks for your support ! </h3>
                                    </div>
                                    <div className="thank-description" >
                                        <span>
                                            Your pledge of ${change} brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                                            an email once our campaign is completed.
                                        </span>
                                    </div>
                                    <div>
                                        <Button onClick={closeModal} btnStyle="btn-default" >
                                            Got it!
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </Popup>
                    </div>
                </div>

            </div>
        </Card>
        // </Button>
    )
}

export default PledgeCard
