import React, { useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';
import { LayoutGrid, List, Check, Star, RotateCcw } from 'lucide-react';

export const CatalogSection = () => {
  const {
    searchQuery,
    selectedCategory,
    setSelectedCategory,
    minRating,
    setMinRating,
    primeOnly,
    setPrimeOnly,
    maxPrice,
    setMaxPrice,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
    formatPrice
  } = useShop();

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    // Filter by rating
    if (minRating > 0) {
      result = result.filter(p => p.rating >= minRating);
    }

    // Filter by Prime
    if (primeOnly) {
      result = result.filter(p => p.prime);
    }

    // Filter by price
    result = result.filter(p => p.price <= maxPrice);

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchQuery, selectedCategory, minRating, primeOnly, maxPrice, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setMinRating(0);
    setPrimeOnly(false);
    setMaxPrice(2500);
    setSortBy('featured');
  };

  const currentCategoryName = CATEGORIES.find(c => c.id === selectedCategory)?.name || 'All Departments';

  return (
    <section id="amazon-catalog" className="main-shop-wrapper">
      {/* Catalog Top Controls Bar */}
      <div className="catalog-header-bar">
        <div className="catalog-results-count">
          Showing <strong>{filteredProducts.length}</strong> results for{' '}
          <strong>"{searchQuery || currentCategoryName}"</strong>
        </div>

        <div className="catalog-controls">
          <div className="sort-select-wrapper">
            <span>Sort by:</span>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Avg. Customer Review</option>
            </select>
          </div>

          <div className="view-mode-toggle">
            <button
              className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Catalog Content Layout (Sidebar + Products) */}
      <div className="catalog-content-layout">
        {/* Left Filters Sidebar */}
        <aside className="filters-sidebar">
          {/* Category Filter */}
          <div className="filter-section">
            <h4 className="filter-title">Department</h4>
            <ul className="category-filter-list">
              {CATEGORIES.map(cat => (
                <li
                  key={cat.id}
                  className={`category-filter-item ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Prime Filter */}
          <div className="filter-section">
            <h4 className="filter-title">Amazon Prime</h4>
            <label className="filter-checkbox-label">
              <input
                type="checkbox"
                checked={primeOnly}
                onChange={(e) => setPrimeOnly(e.target.checked)}
              />
              <span className="prime-filter-badge">
                prime <Check size={13} strokeWidth={3} />
              </span>
            </label>
          </div>

          {/* Customer Reviews Filter */}
          <div className="filter-section">
            <h4 className="filter-title">Customer Reviews</h4>
            <div 
              className="rating-filter-item"
              onClick={() => setMinRating(minRating === 4.5 ? 0 : 4.5)}
            >
              <div className="star-icons">
                {[1, 2, 3, 4].map(s => <Star key={s} size={14} fill="#ffa41c" color="#ffa41c" />)}
                <Star size={14} fill="#ffa41c" color="#ffa41c" style={{ clipPath: 'inset(0 50% 0 0)' }} />
              </div>
              <span>4.5 & Up</span>
            </div>
            <div 
              className="rating-filter-item"
              onClick={() => setMinRating(minRating === 4.0 ? 0 : 4.0)}
            >
              <div className="star-icons">
                {[1, 2, 3, 4].map(s => <Star key={s} size={14} fill="#ffa41c" color="#ffa41c" />)}
                <Star size={14} color="#ffa41c" />
              </div>
              <span>4.0 & Up</span>
            </div>
            {minRating > 0 && (
              <button 
                onClick={() => setMinRating(0)}
                style={{ fontSize: 11, color: '#007185', marginTop: 4, textDecoration: 'underline' }}
              >
                Clear rating filter
              </button>
            )}
          </div>

          {/* Price Range Filter */}
          <div className="filter-section">
            <h4 className="filter-title">Price Range</h4>
            <div className="price-slider-wrapper">
              <input
                type="range"
                min="10"
                max="2500"
                step="25"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="price-slider"
              />
              <div className="price-labels">
                <span>{formatPrice(10).formatted}</span>
                <span>Up to <strong>{formatPrice(maxPrice).formatted}</strong></span>
              </div>
            </div>
          </div>

          {/* Reset Filters */}
          <button className="clear-filters-btn" onClick={resetFilters}>
            <RotateCcw size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
            Reset all filters
          </button>
        </aside>

        {/* Product Listing Grid */}
        <main>
          {filteredProducts.length === 0 ? (
            <div style={{ background: '#fff', padding: 40, borderRadius: 4, textAlign: 'center' }}>
              <h3 style={{ fontSize: 20, marginBottom: 8 }}>No results found</h3>
              <p style={{ color: '#666', marginBottom: 16 }}>
                Try adjusting your search query, price slider or category filter.
              </p>
              <button className="add-to-cart-btn" style={{ maxWidth: 200 }} onClick={resetFilters}>
                Clear all filters
              </button>
            </div>
          ) : (
            <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </section>
  );
};
