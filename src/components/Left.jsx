import React from 'react'

const Left = () => {
    const arr=[
        {
            heading:"Create Your first playlist",
            dis:"it's easy, we'll help you",
            button:"Create playlist"
        },
        {
            heading:"Lets find some podcasts to follow",
            dis:"We'll keep you updated on new episodes",
            button:"Browse podcast"
        }
    ]
  return (
    <div className='side_bar'>
        <div className='heading'>
            <h1>Your Library</h1>
            <i class="fa-solid fa-plus"></i>
        </div>

        <div className='section'>
            {
                arr.map((ele,index)=>{
                    return(
                        <section key={index}>
                            <h1>{ele.heading}</h1>
                            <p>{ele.dis}</p>
                            <button>{ele.button}</button>
                        </section>
                    )
                })
            }
        </div>

        <div>
            <ul>
                <li>Legal</li>
                <li>Safety and privacy center</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
                <li>About Ads</li>
                <li>Accessibility</li>
            </ul>

            <a href="">Cookies</a>

            <button>
                <i class="fa-solid fa-globe"></i>
                English
            </button>

        </div>
        
    </div>
  )
}

export default Left