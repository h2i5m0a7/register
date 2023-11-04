import React, { useState } from 'react'

const App = () => {
  const[name, setname]=useState()
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" onChange={(e)=>setname(e.target.value)}/>
    </div>
  )
}

export default App