import "../styles.css";
import PlateDetails from "../components/PlateDetails";
export default function Results(){
    return (
        <div>
            <h1>Search Results</h1>
            <p>Data will be displayed here.</p>
            <PlateDetails />
        </div>
    )
}

// in JSON format
const fakeDatabase = [
    {
        owner: 'Liz Yan',
        registrationDate: '05-04-2014',
        model: '718 Cayman G14',
        make: 'Porsche',
        location: 'Chicago, Illinois',
        id: 1
    }, 
    {
        owner: 'Shweta Salian',
        registrationDate: '01-28-2025',
        model: 'Corvette Z06',
        make: 'Chevrolet',
        location: 'Seattle, Washington',
        id: 2
    }, 

    {
        owner: 'Kiara Jaye ',
        registrationDate: '03-22-2022',
        model: 'GT-R Nismo',
        make: 'Nissan',
        location: 'Brooklyn, New York',
        id: 3
    }, 

    {
        owner: 'Maya Kawachi ',
        registrationDate: '08-15-2024',
        model: 'Camaro ZL1',
        make: 'Chevrolet',
        location: 'Honolulu, Hawaii',
        id: 4
    }, 
    {
        owner: 'Rhea Raj',
        registrationDate: '10-12-2024',
        model: 'F-Type R 75 Coupe',
        make: 'Jaguar',
        location: 'Los Angeles, California',
        id: 5
    }, 
    {
        owner: 'Imane Bennani',
        registrationDate: '12-07-2023',
        model: 'GR Supra 3.0',
        make: 'Toyota ',
        location: 'Orlando, Florida',
        id: 6
    }, 
]