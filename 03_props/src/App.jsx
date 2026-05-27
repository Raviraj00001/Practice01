import React from 'react'
 import Card from './components/card'
const App = () => {
  return (
    
    <div className='parent'>
    <Card user='aman' age={18}/>
      <Card/>
        <Card/>
    </div>
  )
}

export default App