import React from "react";

const BasicInfo=({setStep, propertyData, setPropertyData})=>{
  
    return(
    <div id="basicinfo">
        <label htmlFor="propertytype">Property Type</label>
         <select required={true} id="propertype" name="property_type" value={propertyData.property_type} onChange={(e)=>{setPropertyData({...propertyData, property_type:e.target.value})}}>
          <option>private</option>
          <option>public</option>
          <option>government</option>
         </select>
         <label htmlFor="negotiable">Is Negotiable?</label>
         <select required={true} id="negotiable" name="negotiable" value={propertyData.negotiable} onChange={(e)=>{setPropertyData({...propertyData, negotiable:e.target.value})}}>
           <option>yes</option>
           <option>no</option>
         </select>
         <label htmlFor="price">Price</label>
         <input required={true} type="number" id="price" name="price" value={propertyData.price} onChange={(e)=>{setPropertyData({...propertyData, price:e.target.value})}}/>
         <label htmlFor="ownership">Ownership</label>
         <select required={true}id="ownership" name="ownership" value={propertyData.property_type} onChange={(e)=>{setPropertyData({...propertyData, property_type:e.target.value})}}>

         </select>
         <select required={true} value={propertyData.property_type} onChange={(e)=>{setPropertyData({...propertyData, property_type:e.target.value})}}>

         </select>
         <select required={true} value={propertyData.property_type} onChange={(e)=>{setPropertyData({...propertyData, property_type:e.target.value})}}>

         </select>
         <select required={true} value={propertyData.property_type} onChange={(e)=>{setPropertyData({...propertyData, property_type:e.target.value})}}>

         </select>
         <select required={true} value={propertyData.property_type} onChange={(e)=>{setPropertyData({...propertyData, property_type:e.target.value})}}>

         </select>
    </div>
  )
}
export default BasicInfo