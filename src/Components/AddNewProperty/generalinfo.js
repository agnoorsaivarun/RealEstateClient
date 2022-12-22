import React from "react";

const GeneralInfo = ({ setStep, propertyData, setPropertyData }) => {
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
        <div id="generalinfo">
            <div className="name">
                <label htmlFor="name">Name</label>
                <input required={true} id="name" name="name" value={propertyData.name} onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="mobile">
                <label htmlFor="mobile">Mobile</label>
                <input type="number" required={true} id="mobile" name="mobile" value={propertyData.mobile} onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="posted_by">
                <label htmlFor="posted_by">Posted By</label>
                <select required={true} id="posted_by" name="posted_by" value={propertyData.posted_by} onChange={(e) => { handleChange(e) }}>
                    <option>self</option>
                    <option>family</option>
                    <option>owner</option>
                </select>
            </div>
            <div className="sale_type">
                <label htmlFor="sale_type">Sale Type</label>
                <select required={true} id="sale_type" name="sale_type" value={propertyData.sale_type} onChange={(e) => { handleChange(e) }}>
                    <option>private</option>
                    <option>lease</option>
                    <option>ownership</option>
                </select>
            </div>
            <div className="featured_package">
                <label htmlFor="featured_package">Featured Package</label>
                <select required={true} id="featured_package" name="featured_package" value={propertyData.featured_package} onChange={(e) => { handleChange(e) }}>
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="ppd_package">
                <label htmlFor="ppd_package">PPD Package</label>
                <select required={true} id="ppd_package" name="ppd_package" value={propertyData.ppd_package} onChange={(e) => { handleChange(e) }}>
                    <option>1 ppd</option>
                    <option>2 ppd</option>
                    <option>3 ppd</option>
                    <option>4 ppd</option>
                </select>
            </div>
            <div className="button">
                <button onClick={(e) => { setStep(2) }}>Previous</button>
                <button onClick={(e) => { setStep(4) }}>Save & Continue</button>
            </div>
        </div>
    )
}
export default GeneralInfo