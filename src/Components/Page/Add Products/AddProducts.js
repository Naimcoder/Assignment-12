import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/UseContext";
import SmallSpnner from "../SmallSpnner/SmallSpnner";



const AddProducts = () => {
  const [loading,setLoading]=useState(true)
 const {user}=useContext(AuthContext)

  const handleProduct = (event) => {
    event.preventDefault();
    const from = event.target;
    const productname = from.productname.value;
    const brandname = from.brandname.value;
    const productcategory = from.productcategory.value;
    const resaleprice = from.resaleprice.value;
    const originalprice = from.originalprice.value;
    const category = from.category.value;
    const phone = from.phone.value;
    const location = from.location.value;
    const useYears = from.useYears.value;
    const description = from.description.value;
    // img update
    const image = from.image.files[0];
    const fromData= new FormData()
    fromData.append('image',image)
    // 2bf31dff1894ed215e78f15b7f24114d
    fetch(`https://api.imgbb.com/1/upload?key=27276074ecd04685599f4f63d55b5d31`,{
      method:"POST",
      body:fromData
    })
    .then(res=>res.json())
    .then(imgData=>{
   const image= imgData.data.display_url
   const date = new Date().toLocaleDateString();
   const products = {
    phone: phone,
    picture:image,
    category_id: category,
    brandname: brandname,
    name: productname,
    location: location,
    resale_price: resaleprice,
    original_price: originalprice,
    years_of_use: useYears,
    time: date,
    times: new Date().toLocaleTimeString(),
    condition: productcategory,
    description: description,
    email:user?.email,
    sellerName:user?.displayName
  };
  fetch(`http://localhost:8000/categorys`,{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(products)
  })
  .then(res=>res.json())
  .then(data=>{
     console.log(data)
     if(data.acknowledged){
      toast.success('Add Product SuccessFully')
      from.reset()
     }
     
  })
    })

  };
  return (
    <div className="lg:w-2/4 container mx-auto p-10 bg-slate-400 my-20">
      <h3 className="text-3xl">ADD A PRODUCTS</h3>
      <form onSubmit={handleProduct}>
        <input
          type="text"
          placeholder="Product Name"
          className="input w-full  py-5 my-2 "
          name="productname"
        />
        <br></br>
        <input
          type="text"
          placeholder="Barnd Name"
          className="input w-full  py-5 my-2 "
          name="brandname"
        />
        <br></br>
        {/*  */}
        <label htmlFor="">
          <input
            type="file"
            placeholder="Upload Your Product"
            className="input w-full  my-2"
            name="image"
          />
        </label>
        <br></br>
        {/*  */}
        <label htmlFor="" className="text-black font-medium my-2">
          Product Categoroy
          <select
            id="productcategory"
            name="productcategory"
            className="select select-bordered w-full"
          >
            <option>Good</option>
            <option>Excellent</option>
            <option>Fair</option>
          </select>
        </label>

        <br></br>
        <input
          type="text"
          placeholder="Sell Price"
          className="input w-full py-5 my-2"
          name="resaleprice"
        />
        <input
          type="text"
          placeholder="original price"
          className="input w-full py-5 my-2"
          name="originalprice"
        />
        <label htmlFor="" className="text-black font-medium my-2">
          Choose a Category
          <select
            id="category"
            name="category"
            className="select select-bordered w-full"
          >
            <option value="01">XIAOMI</option>
            <option value="02">Samsung</option>
            <option value="03">IPHONE</option>
          </select>
        </label>
        <input
          type="number"
          placeholder=" Your Phone Number"
          className="input w-full py-5 my-2"
          name="phone"
        />
        <input
          type="text"
          placeholder="Add Your Loaction"
          className="input w-full py-5 my-2"
          name="location"
        />
        <input
          type="text"
          placeholder="used Time"
          className="input w-full py-5 my-2"
          name="useYears"
        />
        <textarea
          className="w-full p-5"
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="Product Description"
        ></textarea>
        <button
          htmlFor="bookingModal"
          className="btn w-full  btn-primary my-3"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
