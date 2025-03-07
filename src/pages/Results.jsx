import "../styles/Results.css";
import PlateDetails from "../components/PlateDetails";
import SearchBar from "../components/SearchBar";
import {useState } from "react";
import PlateImage from "../components/PlateImage";

// dummy data in JSON format to test search functionality
const fakeDatabase = [
    {
        owner: 'Liz Yan',
        registrationDate: '05-04-2014',
        model: '718 Cayman G14',
        make: 'Porsche',
        location: 'Chicago, Illinois',
        licensePlate: "1802600",
        imageUrl: "/images/licensePlate1IL.jpg", // if images are in the public folder, they're already accessible so all you need is the rest of the path
        id: 1
    }, 
    {
        owner: 'Shweta Salian',
        registrationDate: '01-28-2025',
        model: 'Corvette Z06',
        make: 'Chevrolet',
        location: 'Seattle, Washington',
        licensePlate: "AZM9590",
        imageUrl: "/images/licensePlate2WA.jpg",
        id: 2
    }, 

    {
        owner: 'Kiara Jaye ',
        registrationDate: '03-22-2022',
        model: 'GT-R Nismo',
        make: 'Nissan',
        location: 'Brooklyn, New York',
        licensePlate: "ABC 1234",
        imageUrl: "/images/licensePlate3NY.jpg",
        id: 3
    }, 

    {
        owner: 'Maya Kawachi ',
        registrationDate: '08-15-2024',
        model: 'Camaro ZL1',
        make: 'Chevrolet',
        location: 'Honolulu, Hawaii',
        licensePlate: "ALOHA",
        imageUrl: "/images/licensePlate4HI.jpg",
        id: 4
    }, 
    {
        owner: 'Rhea Raj',
        registrationDate: '10-12-2024',
        model: 'F-Type R 75 Coupe',
        make: 'Jaguar',
        location: 'Los Angeles, California',
        licensePlate: "8TRS777",
        imageUrl: "/images/licensePlate5CA.jpg", 
        id: 5
    }, 
    {
        owner: 'Imane Bennani',
        registrationDate: '12-07-2023',
        model: 'GR Supra 3.0',
        make: 'Toyota ',
        location: 'Orlando, Florida',
        licensePlate: "ANY TEXT",
        imageUrl: "/images/licensePlate6FL.jpg",
        id: 6
    }, 
    {
        owner: 'Serena Smith',
        registrationDate: '7-19-2023',
        model: 'Mustang',
        make: 'Ford ',
        location: 'Las Vegas, Nevada',
        licensePlate: "245 - X64",
        imageUrl: "/images/licensePlate7NV.jpg",
        id: 7
    }, 
    {
        owner: 'Halle Richardson',
        registrationDate: '5-30-2023',
        model: ' MX-5 Miata',
        make: 'Mazda',
        location: 'Philadelphia, Pennsylvania',
        licensePlate: "ABC1234",
        imageUrl: "/images/licensePlate8PA.jpg",
        id: 8
    }, 
]

export default function Results(){
    const [searchTerm, setSearchTerm] = useState(""); // storing user's input, initializes searchTerm as emptystring, setSearchTerm updates state every time the user types

    // filtering results based on user search
    const filteredResults = fakeDatabase.filter((entry) =>
        entry.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.model.toLowerCase().includes(searchTerm.toLowerCase())
    ); // updates dynamically everytime the user types: matching any part of owner, make, or model names

    return (
        <div>
            <h1>Search Results</h1>
            <SearchBar onSearch={setSearchTerm}/> {/* Passing update searchterm prop to SearchBar */}
            
            {filteredResults.length > 0 ? ( // checkign if there are matching results
                <div className="results-container">
                    <PlateDetails results={filteredResults} /> {/* if true, passing results prop to plate details*/ }
                    <div className="results-image-container">
                        <PlateImage
                            imageUrl={filteredResults[0].imageUrl} // if there are results, renders PlateDetails and PlateImage
                            licensePlate={filteredResults[0].licensePlate}
                            // passing back the first image in the filter. If the full owner name, make or model is typed. The correct image will be displayed
                        />
                    </div>
                </div>
            ) : (
                <p>No results found</p> // if there are no results, displays this message
            )}
        </div>
    );
}

