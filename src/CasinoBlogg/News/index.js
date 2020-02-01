import React, { useEffect, useState } from "react";
import NewsFile from "../newsFile.json"
import '../style.scss'
import styled from "styled-components"
import NewsComp from "../NewsComp/index.js";
import RandomCasinos from "../../RandomCasinos";
require('typeface-muli')


const News = (props) => {


    let Newsurl = props.match.params.news

    const [singleNews, setSingle] = useState([])


    useEffect(() => {
        const GetNews = () => {
            let news = NewsFile.News
            let onenews = []
            for (let i of news) {
                if (Newsurl === i.metaurl) {
                    onenews.push(i)

                }

            }

            return setSingle(onenews)
        }

        GetNews()

    }, [])


    const StyledNewsWrap = styled.section`
    padding:0 20px;
    margin-bottom:20px;
    height:auto;
background-color:white !important;
`


    return (<StyledNewsWrap>
        {singleNews.map(i =>
            < NewsComp
                key={i.id}
                news={i}
            />

        )}

        <RandomCasinos list={[...props.list.Casinon]} />
    </StyledNewsWrap>)
}

export default News