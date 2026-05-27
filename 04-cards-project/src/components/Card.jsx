import React from 'react'
import { BookMarked } from 'lucide-react'

const Card = (props) => {    
    return (   
        <div className="card">

            <div className="top">
                <img src={props.logo} alt="" />

                <button>
                    Save
                    <BookMarked size={16}/>
                </button>
            </div>

            <div className="centre">

                <h3>
                    {props.company}
                    <span>{props.post}</span>
                </h3>

                <h2>{props.role}</h2>

                <div>
                    <h4>{props.role2}</h4>
                    <h4>Senior level</h4>
                </div>

            </div>

            <div className="bottom">

                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>

                <button>Apply Now</button>

            </div>

        </div>
    )
}

export default Card