import React, { useState } from "react";
import BasicInfo from "./basicinfo";
import PropertyDetails from "./propertydetails";
import GeneralInfo from "./generalinfo";
import LocationInfo from "./locationinfo";
import './addnewproperty.css'

const AddNewProperty = () => {
    const initialData = {
        property_type: "",
        price: "",
        property_age: "",
        property_description: "",
        negotiable: "",
        ownership: "",
        property_approved: "",
        bank_loan: "",

        length: "",
        breadth: "",
        total_area: "",
        area_unit: "",
        no_of_bhk: "",
        no_of_floors: "",
        attached: "",
        western_toilet: "",
        furnished: "",
        car_parking: "",
        lift: "",
        electricity: "",
        facing: "",

        name: "",
        mobile: "",
        posted_by: "",
        sale_type: "",
        featured_package: "",
        ppd_package: "",
        email: "",
        city: "",
        area: "",
        pincode: "",
        address: "",
        landmark: "",
        latitude: "",
        longitude: ""
    }
    const [step, setStep] = useState(1)
    const [propertyData, setPropertyData] = useState(initialData)
    return (
        <>
            <div className="form">
                <section className="form-header">
                    <button disabled className={step === 1 ?"select": "deselect"}>Basic Info</button>
                    <button disabled className={step === 2 ?"select": "deselect"}>Property Details</button>
                    <button disabled className={step === 3 ?"select": "deselect"}>General Info</button>
                    <button disabled className={step === 4 ?"select": "deselect"}>Location Details</button>
                </section>
                <form>
                    {step === 1 ? <BasicInfo setStep={setStep} propertyData={propertyData} setPropertyData={setPropertyData} /> : null}
                    {step === 2 ? <PropertyDetails setStep={setStep} propertyData={propertyData} setPropertyData={setPropertyData} /> : null}
                    {step === 3 ? <GeneralInfo setStep={setStep} propertyData={propertyData} setPropertyData={setPropertyData} /> : null}
                    {step === 4 ? <LocationInfo setStep={setStep} propertyData={propertyData} setPropertyData={setPropertyData} /> : null}
                </form>
            </div>
        </>
    )
}
export default AddNewProperty