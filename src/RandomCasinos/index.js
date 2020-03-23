import React,{useState,useEffect} from "react";
import "./style.scss"
import { Button } from "reactstrap";
import { Link, NavLink} from "react-router-dom";
import styled from "styled-components"

 const StyledNavlink = styled(NavLink)`
color:white;
display:flex;
padding:"0px 0px 5px 0px";
justify-content:center;
color:#000;
font-size:14px;
font-family: 'Manjari', sans-serif;
text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style:normal;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.2);

`

const RandomCasinos =(props)=> {
        const [list] =useState(props.list)
        const [top3, setTop3] = useState([])
 

        useEffect(() => {  


            const  shuffle = (list)=> {
                let currentIndex = list.length, temporaryValue, randomIndex;
              
                // While there remain elements to shuffle...
                while (0 !== currentIndex) {
              
                  // Pick a remaining element...
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex -= 1;
              
                  // And swap it with the current element.
                  temporaryValue = list[currentIndex];
                  list[currentIndex] = list[randomIndex];
                  list[randomIndex] = temporaryValue;
                }
                return setTop3(list.slice(0,3));
              }

              shuffle(list)
     
          },[list]);

          
     

  return( <div className="our-rec-random">
        <h2>Tre casinon som du kanske vill prova på? </h2>
        <div className="rec-wrap" >
        {top3.map(casino => (
            <div  className="rec-box" key={casino.title} >
                     <Link target={props.isBlocked ? '' : "_blank"}
              rel="noopener noreferrer nofollow " to={{ pathname: `/Redirect/${casino.title}`, match: `${casino.title}` }}>
             <img src={casino.caslogo} alt="casino-logo"
             className="rec-img-top" /> </Link>
        <p className="top3-text
        ">{casino.depositbonus}</p> 
           <StyledNavlink 
              to={{ pathname: `/recension/${casino.title.toLowerCase()}`, match: `${casino.title.toLowerCase()}` }} >
         Läs Mer
        </StyledNavlink>
      
      <div className="rec-buttonbox">
        <Link target={props.isBlocked ? '' : "_blank"}
              rel="noopener noreferrer nofollow " to={{ pathname: `/Redirect/${casino.title}`, match: `${casino.title}` }}>
              <Button className="rec-botton">Till Casinot</Button></Link>
        <p className="top3rules" >18+ | <a href={casino.rules}>Regler & Villkor gäller</a></p>
        </div>
        </div>
       
        ))}
        </div>
        </div>
    )
 
}    

export default RandomCasinos;
