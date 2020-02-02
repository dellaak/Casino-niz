import React from "react"
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import "./style.scss"

const CalcSearch = (props) => {

    const handleFocus = (event) => event.target.select();


    return (
        <div className="calc-box">
            <p>Beräkna din bonus och omsättningskravet!</p>
            <InputGroup>
                <Input type="text"
                    placeholder="Skriv in belopp"
                    onChange={props.calculateBonus}
                    value={props.value}
                    onFocus={handleFocus} />
                <InputGroupAddon addonType="append">
                    <InputGroupText className="addon">KR</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}


export default CalcSearch