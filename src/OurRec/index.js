import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"







const OurRec = () => {
  return (
    <div className="ourrec-wrap">

      <Link
        to={{ pathname: `/nya-casino-2020` }}>
        <div className="ourrec-box">
          <div className="ourrec-overlay">
            <h2>Nya Casino 2020.</h2>
            <p>Lista på nya casino 2020 som vi kontinuerligt uppdaterar.</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OurRec;
