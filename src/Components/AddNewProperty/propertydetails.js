import React from "react";

const PropertyDetails = ({ setStep, propertyData, setPropertyData }) => {
    const handleChange = (e) => {
        console.log(propertyData);
        const name = e.target.name;
        const value = e.target.value;
        setPropertyData(previousData => {
            return {...previousData, [name]: value}
        });
        console.log(propertyData);
    }
    return (
        <div id="propertydetails">
            <div className="length">
                <label htmlFor="length">Length</label>
                <input type="number" required={true} id="length" name="length" value={propertyData.length} onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="breadth">
                <label htmlFor="breadth">Breadth</label>
                <input type="number" required={true} id="breadth" name="breadth" value={propertyData.breadth} onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="area">
                <label htmlFor="area">Area</label>
                <input type="number" required={true} id="area" name="total_area" value={propertyData.total_area} onChange={(e) =>{ handleChange(e) }} />
            </div>
            <div className="unit">
                <label htmlFor="unit">Area Unit</label>
                <select required={true} id="unit" name="area_unit" value={propertyData.area_unit} onChange={(e) =>{ handleChange(e) }}>
                    <option>sq.ft</option>
                    <option>sq.m</option>
                    <option>yards</option>
                </select>
            </div>
            <div className="bhk">
                <label htmlFor="bhk">BHK</label>
                <select required={true} id="bhk" name="no_of_bhk" value={propertyData.no_of_bhk} onChange={(e) =>{ handleChange(e) }}>
                    <option>1bhk</option>
                    <option>2bhk</option>
                    <option>3bhk</option>
                </select>
            </div>
            <div className="floors">
                <label htmlFor="floors">No Of Floors</label>
                <input required={true} type="number" id="floors" name="no_of_floors" value={propertyData.no_of_floors} onChange={(e) =>{ handleChange(e) }} />
            </div>
            <div className="attached">
                <label htmlFor="attached">Attached</label>
                <select required={true} id="attached" name="attached" value={propertyData.attached} onChange={(e) =>{ handleChange(e) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="western_toilet">
                <label htmlFor="western_toilet">Western Toilet</label>
                <select required={true} id="western_toilet" name="western_toilet" value={propertyData.western_toilet} onChange={(e) =>{ handleChange(e) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="furnished">
                <label htmlFor="furnished">Furnished</label>
                <select required={true} id="furnished" name="furnished" value={propertyData.furnished} onChange={(e) =>{ handleChange(e) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="car_parking">
                <label htmlFor="car_parking">Car Parking</label>
                <select required={true} id="car_parking" name="car_parking" value={propertyData.car_parking} onChange={(e) => { handleChange(e) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="lift">
                <label htmlFor="lift">Lift</label>
                <select required={true} id="lift" name="lift" value={propertyData.lift} onChange={(e) =>{ handleChange(e) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="electricity">
                <label htmlFor="electricity">Electricity</label>
                <select required={true} id="electricity" name="electricity" value={propertyData.electricity} onChange={(e) =>{ handleChange(e) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="face">
                <label htmlFor="face">Facing</label>
                <select required={true} id="face" name="facing" value={propertyData.facing} onChange={(e) =>{ handleChange(e) }}>
                    <option>north</option>
                    <option>south</option>
                    <option>east</option>
                    <option>west</option>
                </select>
            </div>
            <div className="button">
                <button onClick={(e) => { setStep(1) }}>Previous</button>
                <button onClick={(e) => { setStep(3) }}>Save & Continue</button>
            </div>
        </div>
    )
}
export default PropertyDetails