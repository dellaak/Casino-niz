import React, { useState, useEffect } from "react";
import "./style.scss"
import CountUp from 'react-countup';
import styled from "styled-components";



const StyledCountUp = styled(CountUp)`
  font-size:18px;
  font-style:italic;
`;


const AnimatedCount = (props) => {
    const [count, setCounter] = useState({
        freespins: 0,
        wagerFree: 0,
        deposit: 0
    })
    const [casinoList] = useState(props.list)


    useEffect(() => {
        let isCancelled = false;
        const counter = () => {
            const timer = setTimeout(() => {
                let freespins = 0;
                let num = 0;
                let depositarr = []
                for (let i of casinoList) {
                    if (i.freespins > 0) {
                        freespins += parseInt(i.freespins)
                    }
                    if (i.freefromwager === true) {
                        num++
                    }
                    if (i.depositpercent > 100) {
                        depositarr.push(i.depositpercent)
                    }
                }

                depositarr.sort(function (a, b) {
                    return b - a;
                });

                depositarr = depositarr.slice(0, 1)
                depositarr = parseInt(depositarr)
                if (!isCancelled) {
                    setCounter({ freespins: freespins, wagerFree: num, deposit: depositarr })
                }



            }, 1000);
            return timer;

        }
        counter()
        return () => {
            isCancelled = true;
        };

    }, [casinoList])






    return (
        <React.Fragment>
            <div className="counter-wrap">
                <div className="counter-box">
                    <p>Antal freespins</p>
                    <StyledCountUp duration={2} end={count.freespins} />
                </div>
                <div className="counter-box">
                    <p>Omsättningsfria bonusar</p>
                    <StyledCountUp duration={2} end={count.wagerFree} />
                </div>
                <div className="counter-box">
                    <p>Högsta insättningsbonus</p>
                    <StyledCountUp duration={2} end={count.deposit}
                        suffix="%"
                    />
                </div>
            </div>

        </React.Fragment>
    );

}

export default AnimatedCount;
