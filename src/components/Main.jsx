import React from 'react'
import Navbar from './Navbar'
import "../app.css"
import Left from './Left'
import Right from './Right'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='main'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
        <Navbar/>

        <div id='midleft'>
          <Left/>
        </div>

        <div id='midright'>
          <Right/>
          <Footer/>
        </div>

        {/* <div className=''>

        </div> */}
    </div>
  )
}

export default Main