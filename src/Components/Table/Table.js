import React from 'react';
import './Table.css'; // Import the CSS file

const Table = () => {
  const data = [
    { orderNo: 1, item: 'Item 1', customer: 'Customer A', price: 50, status: 'Pending' },
    { orderNo: 2, item: 'Item 2', customer: 'Customer B', price: 75, status: 'Completed' },
    { orderNo: 3, item: 'Item 3', customer: 'Customer C', price: 100, status: 'Shipped' },
    { orderNo: 1, item: 'Item 1', customer: 'Customer A', price: 50, status: 'Pending' },
    { orderNo: 2, item: 'Item 2', customer: 'Customer B', price: 75, status: 'Completed' },
    { orderNo: 3, item: 'Item 3', customer: 'Customer C', price: 100, status: 'Shipped' },
    { orderNo: 1, item: 'Item 1', customer: 'Customer A', price: 50, status: 'Pending' },
    { orderNo: 2, item: 'Item 2', customer: 'Customer B', price: 75, status: 'Completed' },
    { orderNo: 3, item: 'Item 3', customer: 'Customer C', price: 100, status: 'Shipped' },
    { orderNo: 1, item: 'Item 1', customer: 'Customer A', price: 50, status: 'Pending' },
    
    // Add more data as needed
  ];

  const columns = ['Order No', 'Item', 'Customer', 'Price', 'Status'];

  return (
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{row.orderNo}</td>
            <td>{row.item}</td>
            <td>{row.customer}</td>
            <td>{row.price}</td>
            <td className={row.status == "Pending" ? "status-red" : "status-green"}>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
