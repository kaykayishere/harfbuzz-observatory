import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ShaperList from './components/ShaperList';
import ShaperFilter from './components/ShaperFilter';
import shaperData from './data/shaperData.json';

function App() {
  const [selectedShaper, setSelectedShaper] = useState('all');
  const shaperNames = shaperData.shapers.map(s => s.name);
  const filteredShapers = selectedShaper === 'all'
    ? shaperData.shapers
    : shaperData.shapers.filter(s => s.name === selectedShaper);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">🔤 HarfBuzz Observatory</h1>
        <p className="text-gray-600 mb-6">Digital language shaping engine — script coverage and file inventory</p>
        
        <Dashboard 
          totalFiles={shaperData.totalFiles}
          testFiles={shaperData.testFiles}
          shaperCount={shaperData.shapers.length}
          dataCandidateFiles={shaperData.dataCandidateFiles}
        />

        <div className="mt-8 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <ShaperFilter 
              shaperNames={shaperNames}
              selected={selectedShaper}
              onSelect={setSelectedShaper}
            />
          </div>
          <div className="md:w-3/4">
            <ShaperList shapers={filteredShapers} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;