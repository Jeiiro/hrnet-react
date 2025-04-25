import { useState, useMemo } from "react";
import PropTypes from 'prop-types';

/**
 * Reusable Table component with sorting and filtering
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of data objects
 * @param {Array} props.columns - Array of column definitions
 * @param {string} props.emptyMessage - Message to display when no data is available
 */
function Table({ data, columns, emptyMessage = "No data available" }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

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

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="overflow-x-auto">
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
          {sortedData.length > 0 ? (
            sortedData.map((row, rowIndex) => (
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
  emptyMessage: PropTypes.string
};

// Default props
Table.defaultProps = {
  emptyMessage: 'No data available'
};

export default Table;