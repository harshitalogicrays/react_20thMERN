// import React from 'react'

// const PropsDemoChildren = (props) => {
//   return (
//     <>
//     {/* {props.products} */}
//     {/* {props.products[0]} */}
//     {/* {props.products.length} */}

//     {/* {props.products.map((product,i)=><h1 key={i}>{product}</h1>)} */}
    
//     {props.products.map((item,i)=>{ return <h1 key={i}>{item}</h1>})}
    
//     <>
//         {props.children[2]}
//     </>
//     </>
//   )
// }

// export default PropsDemoChildren 


import React from 'react'

const PropsDemoChildren = ({products,children}) => {
  return (
    <>
    {products.map((item,i)=>{ return <h1 key={i}>{item}</h1>})}

    {children[2]}
    </>
  )
}

export default PropsDemoChildren
