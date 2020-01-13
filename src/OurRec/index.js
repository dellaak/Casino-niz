import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"







const OurRec = () => {
  return (
    <div className="ourrec-wrap">

      <Link
        to={{ pathname: `/5-basta-casinon-2020` }}>
        <div className="ourrec-box">
          <div className="ourrec-overlay">
            <h2>Fem bästa casinon att hålla koll på 2020.</h2>
            <p>Lista på fem casinon som sticker ut lite extra.</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OurRec;
