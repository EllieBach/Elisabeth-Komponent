import React from 'react';
import riceball from "./../../assets/onigiri.svg";
import "./BentoMenu.scss"


const handleClick = () =>{
    console.log("potato")
}
const BentoMenu = () => {
  return (
    <>
   
    <div className="bentoMenu" onClick={handleClick}>
      <div className="onigiri">
        <img src={riceball} alt="Rice Ball" />
      </div>
      <div className="onigiri">
        <img src={riceball} alt="Rice Ball" />
      </div>
      <div className="onigiri">
        <img src={riceball} alt="Rice Ball" />
      </div>
      <div className="onigiri">
        <img src={riceball} alt="Rice Ball" />
      </div>
      <div className="onigiri">
        <img src={riceball} alt="Rice Ball" />
      </div>
      <div className="onigiri">
        <img src={riceball} alt="Rice Ball" />
      </div>
      <div className="onigiri">
        <img src={riceball} alt="Rice Ball" />
      </div>
      <div className="onigiri">
        <img src={riceball} alt="Rice Ball" />
      </div>
      <div className="onigiri">
        <img src={riceball} alt="Rice Ball" />
      </div>
    </div>

    </>
  );
}

export default BentoMenu;
