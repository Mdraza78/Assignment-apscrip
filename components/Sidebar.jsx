import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const [expandedCategories, setExpandedCategories] = useState({
    'IDEAL FOR': true,
    'OCCASION': false,
    'WORK': false,
    'FABRIC': false,
    'SEGMENT': false,
    'SUITABLE FOR': false,
    'RAW MATERIALS': false,
    'PATTERN': false
  });

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const filterCategories = [
    { 
      name: "IDEAL FOR", 
      options: [
        { label: "Men", count: 10 },
        { label: "Women", count: 15 },
        { label: "Baby & Kids", count: 8 }
      ] 
    },
    { 
      name: "OCCASION", 
      options: [
        { label: "Casual", count: 20 },
        { label: "Formal", count: 12 },
        { label: "Party", count: 8 }
      ] 
    },
    { 
      name: "WORK", 
      options: [
        { label: "Office", count: 15 },
        { label: "Work from Home", count: 10 },
        { label: "Business", count: 7 }
      ] 
    },
    { 
      name: "FABRIC", 
      options: [
        { label: "Cotton", count: 25 },
        { label: "Polyester", count: 18 },
        { label: "Wool", count: 6 },
        { label: "Silk", count: 4 }
      ] 
    },
    { 
      name: "SEGMENT", 
      options: [
        { label: "Premium", count: 12 },
        { label: "Standard", count: 22 },
        { label: "Economy", count: 8 }
      ] 
    },
    { 
      name: "SUITABLE FOR", 
      options: [
        { label: "Summer", count: 18 },
        { label: "Winter", count: 14 },
        { label: "All Season", count: 10 }
      ] 
    },
    { 
      name: "RAW MATERIALS", 
      options: [
        { label: "Organic", count: 8 },
        { label: "Recycled", count: 6 },
        { label: "Conventional", count: 28 }
      ] 
    },
    { 
      name: "PATTERN", 
      options: [
        { label: "Solid", count: 20 },
        { label: "Printed", count: 15 },
        { label: "Striped", count: 7 },
        { label: "Checked", count: 5 }
      ] 
    },
  ];

  return (
    <aside className="sidebar">
      
      <div className="customizable-filter">
        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkbox-label">CUSTOMIZABLE</span>
        </label>
      </div>

      <hr className="filter-divider" />

      
      {filterCategories.map((category) => (
        <div key={category.name} className="filter-group">
          <div 
            className="filter-header" 
            onClick={() => toggleCategory(category.name)}
          >
            <h3>{category.name}</h3>
            <ChevronDown 
              size={18} 
              strokeWidth={1.5} 
              className={`filter-arrow ${expandedCategories[category.name] ? 'expanded' : ''}`} 
            />
          </div>
          
          {expandedCategories[category.name] && (
            <div className="filter-options">
              {category.options.map((option) => (
                <label key={option.label} className="filter-option">
                  <input type="checkbox" />
                  <span className="option-label">{option.label}</span>
                  <span className="option-count">{option.count}</span>
                </label>
              ))}
            </div>
          )}
          
          {!expandedCategories[category.name] && (
            <p className="filter-subtext">All</p>
          )}
        </div>
      ))}
    </aside>
  );
}