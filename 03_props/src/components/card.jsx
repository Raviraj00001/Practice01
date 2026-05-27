import React from 'react'
const Card=(props)=>{
    return(
       <div className='card'>
        <img src="" alt="" />
                <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fugiat totam.</p>
        <button>view</button>
       </div>
    )
}
export default Card