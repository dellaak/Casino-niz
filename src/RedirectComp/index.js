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



        changeState()
        // eslint-disable-next-line
        url = url.toLowerCase()
        let tag = document.createElement('script');
        tag.type = "text/javascript"
        tag.async = true;
        tag.innerHTML = setTimeout(
            function () {
                let casino_name = url;
                let casino_link = `/Go/${casino_name}`
                window.location.assign(casino_link);
            }
            , 700
        )

        let body = document.getElementsByTagName('body')[0];
        body.appendChild(tag);





    }, [url]);





    return (

        <div className="redir-wrap">
            <Helmet>
                <title>Casino Bonus {final} </title>
                <meta name="description" content={'Vi tar dig vidare till casinot'} />
                <meta
                    name="keywords"
                    content="Casino, Casinobonusar, 2019,2020,insättningsbonus,esport,csgo.dota2.starcraft, leauge of legends, lol, free spins, esports,betting"
                />

            </Helmet>
            <div className="redirect-box">


                <img className="redlogo" src={caslogo} alt="casinologo"></img> <h2>Tack för ditt besök!</h2>
                <p >Vi skickar dig vidare till <i><b className="dirname">{final}</b> </i></p>
                <p><a className="dirlink" href={`/Go/${url}`}>Klicka här</a> ifall det tar för lång tid.</p>
                <div className="box-img-dir">
                    <div className="lds-facebook"><div></div><div></div><div></div></div> </div>
                <p className="goback-text">För att komma tillbaka till Casinoniz <Link className="dirlink2" to="/" > Klicka här</Link></p>
            </div>
        </div>
    );
}



export default withRouter(RedirectComp)
