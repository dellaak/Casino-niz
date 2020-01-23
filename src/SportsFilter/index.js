import React from "react";

import { Button } from "reactstrap";
import cash from "../images/cash.svg"
import star from "../images/star.svg"



const SportsFilter = (props) => {

    return (
        <div className="oui">
            <div>
                <h2 className="filter-title">
                    Filtrera casinobonusar genom att klicka på knapparna nedanför
          </h2>
            </div>
            <div className="filter-box">
                <Button
                    onClick={props.wager}
                    className={
                        props.activebuttonwager ? "active1" : "filter-buttons "
                    }
                >
                    <img src={star} className="svg-icon-star" alt="star-icon" />
                    Lägst omsättningskrav
          </Button>
                <Button
                    onClick={props.deposit}
                    className={
                        props.activebuttondep ? "active1" : "filter-buttons "
                    }
                >
                    <img src={cash} className="svg-icon" alt="cash-icon" />
                    Högst Insättningsbonus
          </Button>

            </div>
            <div className="clear-filter">
                <Button
                    onClick={props.reset}
                    className="filter-buttons-clear "
                >
                    Rensa filtrering
          </Button>
            </div>
        </div>
    );
}


export default SportsFilter;
