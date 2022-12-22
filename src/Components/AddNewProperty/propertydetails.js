import React from "react";

const PropertyDetails = ({ setStep, propertyData, setPropertyData }) => {
    return (
        <div id="propertydetails">
            <div className="length">
                <label htmlFor="length">Length</label>
                <input type="number" required={true} id="length" name="length" value={propertyData.length} onChange={(e) => { setPropertyData({ ...propertyData, length: e.target.value }) }} />
            </div>
            <div className="breadth">
                <label htmlFor="breadth">Breadth</label>
                <input type="number" required={true} id="breadth" name="breadth" value={propertyData.breadth} onChange={(e) => { setPropertyData({ ...propertyData, breadth: e.target.value }) }} />
            </div>
            <div className="area">
                <label htmlFor="area">Area</label>
                <input type="number" required={true} id="area" name="total_area" value={propertyData.total_area} onChange={(e) => { setPropertyData({ ...propertyData, total_area: e.target.value }) }} />
            </div>
            <div className="unit">
                <label htmlFor="unit">Area Unit</label>
                <select required={true} id="unit" name="area_unit" value={propertyData.area_unit} onChange={(e) => { setPropertyData({ ...propertyData, area_unit: e.target.value }) }}>
                    <option>sq.ft</option>
                    <option>sq.m</option>
                    <option>yards</option>
                </select>
            </div>
            <div className="bhk">
                <label htmlFor="bhk">BHK</label>
                <select required={true} id="bhk" name="no_of_bhk" value={propertyData.no_of_bhk} onChange={(e) => { setPropertyData({ ...propertyData, no_of_bhk: e.target.value }) }}>
                    <option>1bhk</option>
                    <option>2bhk</option>
                    <option>3bhk</option>
                </select>
            </div>
            <div className="floors">
                <label htmlFor="floors">No Of Floors</label>
                <input required={true} type="number" id="floors" name="no_of_floors" value={propertyData.no_of_floors} onChange={(e) => { setPropertyData({ ...propertyData, no_of_floors: e.target.value }) }} />
            </div>
            <div className="attached">
                <label htmlFor="attached">Attached</label>
                <select required={true} id="attached" name="attached" value={propertyData.attached} onChange={(e) => { setPropertyData({ ...propertyData, attached: e.target.value }) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="western_toilet">
                <label htmlFor="western_toilet">Western Toilet</label>
                <select required={true} id="western_toilet" name="western_toilet" value={propertyData.western_toilet} onChange={(e) => { setPropertyData({ ...propertyData, western_toilet: e.target.value }) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="furnished">
                <label htmlFor="furnished">Furnished</label>
                <select required={true} id="furnished" name="furnished" value={propertyData.furnished} onChange={(e) => { setPropertyData({ ...propertyData, furnished: e.target.value }) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="car_parking">
                <label htmlFor="car_parking">Any Bank Loan?</label>
                <select required={true} id="car_parking" name="car_parking" value={propertyData.car_parking} onChange={(e) => { setPropertyData({ ...propertyData, car_parking: e.target.value }) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="lift">
                <label htmlFor="lift">Lift</label>
                <select required={true} id="lift" name="lift" value={propertyData.lift} onChange={(e) => { setPropertyData({ ...propertyData, lift: e.target.value }) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="electricity">
                <label htmlFor="electricity">Electricity</label>
                <select required={true} id="electricity" name="electricity" value={propertyData.electricity} onChange={(e) => { setPropertyData({ ...propertyData, electricity: e.target.value }) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="face">
                <label htmlFor="face">Facing</label>
                <select required={true} id="face" name="facing" value={propertyData.facing} onChange={(e) => { setPropertyData({ ...propertyData, facing: e.target.value }) }}>
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