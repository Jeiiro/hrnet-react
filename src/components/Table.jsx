import { useState, useMemo } from "react";
import PropTypes from 'prop-types';

/**
 * Reusable Table component with sorting, filtering and pagination
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of data objects
 * @param {Array} props.columns - Array of column definitions
 * @param {string} props.emptyMessage - Message to display when no data is available
 * @param {number} props.defaultItemsPerPage - Default number of items to display per page
 */
function Table({ data, columns, emptyMessage = "No data available", defaultItemsPerPage = 10 }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  
  // Options pour le nombre d'éléments par page
  const itemsPerPageOptions = [10, 25, 50, 100];

  // Sort data based on column
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  // Calculate pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const goToPage = (page) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  // Gestion du changement du nombre d'éléments par page
  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(Number(newItemsPerPage));
    setCurrentPage(1); // Retour à la première page lors du changement
  };

  return (
    <div className="overflow-x-auto">
      <div className="mb-4 flex justify-end">
        <div className="flex items-center">
          <label htmlFor="itemsPerPage" className="mr-2 text-sm text-gray-700">
            Afficher
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            {itemsPerPageOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="ml-2 text-sm text-gray-700">entrées par page</span>
        </div>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column) => (
              <th 
                key={column.key}
                className="py-2 px-4 border-b cursor-pointer hover:bg-gray-200"
                onClick={() => requestSort(column.key)}
              >
                {column.header}
                {sortConfig.key === column.key && (
                  <span className="ml-1">
                    {sortConfig.direction === 'ascending' ? '▲' : '▼'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                {columns.map((column) => (
                  <td key={column.key} className="py-2 px-4 border-b">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="py-4 px-4 text-center text-gray-500">
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-700">
            Affichage de {Math.min(sortedData.length, (currentPage - 1) * itemsPerPage + 1)} à {Math.min(sortedData.length, currentPage * itemsPerPage)} sur {sortedData.length} entrées
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => goToPage(currentPage - 1)} 
              disabled={currentPage === 1}
              className={`px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
            >
              Précédent
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Afficher 5 pages maximum avec la page courante au milieu si possible
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else {
                let start = Math.max(1, currentPage - 2);
                let end = Math.min(totalPages, start + 4);
                start = Math.max(1, end - 4);
                pageNum = start + i;
              }
              return (
                pageNum <= totalPages && (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={`px-3 py-1 border rounded ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
                  >
                    {pageNum}
                  </button>
                )
              );
            })}
            <button 
              onClick={() => goToPage(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
            >
              Suivant
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// PropTypes validation
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired
    })
  ).isRequired,
  emptyMessage: PropTypes.string,
  defaultItemsPerPage: PropTypes.number
};

// Default props
Table.defaultProps = {
  emptyMessage: 'No data available',
  defaultItemsPerPage: 10
};

export default Table;