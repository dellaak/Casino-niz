
import React, { useEffect } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: rgba(254, 209, 0,0.7);
  color: black;
  cursor: pointer;
  padding: 15px;
  border-radius: 50px;
`

const TopButton = () => {


    let myButton;
    window.addEventListener('scroll', scrollFunction);

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
        myButton = document.getElementById("myBtn")



    });

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myButton.style.display = "block";
        } else {
            myButton.style.display = "none";
        }
    }






    const topFunction = () => {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    }


    return (
        <div>
            <StyledButton onClick={topFunction} id="myBtn" title="Go to top">▲Top</StyledButton>

        </div>
    );

}

export default TopButton;
