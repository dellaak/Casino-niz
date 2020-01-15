import React, { useState } from "react"
import { Collapse, Button } from "reactstrap"
import SnabbFakta from "../../Snabbfakta"
import styled from "styled-components";

import "./style.scss"




const StyledSpan = styled.span`
display: inline-block;
height: 24px;
line-height: 24px;
width: 24px;
transition: all 0.3s ease-out;
transform: ${props => (props.rotate ? `rotate(180deg)` : "")};
svg{
display: block;
height: 100%;
width: 100%;
}
`



const StyledCollapse = styled(Collapse)`
overflow:hidden !important;
`

const SpanTitle = styled.span`
text-transform: capitalize;
`

const SnabbfaktaMin = (props) => {
    const [snabbFakta, setSnabbFakta] = useState(false);

    const qToggle = () => {
        setSnabbFakta(!snabbFakta)

    }
    return (<React.Fragment>


        <Button onClick={qToggle} xs="6" className="question-head-preview col-sm" ><SpanTitle >Snabbfakta om {props.casino.title}</SpanTitle> <StyledSpan rotate={snabbFakta ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="grey"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

        <StyledCollapse isOpen={snabbFakta} >

            <SnabbFakta className="msg-preview" xs="6" casino={props.casino} isBlocked={props.isBlocked} />
        </StyledCollapse>
    </React.Fragment>)

}

export default SnabbfaktaMin;

