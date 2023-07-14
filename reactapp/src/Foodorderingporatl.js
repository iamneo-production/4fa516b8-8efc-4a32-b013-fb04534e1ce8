import React, { useState } from 'react';

const FoodOrderingPortal = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [foodItem, setFoodItem] = useState([
    { name: 'Dosa', category: 'South Indian' },
    { name: 'Biryani', category: 'Arabic' },
    { name: 'Idli', category: 'South Indian' },
    { name: 'Shawarma', category: 'Arabic' },
  ]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredFoodItems = selectedCategory === 'All' 
    ? foodItem
    : foodItem.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <h2>Food Ordering Portal</h2>
      
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

export default FoodOrderingPortal;
