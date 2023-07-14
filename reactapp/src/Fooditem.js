import React from 'react';
import {useState} from 'react'
import { FaStar } from 'react-icons/fa';

const FoodItem = ({ name, price, count }) => {
  
  const icons = Array.from({ length: count }, (_, index) => <FaStar key={index} />);

  return (
    <div>
      <h3>{name}</h3>
     
      <p>Price: {price}</p>
      <div>{icons}</div>
    </div>
  );
};

const FoodPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredFoodItems = selectedCategory === 'All' 
    ? foodItem 
    : foodItem.filter((item) => item.category === selectedCategory);
  const foodItem = [
    {
      name: 'Pizza Margherita',
      description: 'Classic Italian pizza with tomato sauce and mozzarella cheese.',
      price: '$9.99',
      count: 3,
      category:'indian'
    },
    {
      name: 'Chicken Biryani',
      description: 'Fragrant rice dish cooked with basmati rice, spices, and chicken.',
      price: '$12.99',
      count: 5,
      category:'arabic'
    },
    // Add more food items as needed
  ];

  return (
    <div>
    <div>
      <h2>Food Menu</h2>
      {foodItem.map((item, index) => (
        <FoodItem
          key={index}
          name={item.name}
          
          price={item.price}
          count={item.count}
        />
      ))}
    </div>
    <div>
    <label htmlFor="category">Filter by category:</label>
    <select id="category" name="category" value={selectedCategory} onChange={handleCategoryChange}>
      <option value="All">All</option>
      <option value="South Indian">South Indian</option>
      <option value="Arabic">Arabic</option>
    </select>
  </div>
  <div>
        <h3>Food Items:</h3>
        <ul>
          {filteredFoodItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
  </div>
  
  );
};

export default FoodPage;
