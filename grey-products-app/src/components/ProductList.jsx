import React from "react";
import Pagination from "./Pagination";

const ProductList = ({
  products,
  viewMode,
  onEdit,
  currentPage,
  setCurrentPage,
}) => {
  const perPage = 3;
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  return (
    <div className="product-list">
      {viewMode === "list" ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>{p.stock}</td>
                <td>
                  <button onClick={() => onEdit(p)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="card-grid">
          {currentProducts.map((p) => (
            <div className="card" key={p.id}>
              <h4>{p.name}</h4>
              <p>₹ {p.price}</p>
              <p>{p.category}</p>
              <p>Stock: {p.stock}</p>
              <button onClick={() => onEdit(p)}>Edit</button>
            </div>
          ))}
        </div>
      )}

      <Pagination
        total={products.length}
        perPage={perPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;
