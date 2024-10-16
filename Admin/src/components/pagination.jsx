import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import chevron icons

const Pagination = ({
  customersPerPage,
  totalCustomers,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  return (
    <nav>
      <ul className="flex justify-center items-center space-x-2">
        <li>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1} // Disable if on the first page
            className="px-3 py-1 rounded-xl focus:outline-none bg-gray-200 hover:bg-gray-300"
          >
            <ChevronLeft />
          </button>
        </li>

        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${
              currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <button
              onClick={() => paginate(number)}
              className="px-3 py-1 rounded-xl focus:outline-none"
            >
              {number}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={handleNextPage}
            disabled={currentPage === pageNumbers.length} // Disable if on the last page
            className="px-3 py-1 rounded-xl focus:outline-none bg-gray-200 hover:bg-gray-300"
          >
            <ChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

// Define PropTypes for the Pagination component
Pagination.propTypes = {
  customersPerPage: PropTypes.number.isRequired,
  totalCustomers: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
