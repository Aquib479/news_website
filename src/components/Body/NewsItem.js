import React from 'react'
import Badge from './Badge';
import Reveal from 'react-reveal/Reveal';
import Rotate from 'react-reveal/Rotate';

const NewsItem = (props) => {

    return (
        <>
            <Reveal effect="fadeInUp">
                <div className="card border border-slate-500 m-2 rounded-md md:w-[320px] md:h-[420px] transition-all ease-in-out duration-700 hover:bg-slate-600 z-0">
                    <Rotate bottom left>
                        <span className='absolute bg-red-500 rounded-lg w-[8rem] h-[1.4rem] text-center'>
                            <Badge link={props.badge} />
                        </span>
                    </Rotate>
                    <div className="card-img m-1">
                        <img src={props.image ? props.image : 'https://images.unsplash.com/photo-1565945887714-d5139f4eb0ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} alt="" className='h-[220px] w-[100%] rounded-md' />
                    </div>
                    <div className="title font-bold my-1 p-2 text-[1.2rem]">
                        <h1>{props.title.slice(0, 20)}...</h1>
                    </div>
                    <div className="description p-2 text-[0.8rem]">
                        <p>{props.description ? props.description?.slice(0, 80) : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, saepe!'}...</p>
                    </div>
                    <div className="author p-2">
                        <p className='text-slate-400 text-[0.7rem]'>By : {props.author ? props.author : 'joe Root'}</p>
                    </div>
                    <button className='border-none mt-2 py-1 px-4 rounded-md bg-blue-500 mx-2 mb-2 lg:mx-2 text-white hover:bg-sky-500/75'><a href={props.more} target='_blank' rel="noreferrer">Discover Here More</a></button>
                </div>
            </Reveal>
        </>
    )
}

export default NewsItem;
