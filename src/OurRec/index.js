import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
  /* background: linear-gradient(45deg, #02284f 0%, #02284f 50%, transparent 50%) */
  @media (max-width: 450px) {
    margin-bottom: 80px;
  }
`;
const MonthBox = styled.div`
border-radius: 10px;
  width:500px;
  height: 300px;
  border: 1px solid black;
  position: relative;
  background-color:#214467;
  background-image: url('/images/top5.png');
  background-size: 100% 100%;
  box-shadow: 6px 10px 13px 0px rgba(0, 0, 0, 0.51);

  @media (max-width: 450px) {
    width: 300px;
  }
`;

const StyledH5 = styled.h5`
  background-color: #fed100;
  width: 60%;
  text-align: center;
  padding: 5px;
  color: black;
  font-family: "Manjari", sans-serif;
  position: absolute;
  top: -26px;
  left: -1px;
  border-radius: 5%;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style:normal;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 450px) {
    width: 80%;
  }
`;

const StyledOverlay = styled.div`
  border-radius: 0 0 30px 30px;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: auto;
  background-color: rgba(0, 0, 0, 0.8) !important;
  color: white;
  padding: 10px;
  left:-1px;
  font-family: "Manjari", sans-serif;
  font-weight: bold;
  text-align:left;
  box-shadow: 6px 10px 13px 0px rgba(0,0,0,0.51);

  h2{
    font-size:18px;
  }

  p{font-size:12px;
  padding:0;}
`;

const StyledPara = styled.p`
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
`;

// const MonthNew = styled.div`
//   width: 400px;;
//   height: 150px;
//   border: 1px solid black;
//   position: relative;
//   background-image: url(${monthnewimg});
//   background-size: cover;
//   box-shadow: 6px 10px 13px 0px rgba(0,0,0,0.51);
//   `

const OurRec = () => {
  return (
    <StyledWrapper>
      {/* <Link target="_blank"
              rel="noopener noreferrer nofollow " to={{pathname: "/Redirect", search: `${'Frankfred'}` }} >
    <MonthNew>
        <StyledH5>Månadens nykomling</StyledH5>
        <StyledPara>18+ | Regler&Villkor Gäller</StyledPara>
        <StyledOverlay>
        Tre olika välkomstbonusar på din första insättning. Välj mellan 25%, 50% och 100%
        </StyledOverlay>
      </MonthNew>
      </Link> */}

      <Link
        to={{ pathname: `/5-bästa-casinon-2020` }}>
        <MonthBox>
          <StyledOverlay>
            <h2>Fem bästa casinon att hålla koll på 2020.</h2>
            <p>Lista på fem casinon som sticker ut lite extra.</p>
          </StyledOverlay>
        </MonthBox>
      </Link>
    </StyledWrapper>
  );
};

export default OurRec;
