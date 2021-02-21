import React from 'react'
import Card from "./Card";
import Button from './Button'
import '../Styles/Reward.css'
import Popupcomp from './Popupcomp';
import Pledge from './Pledge';

function Reward({
    btnStyle,
    rewardText,
    pledgeText,
    children,
    leftText,
    btnText }) {
    return (
        <div>
            <Card>
                <div className="reward" >
                    <div className="reward-title"> 
                        <h3>
                            {rewardText}
                        </h3>
                    </div>
                    <div className="pledge-text">
                        <h4>
                            {pledgeText}
                        </h4>
                    </div>
                    <div className="description">
                        <span>
                            {children}
                        </span>
                    </div>
                    <div className="left">
                        <span>
                            {leftText}  
                        </span> left
                </div>
                    <div className="btn">
                        <Popupcomp btnStyle={btnStyle} btnName={btnText} >
                            <Pledge />
                        </Popupcomp>
                    </div>
                </div>

            </Card>
        </div>
    )
}

export default Reward
