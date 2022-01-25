import React from "react"

function Filter({ setCategoryFilter, setFoodSearch }) {
  return (
    <>
      <div className="phase-buttons">
        <button onClick={() => setCategoryFilter("All")}>All</button>
        <button onClick={() => setCategoryFilter("sashimi/nigiri")}>sashimi/nigiri</button>
        <button onClick={() => setCategoryFilter("rice dishes")}>rice dishes</button>
        <button onClick={() => setCategoryFilter("starter")}>starter</button>
        <button onClick={() => setCategoryFilter("noodles")}>noodles</button>
      </div>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setFoodSearch(e.target.value)}
      />
    </>
  );
}

export default Filter;