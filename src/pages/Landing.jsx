import React, { useEffect } from 'react'

const Landing = () => {
  useEffect(() => {
    console.log("Landing page is rendering!");
  }, []);

  return (
    <h1 className="text-4xl">Landing</h1>
    
  )
  
}

export default Landing

