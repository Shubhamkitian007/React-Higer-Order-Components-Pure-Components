import React from 'react'

export function HOCRed(props){
  return (
      <>
            <h1 style={{backgroundColor:'#8a8580' , color:'red'}}><props.cmp/></h1>
      </>
  )
}

export function HOCBlue(props){
    return (
        <>
              <h1 style={{ backgroundColor:'#8a8580' ,color:'blue'}}><props.cmp/></h1>
        </>
    )
  }

  export function HOCGreen(props){
    return (
        <>
              <h1 style={{backgroundColor:'#8a8580' , color:'green'}}><props.cmp/></h1>
        </>
    )
  }
  
// export default HOCCounter