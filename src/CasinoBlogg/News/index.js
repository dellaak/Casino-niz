import React, { useEffect, useState } from "react";
import NewsFile from "../newsFile.json"
import '../style.scss'
import NewsComp from "../NewsComp/index.js";
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

    return (<React.Fragment>
        {singleNews.map(i =>
            < NewsComp
                key={i.id}
                news={i}
            />
        )}

    </React.Fragment>)
}

export default News