const Table = ({ tableHeaders, tableRows, customClass = "tableTT" }) => {
  return (
    <table className={customClass}>
      <thead>
        <tr className="table-head">
          {tableHeaders.map((header, i) => (
            <th className="table-cell head-cell" key={i}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {Object.values(tableRows).map((row) => (
          <tr className="table-row" key={row.id}>
            {Object.values(row).map((cell, i) => (
              <td className="table-cell" key={i}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
