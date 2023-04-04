import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Zoom from 'react-reveal/Zoom';

const News = (props) => {
    const [articles, setArticles] = useState([])

    const fetchNews = async () => {
        const article = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ece140e9993a4e349d8c48877fb00f08`;
        const data = await fetch(article);
        const fetchedData = await data.json();
        setArticles(fetchedData.articles);
    }

    const capitalize = (value) => {
        for (var i = 0; i < value.length; i++) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }

    useEffect(() => {
        fetchNews();
    });

    return (
        <>
            <div className='News-Container text-white mt-[5rem]'>
                <Zoom right>
                    <h1 className='my-4 text-center text-[2rem] md:text-[3rem]'>Welcome to {capitalize(props.category)} News</h1>
                </Zoom>
                <div className="card-container md:grid grid-cols-3 lg:grid-cols-4 md:w-[90%] md:m-auto md:gap-y-4 lg:gap-x-4">
                    {
                        articles.map(item => {
                            return <NewsItem key={item.url} image={item.urlToImage} title={item.title} description={item.description} author={item.author} more={item.url} badge={item.source.name} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default News;
