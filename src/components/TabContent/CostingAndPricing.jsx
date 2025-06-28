// CostingPage.jsx
import React, { useEffect, useState, useCallback } from 'react';

// Backend API configuration
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function CostingPage() {
  const [costingData, setCostingData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Load data on component mount
  useEffect(() => {
    fetchSheetData();
  }, []);

  const fetchSheetData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      console.log('Fetching costing data from backend...');
      
      const response = await fetch(`${BACKEND_URL}/api/sheets/Costing`);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Backend API Response:', errorText);
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      const values = data.values || [];
      setCostingData(values);
      console.log('Fetched costing data:', values);
    } catch (error) {
      console.error('Error fetching sheet data:', error);
      setError(`Failed to fetch sheet data: ${error.message}. Make sure the backend server is running on port 5000.`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCellClick = (rowIndex, cellIndex, currentValue) => {
    setIsEditing(true);
    setEditingCell({ rowIndex, cellIndex });
    setEditValue(currentValue || '');
  };

  const handleCellEdit = async () => {
    if (!editingCell) return;

    setIsLoading(true);
    setError(null);
    try {
      const { rowIndex, cellIndex } = editingCell;
      const columnLetter = String.fromCharCode(65 + cellIndex); // Convert to A, B, C, etc.
      const cell = `${columnLetter}${rowIndex + 1}`;

      console.log('Updating cell:', cell, 'with value:', editValue);

      // Use backend API to update the cell
      const response = await fetch(`${BACKEND_URL}/api/sheets/Costing/${cell}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          value: editValue
        })
      });

      console.log('Update response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Update error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log('Update successful:', result);

      // Update local state
      const newData = [...costingData];
      if (!newData[rowIndex]) {
        newData[rowIndex] = [];
      }
      newData[rowIndex][cellIndex] = editValue;
      setCostingData(newData);

      setIsEditing(false);
      setEditingCell(null);
      setEditValue('');
    } catch (error) {
      console.error('Error updating cell:', error);
      setError(`Failed to update cell: ${error.message}. Make sure the backend server is running and has proper permissions.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCellEdit();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditingCell(null);
      setEditValue('');
    }
  };

  const filteredData = costingData.filter(row => 
    row.some(cell => 
      cell && cell.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="text-center">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Connection Error</h1>
              <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6 max-w-2xl mx-auto">
                <strong className="text-lg">Error:</strong> {error}
              </div>
              <div className="space-y-4">
                <button
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
                >
                  🔄 Reload Page
                </button>
                <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg max-w-md mx-auto">
                  <p className="font-semibold mb-2">Troubleshooting Steps:</p>
                  <ul className="text-left space-y-1">
                    <li>• Make sure the backend server is running on port 5000</li>
                    <li>• Check that the service account has access to the Google Sheet</li>
                    <li>• Verify the sheet ID is correct in the backend</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">📊 Costing Management</h1>
              <p className="text-gray-600 text-lg">Edit and manage your costing data in real-time</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={fetchSheetData}
                disabled={isLoading}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg disabled:opacity-50 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Loading...
                  </>
                ) : (
                  <>
                    <span>🔄</span>
                    Refresh Data
                  </>
                )}
              </button>
            </div>
          </div>
          
          {/* Search and Instructions */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search in costing data..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-medium flex items-center gap-2">
                <span className="text-xl">💡</span>
                <strong>Quick Edit:</strong> Click any cell to edit • Enter to save • Escape to cancel
              </p>
              <p className="text-blue-600 text-sm mt-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Backend: {BACKEND_URL} | Status: {costingData.length > 0 ? 'Connected' : 'Connecting...'}
              </p>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6 flex items-center gap-3">
            <span className="text-xl">⚠️</span>
            <div>
              <strong className="text-lg">Error:</strong> {error}
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 font-medium">Loading costing data...</p>
          </div>
        )}

        {/* Data Table */}
        {!isLoading && filteredData.length > 0 && (
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <tbody>
                  {filteredData.map((row, rowIndex) => (
                    <tr key={rowIndex} className={`border-b border-gray-200 ${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="border-r border-gray-200 px-6 py-4 text-base font-medium text-gray-800 cursor-pointer hover:bg-blue-100 transition-all duration-200 min-w-[180px] relative group"
                          onClick={() => handleCellClick(rowIndex, cellIndex, cell)}
                        >
                          {isEditing && editingCell?.rowIndex === rowIndex && editingCell?.cellIndex === cellIndex ? (
                            <div className="relative">
                              <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                                onBlur={handleCellEdit}
                                className="w-full p-3 border-2 border-blue-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white shadow-lg"
                                autoFocus
                              />
                              <div className="absolute -top-8 left-0 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                                Press Enter to save, Esc to cancel
                              </div>
                            </div>
                          ) : (
                            <div className="min-h-[32px] flex items-center group-hover:bg-blue-100 p-2 rounded transition-all duration-200">
                              <span className="truncate">{cell || '-'}</span>
                              <span className="ml-2 opacity-0 group-hover:opacity-100 text-blue-500 text-sm transition-opacity duration-200">
                                ✏️
                              </span>
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredData.length === 0 && !isLoading && (
          <div className="text-center py-16 bg-white rounded-xl shadow-xl">
            <div className="text-8xl mb-6">📊</div>
            <h3 className="text-3xl font-bold text-gray-600 mb-4">No Data Found</h3>
            <p className="text-gray-500 text-lg mb-6 max-w-md mx-auto">
              {searchTerm ? 'No results match your search criteria.' : 'Your Google Sheet might be empty or not accessible.'}
            </p>
            <div className="space-x-4">
              <button
                onClick={fetchSheetData}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                🔄 Try Again
              </button>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Clear Search
                </button>
              )}
            </div>
          </div>
        )}

        {/* Data Summary */}
        {filteredData.length > 0 && (
          <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{filteredData.length}</div>
                <div className="text-gray-600">Total Rows</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{filteredData[0]?.length || 0}</div>
                <div className="text-gray-600">Total Columns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{searchTerm ? 'Filtered' : 'All'}</div>
                <div className="text-gray-600">Data View</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
