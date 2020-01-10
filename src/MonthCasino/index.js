import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components"
import "./style.scss"




const MonthCasino = (props) => {
    let list = props.list
    const month = 'Turbico'
    const [monthImage, setImage] = useState('')

    useEffect(() => {
        let myImg;

        list.filter(i => {
            if (i.title === month) {
                return myImg = i.caslogo

            }
        })

        setImage(myImg)

    })


    const StyledDiv = styled.div`
border-radius:9px;
border:1px solid lightgrey;
   width:300px;
   height:150px;
    background-image:url(${monthImage});
    background-repeat: no-repeat;
  background-size: 100% 100%;

  box-shadow: 6px 10px 13px 0px rgba(0, 0, 0, 0.51);
position:relative;
`





    return (<div>

        <StyledDiv >

            <p className="recommend-text-top">Månadens rekommendatin</p>
        </StyledDiv>


    </div>
    );

}
export default MonthCasino;
