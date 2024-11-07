import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, selectCategories } from '../../redux/categorySlice'

const AddItem = () => {
  let initialData = {name:'',brand:'',category:'',price:'',stock:'',sizes:[],colors:[],images:[],desc:''}
  
  let [item,setItem] =useState({...initialData})
  let [allsizes,setSizes] = useState([])
  let [allcolors,setColors]=useState([])
  let [pics,setPics] = useState([])
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(fetchCategories())},[])
  const categories  = useSelector(selectCategories)
  const colorsArr = ['red','green','blue','gray','white','black','pink','lightblue','yellow','brown','purple','cream','aqua','sliver']

  const handleSizes=(val)=>{console.log(val);setSizes((prev)=>[...prev,val])}
  const handleColors=(val)=>{setColors((prev)=>[...prev,val])}
  const handleImage=async(e)=>{
    let img = e.target.files[0]
    if(img==undefined){toast.error("please select an image")}
    if(img.type=='image/jpg' || img.type=='image/jpeg'|| img.type=='image/jfif' ||img.type=='image/png' || img.type=='image/gif' || img.type=='image/webp'){
      const data = new FormData()
      data.append("file",img)
      data.append("upload_preset","menswear")
      data.append('cloud_name','harshitalogicraysacademy')
      try{
       const res =  await axios.post("https://api.cloudinary.com/v1_1/harshitalogicraysacademy/image/upload",data)
        console.log(res.data.url)
      
      }
      catch(err){
        toast.error(err.message)
      }
    }

  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setItem({...item,sizes:allsizes,colors:allcolors,images:pics})
    alert(JSON.stringify(item))

  }
  return (
    <div className='container p-3 shadow'>
      <h1>Add Item</h1><hr/>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="" class="form-label">Category</label>
            <select class="form-select" name="category" value={item.category}
            onChange={(e)=>setItem({...item,category:e.target.value})}>
              <option value="" selected disabled>Select one</option>
              {categories.map((c,i)=><option key={i}>{c.name}</option>)}
            </select>
          </div>
          
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={item.name}
            onChange={(e)=>setItem({...item,name:e.target.value})}/>
            </div>
            <div className="col mb-3">
            <label htmlFor="brand" className="form-label">Brand</label>
            <input type="text" className="form-control" name="brand" value={item.brand}
            onChange={(e)=>setItem({...item,brand:e.target.value})}/>
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input type="numbet" className="form-control" name="price" value={item.price}
            onChange={(e)=>setItem({...item,price:e.target.value})}/>
            </div>
            <div className="col mb-3">
            <label htmlFor="stock" className="form-label">Stock</label>
            <input type="number" className="form-control" name="stock" value={item.stock}
            onChange={(e)=>setItem({...item,stock:e.target.value})}/>
            </div>
          </div>
          <div className="row">
          <div class="col mb-3">
            <label for="" class="form-label">Sizes</label>
            <select class="form-select" name="sizes" multiple onChange={(e)=>handleSizes(e)}>
              <option value="" selected disabled>Select one</option>
              <option>xs</option><option>s</option><option>m</option>
              <option>l</option><option>xl</option><option>xxl</option>
            </select>
          </div>
          <div class="col mb-3">
            <label for="" class="form-label">Colors</label>
            <select class="form-select" name="colors" multiple             onChange={(e)=>handleColors(e.target.value)}>
              <option value="" selected disabled>Select one</option>
              {colorsArr.map((c,i)=><option key={i}>{c}</option>)}
            </select>
          </div>
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Choose file</label>
            <input type="file" class="form-control"  name="pics" multiple/>
          </div>
          <div class="mb-3">
            <label for="" class="form-label">desc</label>
            <textarea type="text"  name="desc"  class="form-control" value={item.desc}
            onChange={(e)=>setItem({...item,desc:e.target.value})}></textarea>
         </div>
         <button
          type="submit"
          class="btn btn-primary"
         >
          Submit
         </button>
         
        </form>
    </div>
  )
}

export default AddItem
