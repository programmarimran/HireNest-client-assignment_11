// import React, { useState } from "react";

// const categories = [
//   "Electricity",
//   "Laptop Repair",
//   "Car Wash",
//   "Electric Repair",
//   "Plumbing Service",
//   "AC Servicing",
//   "Home Cleaning",
// ];

// const FilterComponent = ({ onFilter }) => {
//   const [selected, setSelected] = useState("");

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSelected(value);
//     onFilter(value); // send selected value to parent
//   };

//   return (
//     <div className="mb-6">
//       <label className="font-medium mr-2">Filter by Category:</label>
//       <select
//         value={selected}
//         onChange={handleChange}
//         className="select select-bordered w-full max-w-xs"
//       >
//         <option value="">All</option>
//         {categories.map((cat) => (
//           <option key={cat} value={cat}>
//             {cat}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default FilterComponent;
