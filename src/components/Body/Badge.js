import React from 'react'

const Badge = (props) => {
    return (
        <>
            <h1 className='text-white text-[0.9rem] font-bold'>{props.link?.slice(0, 10)}..</h1>
        </>
    )
}

export default Badge
