import React from "react";
import { useNavigate } from "react-router-dom";

const BasicInfo = ({ setStep, propertyData, setPropertyData }) => {
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
    return (
        <div id="basicinfo">
            <div className="type">
                <label htmlFor="propertytype">Property Type</label>
                <select required={true} id="propertype" name="property_type" value={propertyData.property_type} onChange={(e) => { handleChange(e) }}>
                    <option>private</option>
                    <option>public</option>
                    <option>government</option>
                </select>
            </div>
            <div className="neg">
                <label htmlFor="negotiable">Is Negotiable?</label>
                <select required={true} id="negotiable" name="negotiable" value={propertyData.negotiable} onChange={(e) => { handleChange(e) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="price">
                <label htmlFor="price">Price</label>
                <input required={true} type="number" id="price" name="price" value={propertyData.price} onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="ownership">
                <label htmlFor="ownership">Ownership</label>
                <select required={true} id="ownership" name="ownership" value={propertyData.ownership} onChange={(e) => { handleChange(e) }}>
                    <option>self</option>
                    <option>family</option>
                </select>
            </div>
            <div className="age">
                <label htmlFor="propertyage">Property Age</label>
                <select required={true} id="propertyage" name="property_age" value={propertyData.property_age} onChange={(e) => { handleChange(e) }}>
                    <option>1-3 years</option>
                    <option>4-8 years</option>
                    <option>9-15 years</option>
                </select>
            </div>
            <div className="appr">
                <label htmlFor="propertyapproved">Property Approved</label>
                <select required={true} id="propertyapproved" name="property_approved" value={propertyData.property_approved} onChange={(e) => { handleChange(e) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="desc">
                <label htmlFor="propertydescription">Property Description</label>
                <select id="propertydescription" name="property_description" required={true} value={propertyData.property_description} onChange={(e) => { handleChange(e) }}>
                    <option>Flat Bungalow</option>
                    <option>Apartment</option>
                    <option>Plot</option>
                </select>
            </div>
            <div className="loan">
                <label htmlFor="bankloan">Any Bank Loan?</label>
                <select required={true} id="bankloan" name="bank_loan" value={propertyData.bank_loan} onChange={(e) => { handleChange(e) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="button">
                <button onClick={(e) => { navigate("/property") }}>Cancel</button>
                <button onClick={(e) => { setStep(2) }}>Save & Continue</button>
            </div>
        </div>
    )
}
export default BasicInfo