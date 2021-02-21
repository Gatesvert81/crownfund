import React from 'react';
import Popup from 'reactjs-popup';
import '../Styles/Popuppcomp.css'
import Button from './Button'
import close1 from '../images/icon-close-modal.svg';

export default ({btnStyle, children, btnName, onClick, position}) => (
  <Popup
    trigger={<Button className="button" btnStyle={btnStyle} onClick={onClick} > {btnName}  </Button>}
    closeOnDocumentClick
  >
    {close => (
      <div className="modal">
        <div className="close" >
          <Button  onClick={close} btnStyle="btn-nav" >
            <img src={close1} alt="close" />
          </Button >
        </div>
        <div className="content">
          {children}
        </div>
        
      </div>
    )}
  </Popup>
)