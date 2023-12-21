import React, { useState } from 'react';


interface DropDownProps {
  // Add your component's props here
}

const DropDown: React.FC<DropDownProps> = (props) => {
    const [selectedOption, setSelectedOption] = useState("");
    
  const handleSelect = (option : string) => {
    setSelectedOption(option);
    // Add any additional logic you want to perform when an option is selected
  };

  const dropdownOptions = ['Best Sellers', "New Arrivals", "Price - Low to High", "Price - High to Low", "Rating", "Discounts/Sale","Availability"];

 
  return (
    <div className="dropdown">
      <select
        id="dropdown"
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="" disabled>
          Choose an option
        </option>
        {dropdownOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

    </div>
  );
};

export default DropDown;
