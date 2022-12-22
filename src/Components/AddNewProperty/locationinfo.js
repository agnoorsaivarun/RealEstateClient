import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LocationInfo = ({ setStep, propertyData, setPropertyData }) => {
    const navigate = useNavigate()
    const handleChange = (e) => {
        console.log(propertyData);
        const name = e.target.name;
        const value = e.target.value;
        setPropertyData(previousData => {
            return {...previousData, [name]: value}
        });
        console.log(propertyData);
    }
    function handleSubmit(e) {
        console.log(0);
        e.preventDefault()
        console.log(1);
        axios.post(`http://localhost:8080/addnewproperty`,{
            propertyData
        }).then((d)=>{
            console.log(d)
            alert("property registered")
        }).catch(e=>{console.log(e.message); navigate("/Signup")}).finally(()=>{navigate("/property")})
    }
    return (
        <div id="locationinfo">
            <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" required={true} id="email" name="email" value={propertyData.email} onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="city">
                <label htmlFor="city">City</label>
                <input required={true} id="city" name="city" value={propertyData.city} onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="pincode">
                <label htmlFor="pincode">Pin Code</label>
                <input type="number" required={true} id="pincode" name="pincode" value={propertyData.pincode} onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="areatype">
                <label htmlFor="areatype">Area Type</label>
                <select required={true} id="areatype" name="area" value={propertyData.area} onChange= { (e) => { handleChange(e) }}>
                    <option>area1</option>
                    <option>area2</option>
                    <option>area3</option>
                </select>
            </div>
            <div className="address">
                <label htmlFor="address">Addess</label>
                <input required={true} id="address" name="address" value={propertyData.address} onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="landmark">
                <label htmlFor="landmark">Land Mark</label>
                <input required={true} id="landmark" name="landmark" value={propertyData.landmark} onChange={ (e) => { handleChange(e) }} />
            </div>
            <div className="latitude">
                <label htmlFor="latitude">Latitude</label>
                <input type="number" required={true} id="latitude" name="latitude" value={propertyData.latitude} onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="longitude">
                <label htmlFor="longitude">Longitude</label>
                <input type="number" required={true} id="longitude" name="longitude" value={propertyData.longitude} onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="button">
                <button onClick={(e) => { setStep(3) }}>Previous</button>
                {/* <button type="submit" onSubmit={(e) => { handleSubmit(e) }}>Submit</button> */}
                <input type="submit" onSubmit={(e) => { handleSubmit(e) }} value="Submit" />
            </div>
        </div>
    )
}
export default LocationInfo