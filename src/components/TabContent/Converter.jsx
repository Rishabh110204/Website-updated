import React, { useEffect, useState, useCallback } from 'react';
import { GOOGLE_SHEETS_CONFIG } from '../../config/googleSheets';

export default function TransformerSpecifications() {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGoogleSheetsData = useCallback(async () => {
    try {
      // Check if API is properly configured
      if (!GOOGLE_SHEETS_CONFIG.apiKey || GOOGLE_SHEETS_CONFIG.apiKey === 'YOUR_API_KEY' || 
          !GOOGLE_SHEETS_CONFIG.spreadsheetId || GOOGLE_SHEETS_CONFIG.spreadsheetId === 'YOUR_SPREADSHEET_ID') {
        throw new Error('Google Sheets API not properly configured');
      }

      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_CONFIG.spreadsheetId}/values/Converter?key=${GOOGLE_SHEETS_CONFIG.apiKey}`
      );
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Google Sheets API Error:', response.status, errorText);
        throw new Error(`Google Sheets API error: ${response.status} - ${errorText}`);
      }
      
      const result = await response.json();
      
      if (!result.values || result.values.length === 0) {
        throw new Error('No data found in the spreadsheet');
      }
      
      return result;
    } catch (err) {
      console.error('Error fetching data:', err);
      throw err;
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Try to fetch from Google Sheets
        const result = await fetchGoogleSheetsData();
        const [headerRow, ...rows] = result.values;
        
        setHeaders(headerRow);
        setData(rows);
        setFilteredData(rows);
        setDisplayData(rows.slice(0, itemsPerPage));
      } catch (err) {
        console.error('Failed to load from Google Sheets, using demo data:', err);
        setError('Unable to load data from Google Sheets. Showing demo data instead.');
        
        // Fallback to demo data on error
        const mockData = {
          values: [
            ['Model', 'Type', 'Power (kW)', 'Voltage (V)', 'Efficiency (%)', 'Weight (kg)', 'Price ($)', 'Manufacturer'],
            ['TRF-100', 'Step-up', '100', '220/440', '95.5', '150', '2500', 'TechCorp'],
            ['TRF-200', 'Step-down', '200', '440/220', '96.2', '280', '4500', 'PowerTech'],
            ['TRF-300', 'Isolation', '300', '220/220', '94.8', '320', '5500', 'ElectroMax'],
            ['TRF-150', 'Step-up', '150', '380/760', '95.8', '200', '3200', 'TechCorp'],
            ['TRF-250', 'Step-down', '250', '760/380', '96.5', '350', '5800', 'PowerTech'],
            ['TRF-400', 'Auto', '400', '220/240', '97.1', '450', '7200', 'ElectroMax'],
            ['TRF-500', 'Step-up', '500', '480/960', '96.8', '580', '9500', 'TechCorp'],
            ['TRF-350', 'Isolation', '350', '440/440', '95.2', '420', '6800', 'PowerTech']
          ]
        };
        
        const [headerRow, ...rows] = mockData.values;
        setHeaders(headerRow);
        setData(rows);
        setFilteredData(rows);
        setDisplayData(rows.slice(0, itemsPerPage));
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [itemsPerPage, fetchGoogleSheetsData]);

  const handleFilterChange = (header, value) => {
    const newFilters = { ...filters, [header]: value };
    setFilters(newFilters);

    const filtered = data.filter(row =>
      Object.entries(newFilters).every(([key, val]) => {
        if (!val) return true;
        const index = headers.indexOf(key);
        return row[index]?.toLowerCase().includes(val.toLowerCase());
      })
    );

    setFilteredData(filtered);
    setCurrentPage(1);
    updateDisplayData(filtered, 1);
  };

  const updateDisplayData = (dataToDisplay, page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayData(dataToDisplay.slice(startIndex, endIndex));
  };

  const resetFilters = () => {
    setFilters({});
    setFilteredData(data);
    setCurrentPage(1);
    updateDisplayData(data, 1);
  };

  const handleSort = (header) => {
    const direction = sortConfig.key === header && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key: header, direction });

    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[headers.indexOf(header)] || '';
      const bValue = b[headers.indexOf(header)] || '';
      
      // Check if values are numeric
      const aNum = parseFloat(aValue.replace(/[^\d.-]/g, ''));
      const bNum = parseFloat(bValue.replace(/[^\d.-]/g, ''));
      
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return direction === 'asc' ? aNum - bNum : bNum - aNum;
      }
      
      return direction === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });

    setFilteredData(sorted);
    updateDisplayData(sorted, currentPage);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    updateDisplayData(filteredData, newPage);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading data from Google Sheets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              📊Transformer Design Data
            </h1>
            <p className="text-lg text-gray-600">
              Get your design data here!
            </p>
            {error && (
              <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
                <strong>⚠️ Configuration Notice:</strong> {error}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* API Configuration Notice */}
        {(GOOGLE_SHEETS_CONFIG.spreadsheetId === 'YOUR_SPREADSHEET_ID' || 
          GOOGLE_SHEETS_CONFIG.apiKey === 'YOUR_API_KEY') && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">🔧 Setup Required</h3>
            <div className="text-blue-800 space-y-2">
              <p><strong>To connect to your Google Sheet:</strong></p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Get your Google Sheets API key from Google Cloud Console</li>
                <li>Make your Google Sheet public or set proper sharing permissions</li>
                <li>Copy your spreadsheet ID from the Google Sheets URL</li>
                <li>Update the GOOGLE_SHEETS_CONFIG object in the code</li>
              </ol>
              <p className="text-sm mt-3"><em>Currently showing demo data.</em></p>
            </div>
          </div>
        )}

        {/* Controls Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <span>🔍</span>
                {showFilters ? 'Hide Filters' : 'Show Filters'}
                <span>{showFilters ? '▲' : '▼'}</span>
              </button>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Showing {displayData.length} of {filteredData.length} results</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
              >
                <option value={5}>5 per page</option>
                <option value={10}>10 per page</option>
                <option value={20}>20 per page</option>
                <option value={50}>50 per page</option>
              </select>

              <button
                onClick={resetFilters}
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <span>🔄</span>
                Reset Filters
              </button>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {headers.map((header, idx) => (
                  <div key={idx} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      {header}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                      <input
                        type="text"
                        value={filters[header] || ''}
                        onChange={(e) => handleFilterChange(header, e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder={`Search ${header.toLowerCase()}...`}
                      />
                      {filters[header] && (
                        <button
                          onClick={() => handleFilterChange(header, '')}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <tr>
                  {headers.map((header, idx) => (
                    <th 
                      key={idx} 
                      className="px-6 py-4 text-left font-semibold cursor-pointer hover:bg-black/10 transition-colors"
                      onClick={() => handleSort(header)}
                    >
                      <div className="flex items-center gap-2">
                        {header}
                        {sortConfig.key === header && (
                          <span className="text-sm">
                            {sortConfig.direction === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {displayData.length === 0 ? (
                  <tr>
                    <td colSpan={headers.length} className="text-center py-12">
                      <div className="text-gray-500">
                        <div className="text-6xl mb-4">🔍</div>
                        <p className="text-xl font-medium">No data found</p>
                        <p className="text-sm">Try adjusting your filters</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  displayData.map((row, rowIndex) => (
                    <tr 
                      key={rowIndex} 
                      className="hover:bg-indigo-50 transition-colors"
                    >
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-6 py-4 text-sm text-gray-700">
                          <div className="flex items-center">
                            {cellIndex === 0 ? (
                              <span className="font-medium bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs">
                                {cell}
                              </span>
                            ) : cellIndex === 1 ? (
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                cell === 'Step-up' ? 'bg-green-100 text-green-800' :
                                cell === 'Step-down' ? 'bg-blue-100 text-blue-800' :
                                cell === 'Isolation' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-purple-100 text-purple-800'
                              }`}>
                                {cell}
                              </span>
                            ) : (
                              cell
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-gray-50 px-6 py-4 border-t">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`px-3 py-2 border rounded-lg text-sm ${
                          currentPage === pageNum
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : 'border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}