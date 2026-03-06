'use client';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import { ChevronRight, ChevronLeft, Filter, ChevronDown, Check } from 'lucide-react';

export default function MainShop({ products }) {
  const [showFilter, setShowFilter] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('RECOMMENDED');
  const sortOptions = [
    'RECOMMENDED', 
    'NEWEST FIRST', 
    'POPULAR', 
    'PRICE : HIGH TO LOW', 
    'PRICE : LOW TO HIGH'
  ];

 
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

 
  const [mobileFilterVisible, setMobileFilterVisible] = useState(false);

  const handleFilterToggle = () => {
    if (isMobile) {
      setMobileFilterVisible(!mobileFilterVisible);
    } else {
      setShowFilter(!showFilter);
    }
  };

  return (
    <div className="header-container">
     
      <section className="hero-section">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>

      
      <div className="shop-controls">
        <div className="left-controls">
          <span className="item-count">{products.length} ITEMS</span>
          <button 
            className="filter-toggle" 
            onClick={handleFilterToggle}
          >
            {isMobile ? (
              <span className="toggle-text">
                <Filter size={14} /> FILTER
              </span>
            ) : (
              <>
                {showFilter ? (
                  <span className="toggle-text">
                    <ChevronLeft size={16} /> HIDE FILTER
                  </span>
                ) : (
                  <span className="toggle-text">
                    <ChevronRight size={16} /> SHOW FILTER
                  </span>
                )}
              </>
            )}
          </button>
        </div>

        
        <div className="sort-dropdown">
          <button 
            className="sort-button" 
            onClick={() => setIsSortOpen(!isSortOpen)}
          >
            {selectedSort} <ChevronDown size={16} />
          </button>
          
          {isSortOpen && (
            <div className="sort-menu">
              {sortOptions.map((option) => (
                <div 
                  key={option}
                  className={`sort-option ${selectedSort === option ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedSort(option);
                    setIsSortOpen(false);
                  }}
                >
                  {selectedSort === option && <Check size={16} className="check-icon" />}
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      
      <div className="content-area">
        
        {isMobile && mobileFilterVisible && (
          <>
            <div 
              className="mobile-filter-overlay" 
              onClick={() => setMobileFilterVisible(false)}
            />
            <aside className="sidebar-container mobile-filter-active">
              <div className="mobile-filter-header">
                <h3>FILTERS</h3>
                <button 
                  className="close-filter"
                  onClick={() => setMobileFilterVisible(false)}
                >
                  ✕
                </button>
              </div>
              <Sidebar />
            </aside>
          </>
        )}

        
        {!isMobile && (
          <aside className={`sidebar-container desktop-sidebar ${showFilter ? 'open' : 'closed'}`}>
            <div className="sidebar-inner">
              <Sidebar />
            </div>
          </aside>
        )}
        
        
        <div className={`product-grid ${!isMobile && !showFilter ? 'full-width' : ''}`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}