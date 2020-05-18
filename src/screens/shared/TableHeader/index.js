import React from "react";
import PropTypes from "prop-types";

function TableHeader({ columnsNames, sortUsers }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th key={c} onClick={() => sortUsers()}>
            {c}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;

TableHeader.propTypes = {
  columnsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortUsers: PropTypes.func.isRequired,
};
