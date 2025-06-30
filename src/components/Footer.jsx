import React from 'react'

const Footer = () => {
    const data = [
        {
            title: "company",
            flist: ["About", "Jobs", "For the record"]
        },
        {
            title: "communities",
            flist: ["For Artist", "Developer", "Adversting", "Investor", "Vendor"]
        },
        {
            title: "Useful links",
            flist: ["Support", "Free Moblie App "]
        },
        {
            title: "Spotify Plans",
            flist: ["Primimum Indivitual", "Premimum duo ", "Premimum Family", "Premimum Student", "spotify free"]
        }
    ]
    return (
        <div className='footer'>
            <div className='fdata'>
                {
                    data.map((ele, index) => {
                        return (
                            <div className="section" key={index}>
                                <h4>{ele.title}</h4>
                                <ul>
                                    {ele.flist.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )

                    })
                }
                <div className='icons'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
            </div>
            
            <div className='copy_right'>
                © 2025 Spotify AB
            </div>
        </div>
    )
}

export default Footer
