import React, {Fragment} from 'react'

const Navlist = (props) => {
  return (
    <>
      {
        props.arrayiter.map((ele,i)=>{
          return (
            <Fragment key={i}>
                <span>{ele}   </span>
            </Fragment>
          )
        })
      }
    </>

  )
}

export default Navlist