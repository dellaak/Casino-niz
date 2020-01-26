import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss"




const MonthCasino = (props) => {

    const month = 'Turbico'

    return (<div className="month-wrap">
        <NavLink
            to={{ pathname: `/recension/${month}`, match: `${month}` }} >
            <div className="this-month-div">
                <img src="/images/turbicologo.svg" alt="turbico-logo" />
                <p className="recommend-text-top">Månadens doldis </p>
            </div>
        </NavLink>

        <NavLink
            to={{ pathname: '/minsta-insattning-casino' }} >
            <div className="latest-art-div">
                <p className="recommend-text-top">Filtrerad lista </p>
            </div>
        </NavLink>
    </div>
    );

}
export default MonthCasino;
