import styled from "styled-components";
import CountUp from 'react-countup';


export const StyledDiv = styled.div`

  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  max-width: 500px;
  margin-bottom:50px;
`;

export const StyledFreeText = styled.p`
  font-size: 14px;
  margin:15px;
`;


export const StyledCountUp = styled(CountUp)`
  font-size:18px;
  font-style:italic;
`;

export const StyledBox = styled.div`
    padding: 0 30px;
    width: 100%;
    border: 1px solid #fed100;
    margin: 10px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: space-between;
   border:1px solid #fed100;
   margin:10px;
   display:flex;
   align-items:center;
`;

export const StyledCount = styled.div`

border-radius: 10px;
    background-color: #032a52e0;
    color: #fed100;

  font-size: 16px;
  font-family: "Manjari", sans-serif;
  text-transform: uppercase;
  -webkit-letter-spacing: 0.1em;
  -moz-letter-spacing: 0.1em;
  -ms-letter-spacing: 0.1em;
  letter-spacing: 0.1em;
  font-style: normal;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
