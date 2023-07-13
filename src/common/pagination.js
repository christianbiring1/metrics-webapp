/* eslint-disable */
import _ from 'lodash';

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);

  console.log(currentPage);

  const pages = _.range(1, pageCount + 1);
  if(pages === 1) return null;
  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li key={page} className="page-item">
          <a className={currentPage === page ? "page-link active" : "page-link"} href="#" onClick={() => onPageChange(page)}>{page}</a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
