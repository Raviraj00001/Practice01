import React from 'react'
import style from './button.module.css'
const Buttons=()=>{
  return(
    <div className="style.btn">   
        <button className="style.btn">Primary</button>    
        <button className="style.btn">Secondary</button>    
        <button className="style.btn">Success</button>    
        <button className="style.btn">Danger</button>      
        <button className="style.btn">Warning</button>    
        <button className="style.btn">Info</button>    
        <button className="style.btn">Light</button>
        <button className="style.btn">Dark</button>
    </div>
  )
}
export default Buttons;