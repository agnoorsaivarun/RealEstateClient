import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LocationInfo = ({ setStep, propertyData, setPropertyData }) => {
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        axios.post(`http://localhost:8080/addnewproperty`,{
            propertyData
        }).then((d)=>{
            console.log(d)
            alert("property registered")
        }).catch(e=>console.log(e.message)).finally(()=>{navigate("/property")})
    }
    return (
        <div id="locationinfo">
            <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" required={true} id="email" name="email" value={propertyData.email} onChange={(e) => { setPropertyData({ ...propertyData, email: e.target.value }) }} />
            </div>
            <div className="city">
                <label htmlFor="city">City</label>
                <input required={true} id="city" name="city" value={propertyData.city} onChange={(e) => { setPropertyData({ ...propertyData, city: e.target.value }) }} />
            </div>
            <div className="pincode">
                <label htmlFor="pincode">Pin Code</label>
                <input type="number" required={true} id="pincode" name="pincode" value={propertyData.pincode} onChange={(e) => { setPropertyData({ ...propertyData, pincode: e.target.value }) }} />
            </div>
            <div className="areatype">
                <label htmlFor="areatype">Area Type</label>
                <select required={true} id="areatype" name="area_unit" value={propertyData.area_unit} onChange={(e) => { setPropertyData({ ...propertyData, area_unit: e.target.value }) }}>
                    <option>area1</option>
                    <option>area2</option>
                    <option>area3</option>
                </select>
            </div>
            <div className="address">
                <label htmlFor="address">Addess</label>
                <input required={true} id="address" name="address" value={propertyData.address} onChange={(e) => { setPropertyData({ ...propertyData, address: e.target.value }) }} />
            </div>
            <div className="landmark">
                <label htmlFor="landmark">Land Mark</label>
                <input required={true} id="landmark" name="landmark" value={propertyData.landmark} onChange={(e) => { setPropertyData({ ...propertyData, landmark: e.target.value }) }} />
            </div>
            <div className="latitude">
                <label htmlFor="latitude">Latitude</label>
                <input type="number" required={true} id="latitude" name="latitude" value={propertyData.latitude} onChange={(e) => { setPropertyData({ ...propertyData, latitude: e.target.value }) }} />
            </div>
            <div className="longitude">
                <label htmlFor="longitude">Longitude</label>
                <input type="number" required={true} id="longitude" name="longitude" value={propertyData.longitude} onChange={(e) => { setPropertyData({ ...propertyData, longitude: e.target.value }) }} />
            </div>
            <div className="button">
                <button onClick={(e) => { setStep(3) }}>Previous</button>
                <button onSubmit={(e) => { handleSubmit(e) }}>Submit</button>
            </div>
        </div>
    )
}
export default LocationInfo