import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function UserDataEntry(){
    const [owner, setOwner] = useState("");
    const [registrationDate, setRegistrationDate] = useState("");
    const [model, setModel ] = useState("");
    const [make, setMake] = useState("");
    const [location, setLocation] = useState("");
    const [licensePlate, setLicensePlate] = useState("");

    const navigate = useNavigate();
    // saving the entry locally
    const saveEntry = (event) => { 
        event.preventDefault();

        // if any of the fields were not filled out, return
        if(!owner || !registrationDate || !model || !make || !location || !licensePlate)
            return;

        const newEntry = {
            id: Date.now(),
            owner,
            registrationDate,
            model,
            make,
            location,
            licensePlate,
            imageUrl: "/images/defaultPlate.jpg"
        };

        // getting the existing entries from local storage
        const existingEntries = JSON.parse(localStorage.getItem("userEntries")) || []; // if existing ones don't exist, empty array
        

        // adds the new entry to the list
        const updatedEntries = [...existingEntries, newEntry]; 

        // updated list will go back to local storage
        localStorage.setItem("userEntries", JSON.stringify(updatedEntries));

        navigate("/database");
    };

    return (
        <div>
            <h1>Enter Vehicle Information</h1>
            <form onSubmit={saveEntry}>
                <input type="text" placeholder="Owner Name" value={owner} onChange={(e) => setOwner(e.target.value)} required />
                <input type="date" value={registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} required />
                <input type="text" placeholder="Car Model" value={model} onChange={(e) => setModel(e.target.value)} required />
                <input type="text" placeholder="Car Make" value={make} onChange={(e) => setMake(e.target.value)} required />
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
                <input type="text" placeholder="License Plate" value={licensePlate} onChange={(e) => setLicensePlate(e.target.value)} required />
                <button type="submit">Save & View Database</button>
            </form>
        </div>
    )
}