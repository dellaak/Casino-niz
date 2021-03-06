import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const OurRec = () => {
  return (
    <div className="ourrec-wrap">
      <Link to={{ pathname: `/nya-slots-2021` }}>
        <div className="ourrec-box">
          <div className="ourrec-overlay">
            <h2>Nya Slots 2021.</h2>
            <p>Lista på nya slots 2021. Uppdateras med jämna mellanrum!</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OurRec;
