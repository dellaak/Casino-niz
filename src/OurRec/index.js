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



const OurRec = () => {
  return (
    <StyledWrapper>

      <Link
        to={{ pathname: `/5-basta-casinon-2020` }}>
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
