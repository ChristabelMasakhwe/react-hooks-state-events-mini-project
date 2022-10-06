import React from "react";

function CategoryFilter({ categories, handleBtns, selectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, i) => {
        const className = category === selectedCategory ? "selected" : null;
        return (
          <button
            className={className}
            // className={selected ? "selected" : ""}
            onClick={handleBtns}
            value={category}
            key={i}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
export default CategoryFilter;
