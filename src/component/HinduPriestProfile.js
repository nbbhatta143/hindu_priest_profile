// Import necessary React modules
import React, { useState } from "react";
import "./HinduPriestProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Create a functional component for the Hindu Priest profile
const HinduPriestProfile = () => {
  // Define the initial state for services
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Puja Ceremony",
      description: "Perform various puja ceremonies for different occasions.",
    },
    {
      id: 2,
      title: "Astrology Consultation",
      description: "Provide astrology readings and consultations.",
    },
    {
      id: 3,
      title: "Vastu Shastra",
      description: "Offer guidance on Vastu Shastra for homes and businesses.",
    },
    // Add more services as needed
  ]);

  // Define the initial state for the priest's information
  const priestInfo = {
    name: "Priest Name",
    imageUrl: "priest_image.jpg",
    phoneNumber: "123-456-7890",
  };

  // Define a function to handle the card click event
  const handleCardClick = (id) => {
    // Toggle the card's open state
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === id ? { ...service, isOpen: !service.isOpen } : service
      )
    );
  };

  return (
    <div className="profile-container">
      <h1 className="profile-name">{priestInfo.name}</h1>
      <FontAwesomeIcon
        icon={faUser}
        size="4x" // Adjust the size as needed
        color="#333" // Adjust the color as needed
        className="profile-image"
      />
      <h2>Services</h2>
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <div onClick={() => handleCardClick(service.id)} className="card-header">
            <h3>{service.title}</h3>
          </div>
          <div className={`card-content ${service.isOpen ? "open" : ""}`}>
            {service.isOpen && <p>{service.description}</p>}
          </div>
        </div>
      ))}

      <h2>Contact Information</h2>
      <p>Phone Number: {priestInfo.phoneNumber}</p>
    </div>
  );
};

export default HinduPriestProfile;
