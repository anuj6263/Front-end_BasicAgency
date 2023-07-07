import React from 'react'
import './Navbar.css'

const Navbar = () => {

  const handleClick = async()=>{
    try{
      const res = await 
      fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
         body: JSON.stringify({
          name: 'User'
        })
      })
      .then(res => 
        res.json()
      )
      .then(data => 
        console.log(data)
      )

  }
  catch(e){
    console.log(e)
  }
 }
      

  return (
    <div className='nav'>
      <button className='logo'>BASIC/DEPT®</button>
      <span className='buttons'>
        <button onClick={handleClick} className='work'>WORK</button>
        <button className='abouts'>ABOUT</button>
        {/* <button className='news'>NEWS</button> */}
        <button className='thinking'>THINKING</button>
        <button className='pledge'>PLEDGE</button>
        <button className='careers'>CAREERS</button>
        <button className='contact'>CONTACT</button>
      </span>
    </div>
  )
}

export default Navbar
