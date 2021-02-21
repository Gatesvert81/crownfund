import React from 'react';
import '../Styles/HomeCard.css';
import Card from "./Card";
import Button from './Button';
import bamboo from '../images/logo-mastercraft.svg'
import bookmark from '../images/icon-bookmark.svg';
import Popupcomp from './Popupcomp';
import Pledge from './Pledge';

function HomeCard() {
    return (
        <Card >
            <div className="home-card" > 
                <div className="logo">
                    <img src={bamboo} alt="Bamboo" />
                </div>
                <div className="title">
                    <h3> Mastercraft Bamboo Monitor Riser </h3>
                </div>
                <div className="detail">
                    <span> A beautiful & handcrafted monitor stand to reduce neck and eye strain. </span>
                </div>
                <div className="btn-section" >
                    <Popupcomp btnName="Back this Project" btnStyle="btn-default" >
                        <Pledge />
                    </Popupcomp>
                    <Button btnStyle="btn-bookmark" className="bookmark" >
                        <img src={bookmark} alt="bookmark" />
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default HomeCard
