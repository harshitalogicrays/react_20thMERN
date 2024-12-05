import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, selectCategories } from '../../redux/categorySlice'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { selectItems } from '../../redux/itemSlice'

const AddItem = () => {
  let initialData = {name:'',brand:'',category:'',price:'',stock:'',sizes:[],colors:[],images:[],desc:''}
  
  let [item,setItem] =useState({...initialData})
  let [allsizes,setSizes] = useState([])
  let [allcolors,setColors]=useState([])
  let [pics,setPics] = useState([])
  const [picLoading,setPicLoading]=useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{dispatch(fetchCategories())},[])
  const categories  = useSelector(selectCategories)
  const colorsArr = ['red','green','blue','gray','white','black','pink','lightblue','yellow','brown','purple','cream','aqua','sliver']

  //edit 
  const {id} =useParams()
  const allitems = useSelector(selectItems)
  const itemEdit = allitems.find((item)=>item.id==id)
  useEffect(()=>{
    if(id){
      setItem({...itemEdit});setSizes(itemEdit.sizes);
      setColors(itemEdit.colors);setPics(itemEdit.images) }
    else {
      setItem({...initialData}); setSizes([]);setColors([]);setPics([])  } },[id])

  const handleSizes = (e) => {
    const s = Array.from(e.target.selectedOptions).map(opt=>opt.value)
    setItem({...item,sizes:s}) }

  const handleColors = (e) => {
    const c = Array.from(e.target.selectedOptions).map(opt=>opt.value)
    setItem({...item,colors:c})}

  const handleImage=async(e)=>{
    let imgs = Array.from(e.target.files)
    if(imgs.length==0){return}
    const uploadURLs=[]
    for(let img of imgs){
      setPicLoading(true)
      if(['image/jpg','image/jpeg','image/jfif','image/png','image/gif','image/webp'].includes(img.type)){
        const data = new FormData()
        data.append("file",img)
        data.append("upload_preset","menswear")
        data.append('cloud_name','harshitalogicraysacademy')
        data.append('folder','items')
        try{
         const res =  await fetch("https://api.cloudinary.com/v1_1/harshitalogicraysacademy/image/upload",{method:"POST",body:data})
          const data1 = await res.json()
          console.log(data1.url)
          uploadURLs.push(data1.url)
          setPicLoading(false)}
        catch(err){
          toast.error(err.message);  setPicLoading(false)
        } }
    }
    setPics(prevImg => [...prevImg,...uploadURLs])
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!id){
      try{
        await axios.post(`${import.meta.env.VITE_BASE_URL}/products`,{...item,images:pics,createdAt:new Date()})
        toast.success("item added")
        navigate('/admin/item/view')
      }
      catch(err){toast.error(err.message)}
    }
    else {
      try{
        await axios.put(`${import.meta.env.VITE_BASE_URL}/products/${id}`,{...item,images:pics,createdAt:item.createdAt,editedAt:new Date()})
        toast.success("item updated")
        navigate('/admin/item/view')
      }
      catch(err){toast.error(err.message)}
    }

  }

  const removeImage=(ind)=>{
    setPics(prevImg =>prevImg.filter((_,i)=>i!=ind))
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
            <select class="form-select" name="sizes" multiple onChange={handleSizes}>
              <option value="" disabled>Select one</option>
              {["xs","s","m","l","xl","xxl"].map((s,i)=><option key={i} selected={allsizes.includes(s)}>{s}</option>)}
            </select>
          </div>
          <div class="col mb-3">
            <label for="" class="form-label">Colors</label>
            <select class="form-select" name="colors" multiple onChange={handleColors}>
              <option value="" disabled>Select one</option>
              {colorsArr.map((c,i)=><option key={i} selected={allcolors.includes(c)}>{c}</option>)}
            </select>
          </div>
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Choose file</label>
            <input type="file" class="form-control"  name="pics" multiple onChange={handleImage}/>
          </div>
          {id && <>
            {pics.length !=0 && <>
                  {pics.map((pic,i)=><div key={i} style={{display:'inline-block',marginRight:'20px',position:'relative'}}>
                      <img src={pic} height={80} width={80}/>
                      <span style={{position:'absolute',top:'0',right:'0',background:'red',color:'white',padding:'1px 5px',borderRadius:'5px','cursor':'pointer'}} onClick={()=>removeImage(i)}>X</span>
                  </div>)}
            </>}
          </>}
          <div class="mb-3">
            <label for="" class="form-label">desc</label>
            <textarea type="text"  name="desc"  class="form-control" value={item.desc}
            onChange={(e)=>setItem({...item,desc:e.target.value})}></textarea>
         </div>
         <div className="d-grid gap-3">
         <button type="submit" class="btn btn-primary"> 
        {picLoading ? <div class="d-flex justify-content-center">
                      <div class="spinner-border" role="status">
                      </div>
                    </div>  : "Submit"}
        </button>
         </div>
        </form>
    </div>
  )
}

export default AddItem


