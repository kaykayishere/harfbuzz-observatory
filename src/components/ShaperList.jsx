import React from 'react';

const ShaperList = ({ shapers }) => {
  if (shapers.length === 0) {
    return <div className="text-gray-500">No shaper selected.</div>;
  }

  return (
    <div className="space-y-4">
      {shapers.map((shaper, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-800">{shaper.name}</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {shaper.fileCount} file{shaper.fileCount !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {shaper.files.map((file, i) => (
              <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                {file}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShaperList;