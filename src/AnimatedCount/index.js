import React, { useState, useEffect } from "react";
import { StyledDiv, StyledCount, StyledFreeText, StyledBox, StyledCountUp } from "./StyledAnimated";


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
            <StyledCount>
                <StyledBox>
                    <StyledFreeText>Antal freespins</StyledFreeText>
                    <StyledCountUp duration={2} end={count.freespins} />
                </StyledBox>
                <StyledBox>
                    <StyledFreeText>Omsättningsfria bonusar</StyledFreeText>
                    <StyledCountUp duration={2} end={count.wagerFree} />
                </StyledBox>
                <StyledBox>
                    <StyledFreeText>Högsta insättningsbonus</StyledFreeText>
                    <StyledCountUp duration={2} end={count.deposit}
                        suffix="%"
                    />
                </StyledBox>
            </StyledCount>

        </React.Fragment>
    );

}

export default AnimatedCount;
