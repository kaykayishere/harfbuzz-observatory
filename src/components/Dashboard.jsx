import React from 'react';

const Dashboard = ({ totalFiles, testFiles, shaperCount, dataCandidateFiles }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="text-sm text-gray-500">Total Files</div>
        <div className="text-2xl font-bold">{totalFiles.toLocaleString()}</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="text-sm text-gray-500">Shaper Modules</div>
        <div className="text-2xl font-bold">{shaperCount}</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="text-sm text-gray-500">Test Files</div>
        <div className="text-2xl font-bold">{testFiles.toLocaleString()}</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="text-sm text-gray-500">Data Candidates</div>
        <div className="text-2xl font-bold">{dataCandidateFiles.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default Dashboard;