import React from 'react';

const ShaperFilter = ({ shaperNames, selected, onSelect }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-semibold text-gray-700 mb-2">Filter by Script</h2>
      <select
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="all">All Scripts</option>
        {shaperNames.map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
    </div>
  );
};

export default ShaperFilter;