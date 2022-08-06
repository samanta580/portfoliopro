import React from "react";
import './SCreenHeader.css'

export const ScreenHeader = (probs) => {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>{probs.title}</span>
      </div>
      {probs.subHeading ? (
        <div className="screen-sub-heading">
          <span>{probs.subHeading}</span>
        </div>
      ) : null}


      <div className="heading-seprator">
        <div className="seprator-line">
          <div className="seprator-blob">
            <div></div>
          </div>
        </div>
      </div>
    
    </div>
  );
};
