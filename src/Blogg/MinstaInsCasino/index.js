import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { Container, Alert, Button,Collapse } from "reactstrap"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import sweflag from "../../images/sweflag.png"
import "./style.scss"
import { StyledNavlink } from "../../Casinon/"
import SnabbFaktaMin from "./SnabbFaktaMin"
import BottomInfoMinstaCasino from "../../AllBottomInfo/BottomInfoMinstaCasino"

const StyledDiv = styled.div`

padding: 10px 20px;
margin: 40px 0;
margin-bottom:40px ;
border: 2px solid #fed100;
background-color:white;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius:9px;
flex-direction: column;
h2 {
margin-top: 30px;
}


`

const StyledCasinoDiv = styled.div`
border-radius:9px;
display: flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;
padding-right:20px;

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
 flex-direction:column;
}
@media only screen and (min-device-width: 320px) and (orientation: portrait) {
    flex-direction:column;
}
img{
    width:120px;
    height:100px;
    
}


.mindepo-button{
background-color:#0c5ba9;
width:150px;
color:white;
font-family: "Roboto", sans-serif;
font-size:20px;
p{
    margin:0;
}
}
div{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  h3{
    font-family: "Roboto", sans-serif;
    font-size:20px;
  }

  
}
`

const StyledDivWrap = styled.div`
background-color:white;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
width:100%;
margin:10px 0 ;
border-radius:9px;
overflow:hidden;

`

const StyledCircle = styled.span`
height:50px;
width:50px;
border-radius:50%;
background-color:#214467;
position:absolute;
top:-25px;
left:-25px;
margin-bottom:5px;
color:#fed100;
text-align: center;
display: table-cell;
overflow: hidden;
vertical-align:middle;
font-size: 30px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Styledtopwrap  = styled.div`
background-color:white;
padding:20px;
`

const MinstaInsCasino = (props) => {


    const [mindepCasino, setminDepList] = useState([])
    const [visible, setVisible] = useState(true)
   

    useEffect(() => {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        let list = [...props.list.Casinon]
        let minList = []


        list.filter(i => {
            i.title = i.title.toLowerCase()
            if (i.recension[0].mindeposit < 100) {
                minList.push(i)
            }
            return list
        })

        minList.sort(function (a, b) {

            return a.recension[0].mindeposit - b.recension[0].mindeposit
        });


        return setminDepList(minList)

    }, [props.list.Casinon])

    const onDismiss = () => {
        setVisible(false)
    }


 
    


    


    return (<Container>
        <Helmet>
            <title>Minsta insättning Casino ➼ Från 10 kr! (Lista 2020) | Casinoniz</title>
            <link rel="canonical" href="https://www.casinoniz.se/minsta-insattning-casino" />
            <meta
                name="description"
                content="Minsta insättning på casino från 10 kr. Filtrerad lista på alla casinon med svensk spellicens som erbjuder minsta insättning under 100 kr."
            />
            <meta
                name="keywords"
                content="Casino, Casinobonusar, välkomstbonus, 2019,2020, minsta, instättning, insättning, 10kr, 25kr, 50kr, casino, minsta insattning, minsta insättning, esportbetting, trustly, snabba casino, kasino"
            />

        </Helmet>


        <Alert
            color="success"
            isOpen={visible}
            toggle={onDismiss}
        >
            <div className="swe-license">
                <p className="swe-lic-text">
                    Vi listar endast casinon med svensk spellicens!
            </p>
                <img alt="swe-flag" className="swe-flag" src={sweflag} />
            </div>
        </Alert>
        <h1 className="banners">Minsta insättning casino</h1>
        <Styledtopwrap>
        <small> Publicerad: 11 Januari 2020</small>
       

        <h2>Minsta insättning casino</h2>
       <p>Här listar vi endast casinon som har mindre än 100 kr i minsta insättning. Insättningar på 10, 25 samt 50 kr på casino,bettingsidor och esportbetting. Ibland vill man bara prova på att spela hos ett casino och då passar det utmärkt att endast sätta in en summa under 100-lappen.</p>
        </Styledtopwrap>
        <StyledDiv>
            <StyledCircle > </StyledCircle>
            <h2>10kr - 25kr - 50 kr casino</h2>
<p>Listan innehåller alla casinon som har minsta insättning under 100 kr. Oftast brukar det vara 10,25 eller 50 kr som är minsta insättningen under 100 kr. Alla casinon på listan har svensk spellicens. Vi strävar alltid efter att ha så korrekt information som möjligt på vår sida från varje casino. Listan kan komma att uppdateras, så håll utkick!</p>

            <div className="casino-wrap">
                {mindepCasino.map((casino) =>


                    <StyledDivWrap key={casino.id + casino.title}>
                        <StyledCasinoDiv

                        >
                            <img src={casino.caslogo} alt={casino.title + "logo"} />
                            <StyledNavlink
            to={{ pathname: `/Recension/${casino.title}`, match: `${casino.title}` }} >
            Recension
         
          </StyledNavlink>
                            <div>
                                <h3>Minsta insättning</h3>
                                <p>{casino.recension[0].mindeposit} KR</p>
                            </div>


                           

                            <Link target={props.isBlocked ? '' : "_blank"}
                                rel="noopener noreferrer nofollow " to={{ pathname: `/Redirect/${casino.title}`, match: `${casino.title}` }}>
                                <Button className="to-botton">Gå till casino</Button>
                            </Link>


                        </StyledCasinoDiv>

                        <div className="spela-lagom">

                            18+ | Spela Ansvarfullt | <a href="https://www.stodlinjen.se/#!/">Stödlinjen.se</a> |
<a
                                target="_blank noopener noreferrer nofollow"
                                href={casino.rules}
                            >
                                Regler & villkor gäller </a>{" "}
                            |
{casino.bankid === true ? (
                                <span className="bankid-text">
                                    Bankidentifiering
</span>

) : (
                                    ""
                                )}

                        </div>

                      <SnabbFaktaMin casino={casino} onClick={props.onClick}/>  
    
                    </StyledDivWrap>
                )}


            </div>
        </StyledDiv>

<BottomInfoMinstaCasino/>


    </Container>
    )
}

export default MinstaInsCasino