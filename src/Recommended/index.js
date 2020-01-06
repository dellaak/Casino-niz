import React,{useState,useEffect} from "react";
import "./style.scss";
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

const Recommended =(props)=> {
        const [list] =useState(props.list)
        const [top3, setTop3] = useState([])
 

        useEffect(() => {  
          const topCasinos = () =>{
            let wagerarr = []
        let size = 3;
        for (let i of list) {
          if ( i.setTop === true ){
              wagerarr.push(i);
            }
  }
      
    
        for (let i of list) {
                if ( i.freefromwager === true ){
                     wagerarr.push(i);
                  }
        }
     
        
        wagerarr.sort(function(a, b) {
            
            return a.wager - b.wager
          });
       
          
     
  
        wagerarr.slice()
    
        setTop3(wagerarr.slice(0, size))
      }   
  topCasinos()
          },[list]);

          
     

  return( <div className="our-rec">
        <h2>De tre bästa casino bonusar just nu</h2>
        <div className="rec-wrap" >
        {top3.map(casino => (
            <div  className="rec-box" key={casino.title} >
                     <Link target="_blank"
              rel="noopener noreferrer nofollow " to={{ pathname: `/Redirect/${casino.title}`, match: `${casino.title}` }}>
             <img src={casino.caslogo} alt="casino-logo"
             className="rec-img-top" /> </Link>
        <p className="top3-text
        ">{casino.depositbonus}</p> 
           <StyledNavlink 
              to={{ pathname: `/Recension/${casino.title}`, match: `${casino.title}` }} >
         Läs Mer
        </StyledNavlink>
      
      <div className="rec-buttonbox">
        <Link target="_blank"
              rel="noopener noreferrer nofollow " to={{ pathname: `/Redirect/${casino.title}`, match: `${casino.title}` }}>
              <Button className="rec-botton">Hämta bonus</Button></Link>
        <p className="top3rules" >18+ | <a href={casino.rules}>Regler & Villkor gäller</a></p>
        </div>
        </div>
       
        ))}
        </div>
        </div>
    )
 
}

export default Recommended;
