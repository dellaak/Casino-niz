import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Button, Collapse } from "reactstrap"
import Casinon from "../../Casinon/index"

const NewSlotComp = (props) => {

    const [casinoSize, setCasinoSize] = useState(2)
    const [isOpen, setIsOpen] = useState(false)
    const [casinos, setCasinon] = useState([])
    useEffect(() => {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        let list = props.casino
        let casinoArr = []

        list.filter(i => {
            i.title = i.title.toLowerCase()
            if (props.slot.casinos.includes(i.title)) {
                casinoArr.push(i)
            }

            return list
        })


        return setCasinon(casinoArr)

    }, [])

    const StyledDiv = styled.div`
    border-bottom:5px solid lightgrey;
    display:flex;
    border-radius:9px;
    flex-direction: column;
    margin-bottom: 40px ;
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    h2 {
    margin-top: 30px;
    }



    .slot-img{    
        max-width:100%;
        width:600px;
        height:auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin:0 auto;
    }

   .slot-review{
        padding:10px;
        border-top:1px solid lightgrey;
        p{
            font-size:16px;
        }

        h6{
            font-size:22px;
            text-align:center;
        }
    }

    ul{
        padding-top:10px;}
    `

    const StyledSlotButton = styled(Button)`
height: auto;
min-height:50px;
background-color: ${props => props.coming ? '#F0FFFF' : '#fed100'} !important;
 padding:10px;
  text-align: center;
  font-size: 20px;
  margin-bottom:20px !important;
  width: 100% ;
  max-width: 1000px;
  color: black !important;
  margin: 0 auto;
  align-self: center;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  border: 1px solid black;
`

    const StyledCloseButton = styled(Button)`
height: auto;
min-height:30px;
background-color: #ffc10736 !important;
 padding:10px;
  text-align: center;
  font-size: 20px;
  margin:20px !important;
  width: 100% ;
  max-width: 1000px;
  color: black !important;
  margin: 0 auto;
  align-self: center;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  border: 1px solid black;
`

    const StyledButton = styled(Button)`
  height: 50px;
  text-align: center;
  background-color: #fed100 !important;
  font-size: 20px;
  width: 100%;
  max-width: 500px;
  color: black !important;
  margin: 0 auto;
  align-self: center;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  border: 1px solid black;
`



    return (
        <React.Fragment>
            <StyledSlotButton coming={props.slot.coming ? 1 : undefined} onClick={() => { setIsOpen(!isOpen) }} > {props.slot.name} - {props.slot.extratitle}

            </StyledSlotButton>
            <Collapse isOpen={isOpen} >
                <StyledDiv >
                    <h2>{props.slot.name}</h2>
                    <img className="slot-img" src={props.slot.img} alt={props.slot.name} />
                    <ul>
                        <li>RTP: <b>{props.slot.rtp} %</b></li>
                        <li>Max-vinst(mynt): <b>{props.slot.maxwin.toLocaleString()}</b></li>
                        <li>Vinstlinjer:<b>{props.slot.winlines.toLocaleString()}</b></li>
                    </ul>
                    <div className="slot-review">
                        <p>{props.slot.firstp} </p>
                        {props.slot.listtitle ? `${props.slot.listtitle}` : ''}

                        <ul>
                            {props.slot.list ?
                                props.slot.boldlist.map((i, k) => {

                                    let b = props.slot.list[k]
                                    return (<li key={i}>
                                        <b>{i}</b> - {b}
                                    </li>)
                                }) : ''}
                        </ul>

                        {props.slot.secondp ? <p>{props.slot.secondp}</p> : ''}

                        <h4>{props.slot.name} Bonus</h4>
                        <p>{props.slot.bonustext} </p>
                        <ul>
                            {props.slot.bonuslist ?
                                props.slot.bonuslistbold.map((i, k) => {

                                    let c = props.slot.bonuslist[k]
                                    return (<li key={i}>
                                        <b>{i}</b> - {c}
                                    </li>)
                                }) : ''}
                        </ul>

                        {props.slot.bonustext2 ? <p>{props.slot.bonustext2}</p> : ''}

                        {props.slot.coming ? <h6>Några svenska casinon där du kommer kunna spela {props.slot.name}</h6> : <h6>Några svenska casinon där du kan spela {props.slot.name}</h6>}
                    </div>
                    <div className="casino-wrap">
                        {casinos.slice(0, casinoSize).map((casino) =>
                            < Casinon
                                key={casino.id + casino.title}
                                casino={casino}
                                isBlocked={props.isBlocked}
                            />)}
                    </div>

                    {casinoSize >= casinos.length ? (
                        <div className="no-more-bonuses">
                            <StyledButton
                                className="show-less-btn"
                                onClick={() => { setCasinoSize(2); }}
                            >
                                Finns inte fler casinon att visa  {" "}
                            </StyledButton>
                        </div>
                    ) : (

                            <div className="morebonus-box">
                                <StyledButton
                                    className="button-recension blink"
                                    onClick={() => { setCasinoSize((casinoSize) + 5) }}
                                >
                                    Ladda fler casinon{" "}
                                </StyledButton>
                            </div>
                        )}

                    <StyledCloseButton onClick={() => { setIsOpen(!isOpen); }} > Stäng {props.slot.name}

                    </StyledCloseButton>
                </StyledDiv>
            </Collapse></React.Fragment>)
}


export default NewSlotComp