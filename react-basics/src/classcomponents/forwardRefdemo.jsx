import React from 'react'

const ForwardRefdemo = React.forwardRef((props,ref) => {
  return (
    <div>
      {props.name}
      <input className='form-control' ref={ref}/>
      <button type="button" className='btn btn-primary' 
       onClick={()=>alert(ref.current.value)}>
        fetch ref data</button>
    </div>
  )
})

export default ForwardRefdemo
