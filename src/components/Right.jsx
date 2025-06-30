import React from 'react'
import Card from './Card'

const Right = () => {
  const myContent = [
    {
      title:"Trending songs",
      songs:[
        {
          image:"l1p1.jpeg",
          songName:"Qatal",
          artist:["Guru Randhawa","Sanjoy","Gill Machhrai"]
        },
        {
          image:"l1p2.jpeg",
          songName:"Minnalvala",
          artist:["Jakes Bejoy","Sid Siram","Sithara Krishnakumar"]
        },
        {
          image:"l1p4.jpeg",
          songName:"prema velluva",
          artist:["Micky J.Meyer","Sid Siram"]
        },
        {
          image:"l1p3.jpeg",
          songName:"Preety little baby",
          artist:["Connie Francis"]
        },
        {
          image:"l1p5.webp",
          songName:"laal pari",
          artist:["Yoyo Honey Singh","Alfaz"]
        },
        {
          image:"l1p6.jpeg",
          songName:"shaky",
          artist:["Sanju Rathod","Sid Siram"]
        }
      ]
    },
    {
      title:"Popular Album and Singles",
      songs:[
        {
          image:"l2p4.jpeg",
          songName:"Paro",
          artist:["Aditya Rikhari"]
        },
        {
          image:"l2p1.jpeg",
          songName:"Aashiqui 2",
          artist:["Mithoon","Ankit Tiwari"]
        },
        {
          image:"l2p2.jpeg",
          songName:"Yeh Jawani Hai Deewani",
          artist:["pritam"]
        },
        {
          image:"l2p6.jpeg",
          songName:"Jhol",
          artist:["Maanu"]
        },
        {
          image:"l2p3.jpeg",
          songName:"Do Patti",
          artist:["Sachet-Parampara"]
        },
        {
          image:"l2p5.jpeg",
          songName:"Sanam Teri Kasam",
          artist:["Himesh Reshammiya"]
        },
      ]
    },
    {
      title:"Popular Artists",
      songs:[
        {
          image:"l3p1.jpeg",
          songName:"Pritam",
          artist:["Artist"]
        },
        {
          image:"l3p2.jpeg",
          songName:"Atif Aslam",
          artist:["Artist"]
        },
        {
          image:"l3p5.jpeg",
          songName:"Ankit Tiwari",
          artist:["Artist"]
        },
        {
          image:"l3p4.jpeg",
          songName:"A.R. Rehman",
          artist:["Artist"]
        },
        {
          image:"l3p6.jpeg",
          songName:"Arjun Kanoongo",
          artist:["Artist"]
        },
        {
          image:"l3p3.jpeg",
          songName:"Arijit Singh",
          artist:["Artist"]
        }
      ]
    }
  ]
  return (
    <div className='container'>
      {
        myContent.map((ele,index)=>{
          return(
            <section className='sec'>
              <h1>{ele.title}</h1>
              <div className='card_section'>
                {
                  ele.songs.map((card)=>{
                      return(
                        <Card card={card}/>
                      )
                  })
                }
              </div>
            </section>
          )
        })
      }
    </div>
    )
}


export default Right