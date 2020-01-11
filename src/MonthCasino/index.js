import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components"
import "./style.scss"




const MonthCasino = (props) => {

    const month = 'Turbico'


    const StyledDiv = styled.div`
    border-radius:9px;
    border:1px solid lightgrey;
   width:250px;
   height:150px;
   background-image:url('/images/turbicologo.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    box-shadow: 6px 10px 13px 0px rgba(0, 0, 0, 0.51);
    position:relative;
`

    const StyledLatestArt = styled.div`
    background-color:#214467;
    border-radius:9px;
    border:1px solid lightgrey;
   width:250px;
   height:150px;
   background-image:url('/images/mindep.svg');
    background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 6px 10px 13px 0px rgba(0, 0, 0, 0.51);
position:relative;
`


    const StyledStartWrap = styled.div`

@media (max-width: 830px) {
 margin:15px;
 }
`




    return (<StyledStartWrap>
        <NavLink
            to={{ pathname: `/Recension/${month}`, match: `${month}` }} >
            <StyledDiv >

                <p className="recommend-text-top">Månadens doldis </p>
            </StyledDiv>
        </NavLink>

        <NavLink
            to={{ pathname: '/minsta-insattning-casino' }} >
            <StyledLatestArt>
                <p className="recommend-text-top">Filtrerad lista </p>
            </StyledLatestArt>
        </NavLink>
    </StyledStartWrap>
    );

}
export default MonthCasino;
