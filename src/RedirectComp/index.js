import React, { useState, useEffect } from "react";
import caslogo from "../images/casinonizlogo.svg"
import { Link, withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./style.scss"


const RedirectComp = (props) => {
    let url = props.match.params.casinotitle
    let obj = {
        link: '',
        color: ''
    };
    const [myStuff, setStuff] = useState({ link: '', bgcolor: '' })
    const [final] = useState(url)





    useEffect(() => {
        let list = [...props.list.Casinon]
        const changeState = () => {

            for (let i of list) {
                if (i.title === url) {
                    obj.link = i.mylink
                    obj.color = i.color
                    return obj
                }
            }


        }


        // const redirect = () => {

        //     setTimeout(() => {
        //         window.location.replace(obj.link)

        //     }, 2000);

        // }
        changeState()
        setStuff({ link: obj.link, color: obj.color })
        // redirect()


    }, [url]);





    return (

        <div className="redir-wrap">
            <Helmet>
                <title>Casino Bonus {final} </title>
                <meta name="description" content={'hop'} />
                <meta
                    name="keywords"
                    content="Casino, Casinobonusar, 2019,2020,insättningsbonus,esport,csgo.dota2.starcraft, leauge of legends, lol, free spins, esports,betting"
                />
            </Helmet>
            <div className="redirect-box">


                <img className="redlogo" src={caslogo} alt="casinologo"></img> <h2>Tack för ditt besök!</h2>
                <p >Vi skickar dig vidare till <i><b className="dirname">{final}</b> </i></p>
                <p><a className="dirlink" href={myStuff.link}>Klicka här</a> ifall det tar för lång tid.</p>
                <div className="box-img-dir">
                    <div className="lds-facebook"><div></div><div></div><div></div></div> </div>
                <p className="goback-text">För att komma tillbaka till Casinoniz <Link className="dirlink2" to="/" > Klicka här</Link></p>
            </div>
        </div>
    );
}



export default withRouter(RedirectComp)
