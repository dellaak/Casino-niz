
import React, { useEffect, useRef } from "react";
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

  @media (max-width: 800px) {
      right:3px;
      bottom:104px;
      border-radius:0;
      z-index:1;
  }
`

const TopButton = () => {



    let myButton = useRef();

    useEffect(() => {

        window.addEventListener('scroll', scrollFunction);

        myButton.current = document.getElementById("myBtn")

    });

    const scrollFunction = () => {

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myButton.current.style.display = "block";
        } else {
            myButton.current.style.display = "none";
        }
    }


    window.addEventListener('scroll', scrollFunction);



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
