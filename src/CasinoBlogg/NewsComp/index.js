import React from "react";
import { Container } from "reactstrap"
import { Helmet } from "react-helmet";
import '../style.scss'
require('typeface-muli')


const NewsComp = (props) => {




    return (<Container className="wrapper-ninja">
        <Helmet>
            <title>{props.news.maintitle} | Casinoniz</title>
            <link rel="canonical" href={`https://www.casinoniz.se/casino-nyheter/${props.news.metaurl}`} />
            <meta
                name="description"
                content={props.news.metaseodesc}
            />
            <meta
                name="keywords"
                content={props.news.keywords}
            />
            <meta property="og:title" content={props.news.maintitle} />
            <meta property="og:description" content={props.news.metadisc} />
            <meta property="og:image" content={`https://www.casinoniz.se/images/${props.news.artimg}`} />
            <meta property="og:url" content={`https://www.casinoniz.se/${props.news.metaurl}`} />

            <meta name="twitter:title" content={props.news.maintitle} />
            <meta name="twitter:description" content={props.news.metaseodesc} />
            <meta name="twitter:image" content={`https://www.casinoniz.se/images/${props.news.artimg}`} />

        </Helmet>




        <h1 >{props.news.maintitle} </h1>
        <img className="news-img" srcSet={`${props.news.artimg} 300w,${props.news.artimg} 200w`}
            sizes="(max-width: 500px) 200px,400px"
            src={props.news.artimg} alt={props.news.altimt} />
        <small> Publicerad:{props.news.publish}</small>
        <section className="news-section">
            <h2>{props.news.articletitle}</h2>
            {props.news.p1 ? <p>{props.news.p1}</p> : ''}

            {props.news.p2 ? <p>{props.news.p2}</p> : ''}

            {props.news.p3 ? <p>{props.news.p3} {props.news.internallink ? <a href={props.news.internallink}>{props.news.internallinktext}</a> : ''}</p> : ''}

            {props.news.p4 ? <p>{props.news.p4}</p> : ''}




        </section>


        <p className="kalla">Källor:
        {props.news.sourcearr.length > 1 ? props.news.sourcearr.map((i, k) => {
            let b = props.news.sourcearrtext[k]
            return <a href={i}>{b}</a>
        }) : <React.Fragment>  <small>{props.news.kallatext}</small> <small>{props.news.sourcetxt}</small>   <img srcSet={`${props.news.btmsourceimg} 300w,${props.news.btmsourceimg} 200w`}
            sizes="(max-width: 500px) 200px,400px"
            src={props.news.btmsourceimg} alt={props.news.btmsourcealt} /></React.Fragment>}
        </p>


    </Container>)
}

export default NewsComp