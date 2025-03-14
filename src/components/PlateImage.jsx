import React from "react"

export default function PlateImage({ imageUrl, licensePlate }){ // props passed from Results.jsx parent
    return (
        <div className="license-image-container"> {/* container holding the image of plate, and license plate string*/}
            <img
                src={imageUrl}
                alt={licensePlate}
                className="plate-image"
            />
            <p className="plate-number">
                LICENSE PLATE: {licensePlate}
            </p>
        </div>
    );
}